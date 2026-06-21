import React from "react";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "gradient";
  label?: string;
}

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      className = "",
      orientation = "horizontal",
      variant = "solid",
      label,
      children,
      ...props
    },
    ref
  ) => {
    const isHorizontal = orientation === "horizontal";
    
    // Core line styling based on variant and orientation
    const lineStyles = {
      horizontal: {
        solid: "h-[1px] w-full bg-slate-800/80",
        dashed: "h-[1px] w-full border-t border-dashed border-slate-800/80 bg-transparent",
        gradient: "h-[1px] w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent",
      },
      vertical: {
        solid: "w-[1px] min-h-[1em] h-full self-stretch bg-slate-800/80",
        dashed: "w-[1px] min-h-[1em] h-full self-stretch border-l border-dashed border-slate-800/80 bg-transparent",
        gradient: "w-[1px] min-h-[1em] h-full self-stretch bg-gradient-to-b from-transparent via-slate-800 to-transparent",
      },
    };

    const currentLineStyle = lineStyles[orientation][variant];

    // If there is a label, render decorative split lines
    if (label) {
      if (isHorizontal) {
        return (
          <div
            ref={ref}
            className={`flex items-center w-full gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider select-none ${className}`}
            {...props}
          >
            <div className={currentLineStyle} />
            <span className="flex-shrink-0 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800/60">{label}</span>
            <div className={currentLineStyle} />
          </div>
        );
      } else {
        return (
          <div
            ref={ref}
            className={`flex flex-col items-center h-full gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider select-none py-2 ${className}`}
            {...props}
          >
            <div className={currentLineStyle} />
            <span className="flex-shrink-0 bg-slate-900 py-1 px-1.5 rounded-md border border-slate-800/60 writing-mode-vertical">{label}</span>
            <div className={currentLineStyle} />
          </div>
        );
      }
    }

    return (
      <div
        ref={ref}
        className={`${currentLineStyle} ${className}`}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";
