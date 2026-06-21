import React from "react";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: boolean;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className = "", label, error = false, disabled, ...props }, ref) => {
    return (
      <label
        className={`flex items-center gap-3 cursor-pointer group select-none ${
          disabled ? "opacity-50 pointer-events-none" : ""
        } ${className}`}
      >
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          {/* Custom Switch Track */}
          <div
            className={`w-10 h-6 rounded-full flex items-center p-1 transition-all duration-300 ease-out 
              bg-slate-800 
              peer-checked:bg-primary 
              peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 
              ${
                error
                  ? "border border-red-500/50 group-hover:border-red-400"
                  : "border border-transparent"
              }`}
          >
            {/* Custom Switch Thumb */}
            <div
              className="w-4 h-4 rounded-full bg-white transition-transform duration-300 ease-out 
                translate-x-0 peer-checked:translate-x-4"
            />
          </div>
        </div>
        {label && (
          <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors leading-tight">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";
