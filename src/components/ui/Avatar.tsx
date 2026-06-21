import React, { useState } from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  status?: "online" | "offline" | "busy" | "away";
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = "",
      name = "",
      size = "md",
      status,
      className = "",
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);

    // Get fallback initials from name (e.g., "Eistiak Meraj" -> "EM")
    const getInitials = (fullName: string) => {
      const parts = fullName.trim().split(/\s+/);
      if (parts.length === 0 || !parts[0]) return "??";
      if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    };

    // Size mappings for container
    const sizeClasses = {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-14 h-14 text-lg font-semibold",
      xl: "w-18 h-18 text-2xl font-bold",
    };

    // Sizing for indicator status dot
    const dotSizes = {
      sm: "w-2.5 h-2.5 border-[1.5px]",
      md: "w-3 h-3 border-[2px]",
      lg: "w-4 h-4 border-[2.5px]",
      xl: "w-5 h-5 border-[3px]",
    };

    // Color definitions for status
    const statusColors = {
      online: "bg-green-500",
      offline: "bg-slate-500",
      busy: "bg-red-500",
      away: "bg-amber-500",
    };

    const showFallback = !src || hasError;

    // Premium gradients based on first letter of name to vary avatar styles
    const getGradientColor = (fullName: string) => {
      const code = fullName.charCodeAt(0) || 0;
      const index = code % 4;
      const gradients = [
        "from-blue-600 to-indigo-600 shadow-blue-500/10",
        "from-indigo-600 to-purple-600 shadow-indigo-500/10",
        "from-purple-600 to-pink-600 shadow-purple-500/10",
        "from-blue-600 to-cyan-600 shadow-cyan-500/10",
      ];
      return gradients[index];
    };

    return (
      <div
        ref={ref}
        className={`relative inline-flex items-center justify-center rounded-full flex-shrink-0 select-none ${className}`}
        {...props}
      >
        <div
          className={`w-full h-full rounded-full overflow-hidden flex items-center justify-center border border-slate-800/40 shadow-lg ${
            showFallback
              ? `bg-gradient-to-tr text-white font-medium ${getGradientColor(
                  name || "?"
                )}`
              : "bg-slate-900"
          } ${sizeClasses[size]}`}
        >
          {showFallback ? (
            <span>{getInitials(name)}</span>
          ) : (
            <img
              src={src}
              alt={alt || name}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {status && (
          <span
            className={`absolute bottom-0 right-0 rounded-full border-slate-950 flex-shrink-0 ${
              statusColors[status]
            } ${dotSizes[size]}`}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = "Avatar";
