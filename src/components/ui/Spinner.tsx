import React from "react";

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "white";
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className = "", size = "md", variant = "primary", ...props }, ref) => {
    // Sizing mapping
    const sizeClasses = {
      sm: "w-4 h-4 stroke-[3px]",
      md: "w-6 h-6 stroke-[3px]",
      lg: "w-8 h-8 stroke-[2.5px]",
      xl: "w-12 h-12 stroke-[2px]",
    };

    // Color/Theme variants
    const variantClasses = {
      primary: "text-primary",
      secondary: "text-slate-400 dark:text-slate-500",
      white: "text-white",
    };

    return (
      <div
        ref={ref}
        role="status"
        className={`inline-flex items-center justify-center ${className}`}
        {...props}
      >
        <svg
          className={`animate-spin ${sizeClasses[size]} ${variantClasses[variant]}`}
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
);

Spinner.displayName = "Spinner";
