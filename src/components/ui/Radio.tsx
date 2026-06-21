import React from "react";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
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
            type="radio"
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          {/* Custom Radio circular container */}
          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ease-out 
              bg-slate-950/80 
              peer-checked:bg-primary peer-checked:border-primary 
              peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 
              group-hover:border-slate-700 peer-checked:group-hover:border-primary
              ${
                error
                  ? "border-red-500/50 group-hover:border-red-400"
                  : "border-slate-800"
              }`}
          >
            {/* Inner Dot */}
            <div
              className="w-2 h-2 rounded-full bg-white scale-0 transition-transform duration-300 ease-out 
                peer-checked:scale-100"
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

Radio.displayName = "Radio";
