"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenId?: string | string[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenId,
  className = "",
}) => {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    if (defaultOpenId) {
      return Array.isArray(defaultOpenId) ? defaultOpenId : [defaultOpenId];
    }
    return [];
  });

  const handleToggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`border border-slate-800/80 bg-slate-950/20 rounded-xl overflow-hidden backdrop-blur-md divide-y divide-slate-850/80 transition-all duration-300 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="flex flex-col">
            {/* Header Trigger Button */}
            <button
              type="button"
              onClick={() => handleToggle(item.id)}
              className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-900/40 transition-all duration-200 text-left focus:outline-none focus:bg-slate-900/20"
            >
              <span className="flex-1 pr-4">{item.title}</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-blue-450" : ""
                }`}
              />
            </button>

            {/* Accordion panel content using auto-height CSS grid transition */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-1.5 text-xs text-slate-305 leading-relaxed bg-slate-950/10">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
