import React from "react";
import { ChevronDown } from "lucide-react";

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  error?: boolean;
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      children,
      className = "",
      error = false,
      size = "md",
      leftIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles consistent with Input
    const baseStyles =
      "w-full bg-slate-950/80 border text-slate-100 rounded-xl transition-all duration-300 ease-out appearance-none focus:outline-none focus:ring-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer pr-10";

    // Size variants
    const sizeStyles = {
      sm: `h-9 ${leftIcon ? "pl-9" : "pl-3"} text-xs rounded-lg`,
      md: `h-11 ${leftIcon ? "pl-10" : "pl-4"} text-sm`,
      lg: `h-13 ${leftIcon ? "pl-12" : "pl-5"} text-base rounded-2xl`,
    };

    // Border states
    const borderStyles = error
      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
      : "border-slate-800 focus:border-primary focus:ring-primary/20 hover:border-slate-700";

    // Adjust Chevron icon size per select size
    const iconSizes = {
      sm: "w-4 h-4 right-3",
      md: "w-5 h-5 right-3.5",
      lg: "w-6 h-6 right-4",
    };

    return (
      <div className="relative w-full flex items-center">
        {leftIcon && (
          <div className="absolute left-3 text-slate-500 flex items-center pointer-events-none">
            {leftIcon}
          </div>
        )}
        <select
          ref={ref}
          disabled={disabled}
          className={`${baseStyles} ${sizeStyles[size]} ${borderStyles} ${className}`}
          {...props}
        >
          {children}
        </select>
        <div className={`absolute ${iconSizes[size]} text-slate-500 pointer-events-none flex items-center`}>
          <ChevronDown className="w-full h-full" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";
