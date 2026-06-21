import React from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-8 md:p-12 border-2 border-dashed border-slate-800/80 rounded-2xl bg-slate-950/10 backdrop-blur-md transition-all duration-300 ${className}`}>
      {/* Icon element with subtle glowing anim rings */}
      {icon && (
        <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800/80 flex items-center justify-center text-slate-400 shadow-xl shadow-slate-950/20 relative after:absolute after:inset-0 after:rounded-full after:bg-blue-500/5 after:animate-pulse">
          {icon}
        </div>
      )}
      
      {/* Header title text */}
      <h3 className="text-sm font-bold text-slate-200 mt-4">{title}</h3>
      
      {/* Auxiliary explanation description */}
      {description && (
        <p className="text-xs text-slate-550 mt-1.5 max-w-xs leading-normal">
          {description}
        </p>
      )}

      {/* CTA action wrapper */}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};
