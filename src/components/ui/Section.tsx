import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "main" | "article" | "header" | "footer";
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      className = "",
      as: Component = "section",
      spacing = "md",
      ...props
    },
    ref
  ) => {
    // Spacing size mapping (vertical padding sizes)
    const spacingStyles = {
      none: "py-0",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      xl: "py-24 md:py-32",
    };

    return (
      <Component
        ref={ref as any}
        className={`w-full relative ${spacingStyles[spacing]} ${className}`}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Section.displayName = "Section";
