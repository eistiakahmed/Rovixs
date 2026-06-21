"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "./Button";

export interface CalendarProps {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  onDateChange,
  className = "",
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(() => selectedDate || new Date());

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Helper date math ranges
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevTotalDays = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDaySelect = (dayNum: number) => {
    const selected = new Date(year, month, dayNum);
    onDateChange(selected);
  };

  // Generate calendar days grid array
  const calendarGridCells: { type: "prev" | "current" | "next"; day: number }[] = [];

  // 1. Pad previous month items
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    calendarGridCells.push({
      type: "prev",
      day: prevTotalDays - i,
    });
  }

  // 2. Pad active month items
  for (let i = 1; i <= totalDays; i++) {
    calendarGridCells.push({
      type: "current",
      day: i,
    });
  }

  // 3. Pad next month items to fill a 6-row grid (42 cells)
  const remainingCells = 42 - calendarGridCells.length;
  for (let i = 1; i <= remainingCells; i++) {
    calendarGridCells.push({
      type: "next",
      day: i,
    });
  }

  const isToday = (dayNum: number) => {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === dayNum;
  };

  const isSelected = (dayNum: number) => {
    if (!selectedDate) return false;
    return selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === dayNum;
  };

  return (
    <div className={`w-72 bg-slate-950/90 border border-slate-800/80 rounded-xl p-4 flex flex-col gap-3 backdrop-blur-md selection:bg-blue-600 selection:text-white ${className}`}>
      {/* Month shift header bar */}
      <div className="flex justify-between items-center flex-shrink-0">
        <span className="text-xs font-bold text-slate-200">
          {monthNames[month]} {year}
        </span>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" isIconOnly className="h-7 w-7" onClick={handlePrevMonth}>
            <ChevronLeft className="w-3.5 h-3.5" />
          </Button>
          <Button variant="ghost" size="sm" isIconOnly className="h-7 w-7" onClick={handleNextMonth}>
            <ChevronRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>

      {/* Weekday Labels Grid */}
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {daysOfWeek.map((day) => (
          <span key={day} className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            {day}
          </span>
        ))}
      </div>

      {/* Day Cells Grid */}
      <div className="grid grid-cols-7 gap-1 text-center">
        {calendarGridCells.map((cell, idx) => {
          const isCurrent = cell.type === "current";
          const todayMarker = isCurrent && isToday(cell.day);
          const activeMarker = isCurrent && isSelected(cell.day);

          return (
            <button
              key={`${cell.type}-${cell.day}-${idx}`}
              type="button"
              disabled={!isCurrent}
              onClick={() => handleDaySelect(cell.day)}
              className={`h-8 w-8 text-xs font-semibold rounded-lg flex items-center justify-center transition-all duration-200 focus:outline-none cursor-pointer
                ${
                  !isCurrent
                    ? "text-slate-700 pointer-events-none"
                    : activeMarker
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/10"
                    : todayMarker
                    ? "border border-blue-500/50 text-blue-400 font-bold"
                    : "text-slate-350 hover:bg-slate-900 hover:text-white"
                }`}
            >
              {cell.day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export interface DatePickerProps {
  selectedDate: Date | null;
  onDateChange: (date: Date) => void;
  placeholder?: string;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateChange,
  placeholder = "Select date...",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close calendar popup on click outside
  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const handleSelectDate = (date: Date) => {
    onDateChange(date);
    setIsOpen(false); // Auto close dropdown calendar card
  };

  return (
    <div ref={containerRef} className={`relative inline-block w-full selection:bg-blue-600 selection:text-white ${className}`}>
      {/* Date Picker Input Trigger Box */}
      <div className="relative">
        <input
          type="text"
          readOnly
          placeholder={placeholder}
          onClick={() => setIsOpen(!isOpen)}
          value={formatDate(selectedDate)}
          className="w-full h-11 pl-4 pr-10 bg-slate-950 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 cursor-pointer"
        />
        <CalendarIcon className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
      </div>

      {/* Floating Dropdown Calendar Card Overlay */}
      {isOpen && (
        <div className="absolute top-12 left-0 z-40 mt-1 shadow-2xl animate-slide-down">
          <Calendar selectedDate={selectedDate} onDateChange={handleSelectDate} />
        </div>
      )}
    </div>
  );
};
