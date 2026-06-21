"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Check } from "lucide-react";
import { Badge } from "./Badge";

export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  options: MultiSelectOption[];
  selectedValues: string[];
  onSelectedChange: (values: string[]) => void;
  placeholder?: string;
  className?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selectedValues,
  onSelectedChange,
  placeholder = "Select options...",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  // Close selection list on click outside
  useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  }, []);

  const handleToggleSelect = (value: string) => {
    if (selectedValues.includes(value)) {
      onSelectedChange(selectedValues.filter((v) => v !== value));
    } else {
      onSelectedChange([...selectedValues, value]);
    }
  };

  const handleRemoveTag = (e: React.MouseEvent, value: string) => {
    e.stopPropagation(); // Avoid opening the select list
    onSelectedChange(selectedValues.filter((v) => v !== value));
  };

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div ref={containerRef} className={`relative w-full selection:bg-blue-600 selection:text-white ${className}`}>
      {/* Selection Select Trigger Bar Container */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="min-h-11 w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 flex items-center justify-between gap-2 cursor-pointer focus-within:border-blue-500/50"
      >
        <div className="flex flex-wrap gap-1.5 items-center flex-1 max-w-[90%]">
          {selectedValues.length > 0 ? (
            options
              .filter((opt) => selectedValues.includes(opt.value))
              .map((opt) => (
                <Badge
                  key={opt.value}
                  variant="glass"
                  className="pl-2.5 pr-1.5 py-0.5 text-[10px] font-semibold flex items-center gap-1 bg-slate-900 border border-slate-800 text-slate-200"
                >
                  {opt.label}
                  <button
                    type="button"
                    onClick={(e) => handleRemoveTag(e, opt.value)}
                    className="w-3.5 h-3.5 rounded-full hover:bg-slate-850 flex items-center justify-center text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    <X className="w-2.5 h-2.5" />
                  </button>
                </Badge>
              ))
          ) : (
            <span className="text-xs text-slate-600 font-semibold pl-1">{placeholder}</span>
          )}
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-600 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-blue-500" : ""}`} />
      </div>

      {/* Floating Options Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 right-0 z-40 bg-slate-950/95 border border-slate-800 shadow-2xl rounded-xl p-2.5 flex flex-col gap-2 mt-1 backdrop-blur-xl animate-slide-down">
          {/* Internal Search Box */}
          <input
            type="text"
            placeholder="Search filters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-8.5 px-3 bg-slate-900 border border-slate-850 rounded-lg text-xs text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-slate-800"
          />

          {/* Option Grid */}
          <div className="max-h-48 overflow-y-auto flex flex-col gap-0.5 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt) => {
                const isChecked = selectedValues.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleToggleSelect(opt.value)}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between text-slate-450 hover:bg-slate-900 hover:text-slate-100 transition-all duration-150 cursor-pointer"
                  >
                    {opt.label}
                    {isChecked && <Check className="w-3.5 h-3.5 text-blue-400" />}
                  </button>
                );
              })
            ) : (
              <span className="text-[10px] text-slate-600 font-semibold py-4 text-center">No options found</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
