"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export type DrawerPlacement = "left" | "right" | "top" | "bottom";
export type DrawerSize = "sm" | "md" | "lg" | "full";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
  size?: DrawerSize;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  placement = "right",
  size = "md",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  title,
  children,
  className = "",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Handle Escape key down
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnEscape, onClose]);

  if (!isOpen || !mounted) return null;

  // Drawer sizes corresponding to placements
  const placementSizeClasses = {
    right: {
      sm: "w-80 max-w-full h-full border-l",
      md: "w-[448px] max-w-full h-full border-l",
      lg: "w-[640px] max-w-full h-full border-l",
      full: "w-screen h-full border-l",
    },
    left: {
      sm: "w-80 max-w-full h-full border-r",
      md: "w-[448px] max-w-full h-full border-r",
      lg: "w-[640px] max-w-full h-full border-r",
      full: "w-screen h-full border-r",
    },
    top: {
      sm: "h-[25vh] w-full border-b",
      md: "h-[40vh] w-full border-b",
      lg: "h-[60vh] w-full border-b",
      full: "h-screen w-full border-b",
    },
    bottom: {
      sm: "h-[300px] w-full border-t rounded-t-3xl",
      md: "h-[450px] w-full border-t rounded-t-3xl",
      lg: "h-[70vh] w-full border-t rounded-t-3xl",
      full: "h-screen w-full border-t",
    },
  };

  const placementAlignmentClasses = {
    right: "right-0 top-0 bottom-0",
    left: "left-0 top-0 bottom-0",
    top: "top-0 left-0 right-0",
    bottom: "bottom-0 left-0 right-0",
  };

  const placementAnimations = {
    right: "animate-slide-in-right",
    left: "animate-slide-in-left",
    top: "animate-slide-in-top",
    bottom: "animate-slide-in-bottom",
  };

  const drawerElement = (
    <div
      className="fixed inset-0 z-50 flex selection:bg-blue-600 selection:text-white"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop with standard transparent overlay fade-in */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />

      {/* Slide-in Drawer Container */}
      <div
        className={`absolute bg-slate-900 border-slate-800/80 shadow-2xl flex flex-col backdrop-blur-xl transition-transform duration-300 overflow-hidden ${
          placementAlignmentClasses[placement]
        } ${placementSizeClasses[placement][size]} ${
          placementAnimations[placement]
        } ${className}`}
      >
        {/* Drawer Header (rendered if title or showCloseButton is true) */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4.5 border-b border-slate-800/60 bg-slate-950/20 flex-shrink-0">
            {title ? (
              <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">{title}</h3>
            ) : (
              <div />
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="w-8.5 h-8.5 rounded-lg bg-slate-900 border border-slate-800/80 hover:bg-slate-850 hover:border-slate-700/80 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Scrollable Drawer Body Content */}
        <div className="flex-1 overflow-y-auto p-6 text-xs text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(drawerElement, document.body);
};
