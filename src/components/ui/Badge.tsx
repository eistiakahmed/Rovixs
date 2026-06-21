import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "outline" | "glass";
  size?: "sm" | "md";
  dot?: boolean;
  pulse?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "sm",
      dot = false,
      pulse = false,
      ...props
    },
    ref
  ) => {
    // Sizing scales
    const sizeStyles = {
      sm: "h-5 px-2.5 text-[10px] rounded-md font-semibold tracking-wider uppercase",
      md: "h-6 px-3 text-xs rounded-full font-medium",
    };

    // Color/Theme variants
    const variantStyles = {
      primary: "bg-primary/10 border border-primary/20 text-primary-light dark:text-blue-400",
      secondary: "bg-slate-800/40 border border-slate-700/50 text-slate-300",
      success: "bg-green-500/10 border border-green-500/20 text-green-400",
      warning: "bg-amber-500/10 border border-amber-500/20 text-amber-400",
      danger: "bg-red-500/10 border border-red-500/20 text-red-400",
      outline: "border border-slate-800 bg-transparent text-slate-400",
      glass: "bg-white/5 backdrop-blur-sm border border-white/10 text-slate-200",
    };

    // Colored dots for status
    const dotColors = {
      primary: "bg-primary",
      secondary: "bg-slate-400",
      success: "bg-green-500",
      warning: "bg-amber-500",
      danger: "bg-red-500",
      outline: "bg-slate-500",
      glass: "bg-white",
    };

    return (
      <span
        ref={ref}
        className={`inline-flex items-center justify-center gap-1.5 border leading-none select-none transition-all duration-300 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {dot && (
          <span className="relative flex h-1.5 w-1.5">
            {pulse && (
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`} />
            )}
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColors[variant]}`} />
          </span>
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
