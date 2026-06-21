import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className = "", ...props }: SkeletonProps) {
  return (
    <div
      className={`bg-slate-800/70 animate-pulse rounded-lg ${className}`}
      {...props}
    />
  );
}
