import React, { useState } from "react";
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  onClose?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      children,
      className = "",
      variant = "info",
      title,
      onClose,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    // Config mapping for icons & styling
    const variantStyles = {
      info: {
        container: "bg-blue-950/20 border-blue-500/30 text-blue-400",
        icon: <Info className="w-5 h-5 flex-shrink-0" />,
      },
      success: {
        container: "bg-green-950/20 border-green-500/30 text-green-400",
        icon: <CheckCircle2 className="w-5 h-5 flex-shrink-0" />,
      },
      warning: {
        container: "bg-amber-950/20 border-amber-500/30 text-amber-400",
        icon: <AlertTriangle className="w-5 h-5 flex-shrink-0" />,
      },
      error: {
        container: "bg-red-950/20 border-red-500/30 text-red-400",
        icon: <XCircle className="w-5 h-5 flex-shrink-0" />,
      },
    };

    const handleClose = () => {
      setIsVisible(false);
      if (onClose) onClose();
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={`flex items-start gap-3.5 border rounded-2xl p-4 transition-all duration-300 ease-out animate-slide-down ${variantStyles[variant].container} ${className}`}
        {...props}
      >
        <div className="mt-0.5">{variantStyles[variant].icon}</div>
        <div className="flex-1 flex flex-col gap-1">
          {title && <span className="font-semibold text-sm leading-tight text-current">{title}</span>}
          {children && <div className="text-xs leading-relaxed opacity-90">{children}</div>}
        </div>
        {onClose && (
          <button
            type="button"
            onClick={handleClose}
            className="text-current hover:opacity-80 transition-opacity p-0.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-current"
            aria-label="Dismiss Alert"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }
);

Alert.displayName = "Alert";
