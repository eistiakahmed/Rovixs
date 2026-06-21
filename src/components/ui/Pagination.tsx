"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className = "",
}) => {
  if (totalPages <= 1) return null;

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const getPageNumbers = () => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPages <= totalPageNumbers) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);
      return [...leftRange, "...", totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);
      return [1, "...", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [1, "...", ...middleRange, "...", totalPages];
    }

    return [];
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      role="navigation"
      aria-label="pagination navigation"
      className={`flex items-center justify-center gap-1.5 selection:bg-blue-600 selection:text-white ${className}`}
    >
      {/* Previous Page Button */}
      <Button
        variant="outline"
        size="sm"
        isIconOnly
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {/* Pages Button List */}
      {pageNumbers.map((page, idx) => {
        if (page === "...") {
          return (
            <span
              key={`dots-${idx}`}
              className="w-9 h-9 flex items-center justify-center text-xs text-slate-500 font-medium"
            >
              ...
            </span>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        return (
          <button
            key={`page-${pageNum}`}
            onClick={() => onPageChange(pageNum)}
            aria-current={isActive ? "page" : undefined}
            className={`w-9 h-9 rounded-lg text-xs font-semibold transition-all duration-300 focus:outline-none flex items-center justify-center cursor-pointer active:scale-95
              ${
                isActive
                  ? "bg-blue-650 text-white shadow-lg shadow-blue-500/20"
                  : "bg-slate-900/40 text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-slate-850/50"
              }`}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next Page Button */}
      <Button
        variant="outline"
        size="sm"
        isIconOnly
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </nav>
  );
};
