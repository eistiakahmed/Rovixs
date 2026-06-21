"use client";

import React, { useState } from "react";
import { ChevronRight, MoreHorizontal, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  maxItems?: number;
  showHomeIcon?: boolean;
  onItemClick?: (item: BreadcrumbItem) => void;
}

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      items,
      separator = <ChevronRight className="w-3.5 h-3.5" />,
      maxItems = 4,
      showHomeIcon = true,
      onItemClick,
      className = "",
      ...props
    },
    ref
  ) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Filter out items and inject standard home icon to first item if requested
    let breadcrumbItems = [...items];
    if (showHomeIcon && breadcrumbItems.length > 0 && !breadcrumbItems[0].icon) {
      breadcrumbItems[0] = {
        ...breadcrumbItems[0],
        icon: <Home className="w-3.5 h-3.5" />,
      };
    }

    const totalItems = breadcrumbItems.length;

    const renderItems = () => {
      // If we don't need to truncate, or user expanded it
      if (totalItems <= maxItems || isExpanded) {
        return breadcrumbItems.map((item, idx) => renderItemLink(item, idx === totalItems - 1, idx));
      }

      // Truncate logic: Keep first and last (maxItems - 1) items
      const visibleStart = breadcrumbItems.slice(0, 1);
      const visibleEnd = breadcrumbItems.slice(totalItems - (maxItems - 1));

      return (
        <>
          {visibleStart.map((item, idx) => renderItemLink(item, false, idx))}
          
          {/* Truncated block indicator */}
          <li className="flex items-center gap-2 text-slate-500">
            <button
              onClick={() => setIsExpanded(true)}
              className="w-7 h-7 rounded-lg hover:bg-slate-900 border border-slate-900/60 hover:border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
              aria-label="Expand path"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
            <span className="opacity-60">{separator}</span>
          </li>

          {visibleEnd.map((item, idx) => 
            renderItemLink(item, idx === visibleEnd.length - 1, totalItems - (maxItems - 1) + idx)
          )}
        </>
      );
    };

    const renderItemLink = (item: BreadcrumbItem, isLast: boolean, index: number) => {
      const isLink = item.href && !isLast;

      return (
        <li key={index} className="flex items-center gap-2 group/crumb">
          {isLink ? (
            <a
              href={item.href}
              onClick={(e) => {
                if (onItemClick) {
                  e.preventDefault();
                  onItemClick(item);
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium hover:text-white group-hover/crumb:translate-x-px transition-all duration-250"
            >
              {item.icon && <span className="text-slate-500 group-hover/crumb:text-blue-450 transition-colors">{item.icon}</span>}
              <span>{item.label}</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-200 font-bold select-none">
              {item.icon && <span className="text-slate-450">{item.icon}</span>}
              <span>{item.label}</span>
            </span>
          )}

          {!isLast && <span className="text-slate-500/80 font-normal leading-none shrink-0">{separator}</span>}
        </li>
      );
    };

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={`flex items-center selection:bg-blue-600 selection:text-white ${className}`}
        {...props}
      >
        <ol className="flex flex-wrap items-center gap-2 list-none m-0 p-0">
          {renderItems()}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";
