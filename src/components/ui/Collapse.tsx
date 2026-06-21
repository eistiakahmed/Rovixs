"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface CollapseProps {
  title: React.ReactNode;
  isOpen?: boolean;
  defaultOpen?: boolean;
  onToggle?: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Collapse: React.FC<CollapseProps> = ({
  title,
  isOpen: controlledIsOpen,
  defaultOpen = false,
  onToggle,
  className = "",
  children,
}) => {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    }
    if (!isControlled) {
      setUncontrolledIsOpen(!uncontrolledIsOpen);
    }
  };

  return (
    <div className={`border border-slate-800/80 bg-slate-950/20 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-300 ${className}`}>
      {/* Header trigger bar */}
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900/40 transition-all duration-200 text-left focus:outline-none focus:ring-1 focus:ring-blue-500/50"
      >
        <span className="flex-1 pr-4">{title}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-450" : ""
          }`}
        />
      </button>

      {/* Content wrapper with smooth height transition via CSS Grid row tracking */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-1.5 text-xs text-slate-300 leading-relaxed border-t border-slate-900/60 bg-slate-950/10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
