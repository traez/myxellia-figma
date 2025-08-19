import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

const SalesO = () => {
  const metrics = [
    {
      title: "Total Inflow",
      value: "₦120,000,000.00",
      change: "25%",
      isPositive: true,
      color: "text-blue-600",
    },
    {
      title: "MRR",
      value: "₦50,000,000.00",
      change: "2%",
      isPositive: true,
      color: "text-green-600",
    },
    {
      title: "Commission Revenue",
      value: "₦200,000,000.00",
      change: "0.5%",
      isPositive: true,
      color: "text-green-400",
    },
    {
      title: "GMV",
      value: "₦100,000,000.00",
      change: "-0.5%",
      isPositive: false,
      color: "text-red-600",
    },
  ];

  const timeOptions = [
    { label: "1 Week", active: false },
    { label: "1 Month", active: false },
    { label: "1 Year", active: true },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-0.5 md:p-1">
      <Card className="w-full">
        <CardContent>
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Sales Overview
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                Showing overview Jan 2022 - Sep 2022
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
                      ? "bg-gray-200 text-black shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
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
            <div>
              <Card>
                <CardContent className="p-2">
                  {/* Chart Placeholder */}
                  <div className="h-32 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 text-xs">
                      Bar Chart Placeholder
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Metrics Section - Stacked on mobile, 2x2 grid on tablet and desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-1.5">
              {metrics.map((metric, index) => (
                <Card key={index} className="h-fit p-4">
                  <CardContent className="p-0.5">
                    <div className="space-y-2 flex flex-col justify-around items-center h-full">
                      <h3 className={`text-[18px] font-bold ${metric.color}`}>
                        {metric.value}
                      </h3>
                      <div className="flex flex-row items-center justify-start w-full">
                        <p className="text-xs text-gray-600 whitespace-nowrap">
                          {metric.title}
                        </p>
                        <div className="flex items-center gap-2">
                          {metric.isPositive ? (
                            <FaArrowCircleUp className="w-3 h-3 text-green-500" />
                          ) : (
                            <FaArrowCircleDown className="w-3 h-3 text-red-500" />
                          )}
                          <span
                            className={`text-xs font-medium ${
                              metric.isPositive
                                ? "text-green-600"
                                : "text-red-600"
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
