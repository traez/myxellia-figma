"use client";
import { Sheet, SheetTitle, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import { IoChevronBack, IoChevronForward, IoArrowBack } from "react-icons/io5";

interface CalendarModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Calendar({ open, onOpenChange }: CalendarModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(2023, 10, 16)
  );
  const [currentDate, setCurrentDate] = useState(new Date(2023, 10, 1)); // November 2023

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THURS", "FRI", "SAT"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const getNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: number, isCurrentMonth = true) => {
    if (isCurrentMonth) {
      const newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      setSelectedDate(newDate);
    }
  };

  const isSelectedDate = (day: number) => {
    return (
      selectedDate &&
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const daysInPrevMonth = getDaysInMonth(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );

    const days = [];

    // Previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push(
        <button
          key={`prev-${day}`}
          className="p-3 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-gray-300 transition-colors flex flex-col items-center justify-center min-h-11 text-sm font-medium relative"
          onClick={() => handleDateClick(day, false)}
        >
          {day}
        </button>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isSelectedDate(day);
      days.push(
        <button
          key={day}
          className={`p-3 rounded-lg transition-colors flex flex-col items-center justify-center min-h-11 text-sm font-medium relative ${
            isSelected
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "text-white hover:bg-gray-700"
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </button>
      );
    }

    // Next month's leading days
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (firstDay + daysInMonth);

    for (let day = 1; day <= remainingCells; day++) {
      const isDecember = currentDate.getMonth() === 10; // November
      days.push(
        <button
          key={`next-${day}`}
          className="p-3 rounded-lg text-gray-500 hover:bg-gray-700 hover:text-gray-300 transition-colors flex flex-col items-center justify-center min-h-11 text-sm font-medium relative"
          onClick={() => handleDateClick(day, false)}
        >
          {isDecember && day === 1 && (
            <span className="absolute top-0 left-0 text-[10px] text-gray-500 font-normal">
              DEC
            </span>
          )}
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] p-6 h-[calc(100vh-56px)] lg:h-[calc(100vh-113px)] top-[56px] lg:top-[113px] bg-gray-800"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => console.log("Back clicked")}
              className="p-2 rounded-lg bg-transparent hover:bg-gray-700 transition-colors flex items-center justify-center"
            >
              <IoArrowBack className="w-5 h-5 text-white" />
            </button>
            <SheetTitle className="text-lg font-semibold text-white">
              Calendar
            </SheetTitle>
          </div>
        </div>

        {/* Month Navigation */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={getPreviousMonth}
            className="p-2 rounded-lg bg-transparent hover:bg-gray-700 transition-colors flex items-center justify-center"
          >
            <IoChevronBack className="w-5 h-5 text-white" />
          </button>
          <h3 className="text-lg font-semibold text-white">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button
            onClick={getNextMonth}
            className="p-2 rounded-lg bg-transparent hover:bg-gray-700 transition-colors flex items-center justify-center"
          >
            <IoChevronForward className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="w-full">
          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-medium text-gray-400 py-2 px-1"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
