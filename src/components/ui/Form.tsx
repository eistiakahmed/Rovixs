import React from "react";

// FormGroup: Wraps input field layout
export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {}
export const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col gap-2 w-full ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
FormGroup.displayName = "FormGroup";

// FormLabel: Standard field label
export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`text-sm font-semibold text-slate-200 tracking-wide select-none ${className}`}
        {...props}
      >
        {children}
      </label>
    );
  }
);
FormLabel.displayName = "FormLabel";

// FormDescription: Field description/guidelines
export interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={`text-xs text-slate-500 leading-normal ${className}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);
FormDescription.displayName = "FormDescription";

// FormError: Validation errors
export interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const FormError = React.forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ children, className = "", ...props }, ref) => {
    if (!children) return null;
    return (
      <p
        ref={ref}
        className={`text-xs font-medium text-red-400 animate-slide-down ${className}`}
        {...props}
      >
        {children}
      </p>
    );
  }
);
FormError.displayName = "FormError";
