"use client";
import { useState } from "react";
import {
  IoChevronBack,
  IoChevronForward,
  IoClose,
  IoArrowBack,
} from "react-icons/io5";
import styles from "./styles.module.css";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(2023, 10, 16)
  );
  const [showCalendar, setShowCalendar] = useState(true);
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
          className={`${styles.dayButton} ${styles.otherMonth}`}
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
          className={`${styles.dayButton} ${isSelected ? styles.selected : ""}`}
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
          className={`${styles.dayButton} ${styles.otherMonth}`}
          onClick={() => handleDateClick(day, false)}
        >
          {isDecember && day === 1 && (
            <span className={styles.monthLabel}>DEC</span>
          )}
          {day}
        </button>
      );
    }

    return days;
  };

  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px",
  };

  const closedContainerStyle = {
    textAlign: "center" as const,
  };

  const buttonStyle = {
    padding: "8px 16px",
    backgroundColor: "#3b82f6",
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    marginTop: "16px",
  };

  return (
    <main style={containerStyle}>
      {showCalendar ? (
        <div className={styles.calendar}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <button
                onClick={() => console.log("Back clicked")}
                className={styles.backButton}
              >
                <IoArrowBack className={styles.icon} />
              </button>
              <h2 className={styles.title}>Calendar</h2>
            </div>
            <button
              onClick={() => setShowCalendar(false)}
              className={styles.closeButton}
            >
              <IoClose className={styles.icon} />
            </button>
          </div>

          {/* Month Navigation */}
          <div className={styles.monthNav}>
            <button onClick={getPreviousMonth} className={styles.navButton}>
              <IoChevronBack className={styles.icon} />
            </button>
            <h3 className={styles.monthYear}>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button onClick={getNextMonth} className={styles.navButton}>
              <IoChevronForward className={styles.icon} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className={styles.calendarContent}>
            {/* Day Headers */}
            <div className={styles.dayHeaders}>
              {dayNames.map((day) => (
                <div key={day} className={styles.dayHeader}>
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className={styles.calendarGrid}>{renderCalendarDays()}</div>
          </div>
        </div>
      ) : (
        <div style={closedContainerStyle}>
          <p>Calendar closed</p>
          <button
            onClick={() => setShowCalendar(true)}
            style={buttonStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563eb")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#3b82f6")
            }
          >
            Open Calendar
          </button>
        </div>
      )}
    </main>
  );
}
