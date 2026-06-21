"use client";

import React, { createContext, useContext, useState } from "react";

export type TabsVariant = "underline" | "pills" | "solid";

interface TabsContextType {
  value: string;
  setValue: (val: string) => void;
  variant: TabsVariant;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export interface TabsProps {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  variant?: TabsVariant;
  className?: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({
  defaultValue,
  value: controlledValue,
  onValueChange,
  variant = "underline",
  className = "",
  children,
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = (val: string) => {
    if (onValueChange) {
      onValueChange(val);
    }
    if (!isControlled) {
      setUncontrolledValue(val);
    }
  };

  return (
    <TabsContext.Provider value={{ value: activeValue, setValue: handleValueChange, variant }}>
      <div className={`flex flex-col gap-4 ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs sub-components must be rendered within a <Tabs> wrapper");
  }
  return context;
};

export interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ className = "", children }) => {
  const { variant } = useTabs();

  const listStyles = {
    underline: "flex items-center gap-6 border-b border-slate-800/80 w-full overflow-x-auto scrollbar-none",
    pills: "flex flex-wrap items-center gap-2 w-full overflow-x-auto scrollbar-none",
    solid: "inline-flex items-center p-1 bg-slate-950/80 border border-slate-800/80 rounded-xl w-fit overflow-x-auto scrollbar-none",
  };

  return (
    <div
      role="tablist"
      className={`${listStyles[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

export interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  value,
  disabled = false,
  className = "",
  children,
}) => {
  const { value: activeValue, setValue, variant } = useTabs();
  const isActive = activeValue === value;

  const triggerStyles = {
    underline: `pb-3 px-1 text-xs font-semibold border-b-2 transition-all duration-300 relative focus:outline-none whitespace-nowrap
      ${
        isActive
          ? "border-blue-500 text-blue-400"
          : "border-transparent text-slate-400 hover:text-slate-200"
      }`,
    pills: `py-2 px-4 rounded-xl text-xs font-semibold transition-all duration-300 focus:outline-none whitespace-nowrap
      ${
        isActive
          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/10"
          : "bg-slate-900/40 text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-slate-850/50"
      }`,
    solid: `py-1.5 px-4 rounded-lg text-xs font-semibold transition-all duration-300 focus:outline-none whitespace-nowrap
      ${
        isActive
          ? "bg-slate-900 text-white shadow-sm border border-slate-800"
          : "text-slate-400 hover:text-slate-250 border border-transparent"
      }`,
  };

  return (
    <button
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => setValue(value)}
      className={`${triggerStyles[variant]} disabled:opacity-40 disabled:pointer-events-none active:scale-[0.98] transition-transform duration-200 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export interface TabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, className = "", children }) => {
  const { value: activeValue } = useTabs();

  if (activeValue !== value) return null;

  return (
    <div
      role="tabpanel"
      className={`animate-fade-in transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
