"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";

export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastItem {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
}

interface ToastContextType {
  toast: (message: string, options?: { type?: ToastType; title?: string; duration?: number }) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    (message: string, options?: { type?: ToastType; title?: string; duration?: number }) => {
      const id = Math.random().toString(36).substring(2, 9);
      const type = options?.type || "info";
      const title = options?.title;
      const duration = options?.duration || 3000;

      const newToast: ToastItem = { id, type, title, message, duration };
      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      {/* Toast container absolute layout at bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
        {toasts.map((item) => (
          <ToastCard key={item.id} item={item} onClose={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// Individual Toast Card component
const ToastCard: React.FC<{ item: ToastItem; onClose: (id: string) => void }> = ({ item, onClose }) => {
  const { id, type, title, message } = item;

  // Icon & color configurations
  const toastConfigs = {
    success: {
      border: "border-l-4 border-l-green-500",
      icon: <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />,
    },
    error: {
      border: "border-l-4 border-l-red-500",
      icon: <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />,
    },
    warning: {
      border: "border-l-4 border-l-amber-500",
      icon: <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />,
    },
    info: {
      border: "border-l-4 border-l-blue-500",
      icon: <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />,
    },
  };

  return (
    <div
      className={`pointer-events-auto w-full bg-slate-950/95 border border-slate-800/80 backdrop-blur-md shadow-2xl rounded-xl p-4 flex gap-3.5 items-start transition-all duration-300 animate-slide-down ${toastConfigs[type].border}`}
    >
      <div className="mt-0.5">{toastConfigs[type].icon}</div>
      <div className="flex-1 flex flex-col gap-0.5">
        {title && <span className="font-semibold text-sm text-slate-100">{title}</span>}
        <p className="text-xs text-slate-400 leading-normal">{message}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className="text-slate-500 hover:text-slate-300 transition-colors p-0.5"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
