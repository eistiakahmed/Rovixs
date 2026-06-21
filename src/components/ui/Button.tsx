import React from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isIconOnly?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      isIconOnly = false,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles with micro-animations and smooth transitions
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    // Size variants
    const sizeStyles = {
      sm: isIconOnly ? "w-9 h-9 p-0 text-sm rounded-lg" : "h-9 px-4 text-sm rounded-lg",
      md: isIconOnly ? "w-11 h-11 p-0 text-base" : "h-11 px-6 text-base",
      lg: isIconOnly ? "w-[52px] h-[52px] p-0 text-lg rounded-2xl" : "h-13 px-8 text-lg rounded-2xl",
    };

    // Color/Theme variants
    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-blue-700 hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] dark:hover:shadow-[0_8px_20px_rgba(37,99,235,0.4)]",
      secondary:
        "bg-secondary text-white hover:bg-slate-800 hover:shadow-[0_8px_20px_rgba(15,23,42,0.2)] dark:bg-slate-900 dark:hover:bg-slate-800 dark:border dark:border-slate-800",
      outline:
        "border border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-900",
      ghost:
        "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900",
      link:
        "bg-transparent text-primary hover:underline p-0 h-auto rounded-none focus:ring-0 active:scale-100 dark:text-blue-400",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="animate-spin h-4 w-4" />
            {!isIconOnly && <span>Loading...</span>}
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            {leftIcon && <span className="inline-flex items-center">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex items-center">{rightIcon}</span>}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
