import React from "react";

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  error?: boolean;
  size?: "sm" | "md" | "lg";
  resizeable?: "none" | "both" | "vertical" | "horizontal";
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className = "",
      error = false,
      size = "md",
      resizeable = "vertical",
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles consistent with Input
    const baseStyles =
      "w-full bg-slate-950/80 border text-slate-100 rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 placeholder:text-slate-600 disabled:opacity-50 disabled:pointer-events-none py-3";

    // Size variants
    const sizeStyles = {
      sm: "min-h-[80px] px-3 text-xs rounded-lg",
      md: "min-h-[120px] px-4 text-sm",
      lg: "min-h-[160px] px-5 text-base rounded-2xl",
    };

    // Resize controls
    const resizeStyles = {
      none: "resize-none",
      both: "resize",
      vertical: "resize-y",
      horizontal: "resize-x",
    };

    // Border states
    const borderStyles = error
      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
      : "border-slate-800 focus:border-primary focus:ring-primary/20 hover:border-slate-700";

    return (
      <textarea
        ref={ref}
        disabled={disabled}
        className={`${baseStyles} ${sizeStyles[size]} ${resizeStyles[resizeable]} ${borderStyles} ${className}`}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
