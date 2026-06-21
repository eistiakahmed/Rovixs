import React from "react";

export interface ProgressBarProps {
  value: number; // 0 to 100
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "success" | "warning" | "danger";
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  showValue = false,
  size = "md",
  variant = "primary",
  className = "",
}) => {
  const cappedValue = Math.min(Math.max(value, 0), 100);

  const heightStyles = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const variantStyles = {
    primary: "bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]",
    success: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]",
    warning: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]",
    danger: "bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]",
  };

  return (
    <div className={`w-full flex flex-col gap-1.5 selection:bg-blue-600 selection:text-white ${className}`}>
      {showValue && (
        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-500">
          <span>Progress</span>
          <span className="text-slate-200 font-mono">{Math.round(cappedValue)}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/40 ${heightStyles[size]}`}>
        <div
          style={{ width: `${cappedValue}%` }}
          className={`h-full rounded-full transition-all duration-500 ease-out ${variantStyles[variant]}`}
          role="progressbar"
          aria-valuenow={cappedValue}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};
