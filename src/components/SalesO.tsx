"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaArrowCircleUp,
  FaArrowCircleDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const SalesO = () => {
  const [scrollIndex, setScrollIndex] = useState(0); // Starting position for scrolling

  const metrics = [
    {
      title: "Total Inflow",
      value: "₦120,000,000.00",
      change: "2.5%",
      isPositive: true,
      color: "text-[var(--deep-blue)]",
    },
    {
      title: "MRR",
      value: "₦50,000,000.00",
      change: "2.5%",
      isPositive: true,
      color: "text-[var(--light-green)]",
    },
    {
      title: "Commission Revenue",
      value: "₦200,000,000.00",
      change: "0.5%",
      isPositive: true,
      color: "text-[var(--teal)]",
    },
    {
      title: "GMV",
      value: "₦100,000,000.00",
      change: "-0.5%",
      isPositive: false,
      color: "text-[var(--light-red)]",
    },
  ];

  const timeOptions = [
    { label: "1 Week", active: false },
    { label: "1 Month", active: false },
    { label: "1 Year", active: true },
  ];

  // Sample data for 12 months
  const allMonthsData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Inflow",
        data: [35, 28, 15, 25, 10, 50, 37, 24, 38, 45, 32, 28],
        backgroundColor: "rgba(37, 37, 230, 0.8)",
        borderColor: "rgba(37, 37, 230, 1)",
        borderWidth: 1,
      },
      {
        label: "MRR",
        data: [28, 25, 8, 15, 8, 37, 25, 18, 35, 38, 28, 22],
        backgroundColor: "rgba(18, 183, 106, 0.8)",
        borderColor: "rgba(18, 183, 106, 1)",
        borderWidth: 1,
      },
      {
        label: "Commission Revenue",
        data: [12, 10, 5, 10, 6, 18, 15, 8, 15, 20, 15, 12],
        backgroundColor: "rgba(20, 184, 166, 0.8)",
        borderColor: "rgba(20, 184, 166, 1)",
        borderWidth: 1,
      },
      {
        label: "GMV",
        data: [8, 6, 3, 8, 5, 12, 10, 5, 10, 15, 10, 8],
        backgroundColor: "rgba(240, 68, 56, 0.8)",
        borderColor: "rgba(240, 68, 56, 1)",
        borderWidth: 1,
      },
    ],
  };

  const getVisibleData = () => {
    const visibleMonths = 9; // Show 9 months at a time
    const endIndex = Math.min(scrollIndex + visibleMonths, 12);
    const startIndex = scrollIndex;

    return {
      labels: allMonthsData.labels.slice(startIndex, endIndex),
      datasets: allMonthsData.datasets.map((dataset) => ({
        ...dataset,
        data: dataset.data.slice(startIndex, endIndex),
      })),
    };
  };

  const canScrollLeft = scrollIndex > 0;
  const canScrollRight = scrollIndex < 3; // Max scroll position (12 - 9 = 3)

  const scrollLeft = () => {
    if (canScrollLeft) {
      setScrollIndex(Math.max(0, scrollIndex - 3));
    }
  };

  const scrollRight = () => {
    if (canScrollRight) {
      setScrollIndex(Math.min(3, scrollIndex + 3));
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ₦${context.parsed.y}M`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: any) => value + "m",
          font: {
            size: 10,
          },
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        ticks: {
          font: {
            size: 10,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 2,
      },
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-0.5 md:p-1">
      <Card className="w-full">
        <CardContent>
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
            <div>
              <h1 className="text-xl font-bold text-[var(--black)]">
                Sales Overview
              </h1>
              <p className="text-xs text-[var(--medium-gray)] mt-0.5">
                Showing overview Jan 2022 - Dec 2022
              </p>
            </div>
            <Button
              variant="outline"
              className="self-start sm:self-auto bg-transparent text-sm px-3 py-1"
            >
              View Transactions
            </Button>
          </div>

          {/* Time Period Tabs */}
          <div className="flex justify-center sm:justify-end mb-2">
            <div className="flex rounded-lg p-0.5">
              {timeOptions.map((option, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    option.active
                      ? "bg-[var(--light-gray)] text-[var(--black)] shadow-sm"
                      : "text-[var(--medium-gray)] hover:text-[var(--black)]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content - Responsive Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
            {/* Chart Section - Takes full width on mobile/tablet, 50% on desktop */}
            <aside className="relative">
              <Card>
                <CardContent className="p-1">
                  <div className="relative">
                    {/* Left Navigation Arrow */}
                    <button
                      onClick={scrollLeft}
                      disabled={!canScrollLeft}
                      className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${
                        canScrollLeft
                          ? "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--very-light-gray)]"
                          : "text-[var(--light-gray)] cursor-not-allowed"
                      }`}
                    >
                      <FaChevronLeft className="w-4 h-4" />
                    </button>

                    {/* Right Navigation Arrow */}
                    <button
                      onClick={scrollRight}
                      disabled={!canScrollRight}
                      className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full transition-colors ${
                        canScrollRight
                          ? "text-[var(--medium-gray)] hover:text-[var(--black)] hover:bg-[var(--very-light-gray)]"
                          : "text-[var(--light-gray)] cursor-not-allowed"
                      }`}
                    >
                      <FaChevronRight className="w-4 h-4" />
                    </button>

                    {/* Bar Chart */}
                    <div className="h-32 px-6">
                      <Bar data={getVisibleData()} options={chartOptions} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Metrics Section - Stacked on mobile, 2x2 grid on tablet and desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-1.5">
              {metrics.map((metric, index) => (
                <Card key={index} className="h-fit p-4">
                  <CardContent className="p-0.5">
                    <div className="space-y-2 flex flex-col justify-around items-center h-full">
                      <h3
                        className={`text-[18px] text-center xl:text-left w-full font-bold ${metric.color}`}
                      >
                        {metric.value}
                      </h3>
                      <div className="flex flex-row items-center justify-center xl:justify-start w-full">
                        <p className="text-xs text-[var(--medium-gray)] whitespace-nowrap">
                          {metric.title}
                        </p>
                        <div className="flex items-center gap-2">
                          {metric.isPositive ? (
                            <FaArrowCircleUp className="w-3 h-3 ml-2 text-[var(--light-green)]" />
                          ) : (
                            <FaArrowCircleDown className="w-3 h-3 ml-2 text-[var(--light-red)]" />
                          )}
                          <span
                            className={`text-xs font-medium ${
                              metric.isPositive
                                ? "text-[var(--light-green)]"
                                : "text-[var(--light-red)]"
                            }`}
                          >
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesO;
