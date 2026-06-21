"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  children,
  className = "",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (!isOpen) return;
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Handle Escape key down to close modal
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

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-5xl",
    full: "max-w-[95vw] h-[90vh]",
  };

  const modalElement = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 selection:bg-blue-600 selection:text-white"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop overlay with fade-in animation */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />

      {/* Modal Container Panel with zoom-in animation */}
      <div
        className={`relative w-full bg-slate-900 border border-slate-800/80 rounded-2xl shadow-2xl flex flex-col backdrop-blur-xl animate-zoom-in overflow-hidden transition-all duration-300 ${
          sizeClasses[size]
        } ${size === "full" ? "" : "max-h-[85vh]"} ${className}`}
      >
        {/* Header (rendered if title or showCloseButton is true) */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/60 bg-slate-950/20">
            {title ? (
              <h3 className="text-base font-bold text-slate-100">{title}</h3>
            ) : (
              <div />
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800/80 hover:bg-slate-850 hover:border-slate-700/80 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 text-sm text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
};
