"use client";

import Image from "next/image";

interface LoadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  label?: string;
  showBlurBackdrop?: boolean;
}

export default function Loading({
  size = "md",
  label = "Loading...",
  showBlurBackdrop = true,
}: LoadingProps) {
  // Determine dimensions based on size prop
  const sizes = {
    sm: { container: "w-48 h-48", svg: 120, logo: 50, strokeWidth: 2.5, r1: 50, r2: 40, r3: 30 },
    md: { container: "w-64 h-64", svg: 200, logo: 75, strokeWidth: 3, r1: 85, r2: 70, r3: 55 },
    lg: { container: "w-80 h-80", svg: 250, logo: 95, strokeWidth: 3.5, r1: 110, r2: 90, r3: 70 },
    xl: { container: "w-96 h-96", svg: 300, logo: 120, strokeWidth: 4, r1: 135, r2: 110, r3: 85 },
  };

  const currentSize = sizes[size];
  const center = currentSize.svg / 2;

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        showBlurBackdrop
          ? "bg-gradient-to-br from-slate-950 via-blue-950 to-zinc-950 text-white"
          : ""
      }`}
    >
      <div className={`relative flex items-center justify-center ${currentSize.container}`}>
        {/* Glow behind the loader for premium look */}
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* 3 Rotating Blue Lines using Concentric SVG Circles */}
        <svg
          width={currentSize.svg}
          height={currentSize.svg}
          viewBox={`0 0 ${currentSize.svg} ${currentSize.svg}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          {/* Defs for Glow Filter */}
          <defs>
            <filter id="glow-outer" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-middle" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-inner" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Ring: Slow Clockwise */}
          <circle
            cx={center}
            cy={center}
            r={currentSize.r1}
            stroke="#3b82f6"
            strokeWidth={currentSize.strokeWidth}
            strokeLinecap="round"
            strokeDasharray={`${currentSize.r1 * 1.5} ${currentSize.r1 * 4}`}
            filter="url(#glow-outer)"
            className="animate-orbit-outer"
          />

          {/* Middle Ring: Medium Speed Counter-Clockwise */}
          <circle
            cx={center}
            cy={center}
            r={currentSize.r2}
            stroke="#60a5fa"
            strokeWidth={currentSize.strokeWidth + 0.5}
            strokeLinecap="round"
            strokeDasharray={`${currentSize.r2 * 1.2} ${currentSize.r2 * 3.5}`}
            filter="url(#glow-middle)"
            className="animate-orbit-middle"
          />

          {/* Inner Ring: Fast Clockwise */}
          <circle
            cx={center}
            cy={center}
            r={currentSize.r3}
            stroke="#2563eb"
            strokeWidth={currentSize.strokeWidth + 1}
            strokeLinecap="round"
            strokeDasharray={`${currentSize.r3 * 0.9} ${currentSize.r3 * 3}`}
            filter="url(#glow-inner)"
            className="animate-orbit-inner"
          />
        </svg>

        {/* Central Logo with Pulsing Shadow */}
        <div
          style={{
            width: `${currentSize.logo}px`,
            height: `${currentSize.logo}px`,
          }}
          className="absolute z-10 rounded-full flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-blue-500/30 overflow-hidden p-2 animate-logo-glow"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/asset/logo.png"
              alt="Brand Logo"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
        </div>
      </div>

      {/* Optional Loading label */}
      {label && (
        <p className="mt-4 text-sm font-semibold tracking-widest text-blue-400 uppercase animate-pulse">
          {label}
        </p>
      )}
    </div>
  );
}
