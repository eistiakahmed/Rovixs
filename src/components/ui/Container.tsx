import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "main" | "header" | "footer" | "article" | "aside";
  size?: "sm" | "md" | "lg" | "xl" | "full";
  clean?: boolean;
}

export const Container = React.forwardRef<HTMLElement, ContainerProps>(
  (
    {
      children,
      className = "",
      as: Component = "div",
      size = "lg",
      clean = false,
      ...props
    },
    ref
  ) => {
    // Sizing mapping (consistent with Tailwind widths)
    const sizeStyles = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[1440px]",
      full: "max-w-full",
    };

    // Padding overlays
    const paddingStyles = clean ? "" : "px-4 sm:px-6 lg:px-8";

    return (
      <Component
        ref={ref as any}
        className={`w-full mx-auto ${sizeStyles[size]} ${paddingStyles} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
