import React from "react";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "glass" | "animated";
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
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] whitespace-nowrap";

    // Size variants
    const sizeStyles = {
      sm: isIconOnly ? "w-9 h-9 p-0 text-sm rounded-lg" : "h-9 px-4 text-sm rounded-lg",
      md: isIconOnly ? "w-11 h-11 p-0 text-base" : "h-11 px-6 text-base",
      lg: isIconOnly ? "w-[52px] h-[52px] p-0 text-lg rounded-2xl" : "h-13 px-8 text-lg rounded-2xl",
    };

    // Color/Theme variants
    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-blue-600 hover:shadow-[0_8px_22px_rgba(59,130,246,0.35)]",
      secondary:
        "bg-secondary text-white hover:bg-sky-600 hover:shadow-[0_8px_22px_rgba(14,165,233,0.35)]",
      outline:
        "border border-blue-800/80 bg-transparent text-blue-100 hover:bg-blue-950/30 hover:border-blue-500 hover:text-white",
      ghost:
        "bg-transparent text-blue-200 hover:bg-blue-950/20 hover:text-white",
      link:
        "bg-transparent text-primary hover:underline p-0 h-auto rounded-none focus:ring-0 active:scale-100",
      glass:
        "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] focus:ring-white/20",
      animated:
        "bg-gradient-to-r from-primary via-secondary to-blue-800 bg-[length:200%_auto] text-white hover:bg-[right_center] hover:shadow-[0_8px_25px_rgba(14,165,233,0.4)] transition-all duration-500",
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
