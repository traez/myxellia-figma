"use client";
import { Sheet, SheetTitle, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

interface CalendarModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function Calendar({ open, onOpenChange }: CalendarModalProps) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [currentDate, setCurrentDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  ); // Current month

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

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

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

  const isToday = (day: number) => {
    return (
      today.getDate() === day &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
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
          className="p-2 rounded-none border border-[color-mix(in_srgb,var(--white)_20%,transparent)] text-[var(--medium-gray)] hover:bg-[var(--dark-gray)] hover:text-[var(--light-gray)] transition-colors flex flex-col items-center justify-center h-16 w-full text-sm font-medium relative"
          onClick={() => handleDateClick(day, false)}
        >
          {day}
        </button>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isSelectedDate(day);
      const todayClass = isToday(day)
        ? "bg-[var(--deep-blue)] text-[var(--white)]"
        : "";
      days.push(
        <button
          key={day}
          className={`p-2 rounded-none border border-[color-mix(in_srgb,var(--white)_20%,transparent)] transition-colors flex flex-col items-center justify-center h-16 w-full text-sm font-medium relative ${
            isSelected
              ? "bg-[var(--deep-blue)] text-[var(--white)] hover:bg-[var(--purple)]"
              : "text-[var(--white)] hover:bg-[var(--dark-gray)]"
          } ${todayClass}`}
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
      const nextMonth = currentDate.getMonth() + 1;
      days.push(
        <button
          key={`next-${day}`}
          className="p-2 rounded-none border border-[color-mix(in_srgb,var(--white)_20%,transparent)] text-[var(--medium-gray)] hover:bg-[var(--dark-gray)] hover:text-[var(--light-gray)] transition-colors flex flex-col items-center justify-center h-16 w-full text-sm font-medium relative"
          onClick={() => handleDateClick(day, false)}
        >
          {day === 1 && (
            <span className="absolute top-0 left-0 text-[10px] text-[var(--medium-gray)] font-normal">
              {monthNames[nextMonth > 11 ? 0 : nextMonth]
                .substring(0, 3)
                .toUpperCase()}
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
        className="w-[300px] sm:w-[400px] h-[calc(100vh-56px)] lg:h-[calc(100vh-113px)] top-[56px] lg:top-[113px] bg-[var(--black)] [&>button]:text-[var(--white)]"
      >
        {/* Header */}
        <nav className="flex justify-between items-center mb-4 py-2">
          <div className="flex items-center gap-3">
            <button
              onClick={() => console.log("Back clicked")}
              className="p-2 rounded-lg bg-transparent hover:bg-[var(--dark-gray)] transition-colors flex items-center justify-center"
            >
              <IoArrowBack className="w-5 h-5 text-[var(--white)]" />
            </button>
            <SheetTitle className="text-lg font-semibold text-[var(--white)]">
              Calendar
            </SheetTitle>
          </div>
        </nav>
        <article className="px-4 lg:px-6">
          {/* Month Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={getPreviousMonth}
              className="p-2 rounded-lg bg-transparent hover:bg-[var(--dark-gray)] transition-colors flex items-center justify-center"
            >
              <TiChevronLeftOutline className="w-5 h-5 text-[var(--white)]" />
            </button>
            <h3 className="text-lg font-semibold text-[var(--white)]">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button
              onClick={getNextMonth}
              className="p-2 rounded-lg bg-transparent hover:bg-[var(--dark-gray)] transition-colors flex items-center justify-center"
            >
              <TiChevronRightOutline className="w-5 h-5 text-[var(--white)]" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="w-full">
            {/* Day Headers */}
            <div className="grid grid-cols-7 mb-1">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-medium text-[var(--medium-gray)] py-2 px-1 border-b border-[color-mix(in_srgb,var(--white)_20%,transparent)]"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7">{renderCalendarDays()}</div>
          </div>
        </article>
      </SheetContent>
    </Sheet>
  );
}
