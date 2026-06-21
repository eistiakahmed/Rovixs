import React from "react";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      error = false,
      leftIcon,
      rightIcon,
      size = "md",
      type = "text",
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles with smooth transitions and glow outlines
    const baseStyles =
      "w-full bg-slate-950/80 border text-slate-100 rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 placeholder:text-slate-600 disabled:opacity-50 disabled:pointer-events-none";

    // Size variants
    const sizeStyles = {
      sm: "h-9 px-3 text-xs rounded-lg",
      md: "h-11 px-4 text-sm",
      lg: "h-13 px-5 text-base rounded-2xl",
    };

    // Border states
    const borderStyles = error
      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
      : "border-slate-800 focus:border-primary focus:ring-primary/20 hover:border-slate-700";

    // Icon spacing offsets
    const iconPaddingStyles = {
      sm: {
        left: leftIcon ? "pl-9" : "",
        right: rightIcon ? "pr-9" : "",
      },
      md: {
        left: leftIcon ? "pl-10" : "",
        right: rightIcon ? "pr-10" : "",
      },
      lg: {
        left: leftIcon ? "pl-12" : "",
        right: rightIcon ? "pr-12" : "",
      },
    };

    return (
      <div className="relative w-full flex items-center">
        {leftIcon && (
          <div className="absolute left-3 text-slate-500 flex items-center pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={`${baseStyles} ${sizeStyles[size]} ${borderStyles} ${iconPaddingStyles[size].left} ${iconPaddingStyles[size].right} ${className}`}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 text-slate-500 flex items-center pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
