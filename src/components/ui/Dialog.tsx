"use client";

import React from "react";
import { Modal } from "./Modal";
import { CheckCircle2, AlertTriangle, Info, XCircle } from "lucide-react";

export type DialogVariant = "default" | "info" | "success" | "warning" | "danger";

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: DialogVariant;
  title?: string;
  size?: "sm" | "md" | "lg";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  variant = "default",
  title,
  size = "sm",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  children,
  className = "",
}) => {
  // Border accent styling for dialog theme variants
  const borderStyles = {
    default: "border-slate-800/80",
    info: "border-t-4 border-t-blue-500 border-x-slate-800/80 border-b-slate-800/80",
    success: "border-t-4 border-t-green-500 border-x-slate-800/80 border-b-slate-800/80",
    warning: "border-t-4 border-t-amber-500 border-x-slate-800/80 border-b-slate-800/80",
    danger: "border-t-4 border-t-red-500 border-x-slate-800/80 border-b-slate-800/80",
  };

  const getIcon = () => {
    switch (variant) {
      case "info":
        return <Info className="w-5 h-5 text-blue-450 flex-shrink-0" />;
      case "success":
        return <CheckCircle2 className="w-5 h-5 text-green-450 flex-shrink-0" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-amber-450 flex-shrink-0" />;
      case "danger":
        return <XCircle className="w-5 h-5 text-red-450 flex-shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      showCloseButton={false} // Semantic dialogs hide the X button to force explicit actions (Cancel/Confirm)
      closeOnOverlayClick={closeOnOverlayClick}
      closeOnEscape={closeOnEscape}
      className={`${borderStyles[variant]} ${className}`}
    >
      <div className="flex flex-col gap-3">
        {/* Dialog Header Title with Icon */}
        {title && (
          <div className="flex items-center gap-3 border-b border-slate-850/60 pb-3">
            {getIcon()}
            <h3 className="text-base font-bold text-slate-100">{title}</h3>
          </div>
        )}
        
        {/* Dialog Content Area */}
        <div className="flex flex-col gap-2">{children}</div>
      </div>
    </Modal>
  );
};

// Structural sub-components for dialogue flexibility
export const DialogHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <div className={`flex flex-col gap-1 ${className}`}>{children}</div>;

export const DialogTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <h4 className={`text-base font-bold text-slate-100 ${className}`}>{children}</h4>;

export const DialogDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <p className={`text-xs text-slate-400 leading-normal ${className}`}>{children}</p>;

export const DialogContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => <div className={`text-xs text-slate-300 py-1.5 leading-relaxed ${className}`}>{children}</div>;

export const DialogFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = "",
}) => (
  <div className={`flex flex-wrap items-center justify-end gap-2.5 mt-3 pt-3 border-t border-slate-850/50 ${className}`}>
    {children}
  </div>
);
