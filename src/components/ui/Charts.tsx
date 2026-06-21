"use client";

import React, { useState } from "react";

// Chart Interface Models
export interface ChartDataItem {
  label: string;
  value: number;
  color?: string; // Optional segment color overrides
}

export interface ChartProps {
  data: ChartDataItem[];
  height?: number;
  className?: string;
}

// 1. Line Chart Component
export const LineChart: React.FC<ChartProps> = ({ data, height = 200, className = "" }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const w = 500;
  const h = height;
  const padding = { top: 25, right: 25, bottom: 35, left: 45 };

  const values = data.map((d) => d.value);
  const maxValue = Math.max(...values, 1);
  const minValue = 0; // Baseline at 0

  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  // Calculate SVG layout coordinates
  const points = data.map((item, idx) => {
    const x = padding.left + (idx / (data.length - 1)) * chartW;
    const y = padding.top + chartH - ((item.value - minValue) / (maxValue - minValue)) * chartH;
    return { x, y, label: item.label, value: item.value };
  });

  // Generate SVG path string
  const pathD = points.reduce(
    (acc, pt, idx) => (idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`),
    ""
  );

  return (
    <div className={`relative selection:bg-blue-600 selection:text-white ${className}`}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto overflow-visible">
        {/* Horizontal grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
          const gridY = padding.top + chartH * ratio;
          const gridVal = Math.round(maxValue - ratio * maxValue);
          return (
            <g key={index} className="opacity-30">
              <line x1={padding.left} y1={gridY} x2={w - padding.right} y2={gridY} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              <text x={padding.left - 10} y={gridY + 4} textAnchor="end" className="fill-slate-500 font-mono text-[9px] font-semibold">{gridVal}</text>
            </g>
          );
        })}

        {/* X axis labels */}
        {points.map((pt, idx) => (
          <text key={idx} x={pt.x} y={h - 10} textAnchor="middle" className="fill-slate-500 font-mono text-[9px] font-semibold opacity-70">
            {pt.label}
          </text>
        ))}

        {/* Core Line Path */}
        <path d={pathD} fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(37,99,235,0.35)]" />

        {/* Interactive Mouse Hover Guideline */}
        {hoverIndex !== null && (
          <line x1={points[hoverIndex].x} y1={padding.top} x2={points[hoverIndex].x} y2={padding.top + chartH} stroke="#334155" strokeWidth="1.5" strokeDasharray="2 2" />
        )}

        {/* Hover Coordinate Trigger Circles */}
        {points.map((pt, idx) => (
          <g key={idx}>
            {/* Invisibly large mouse trigger target */}
            <circle cx={pt.x} cx-y={pt.y} cy={pt.y} r="15" fill="transparent" className="cursor-crosshair pointer-events-auto" onMouseEnter={() => setHoverIndex(idx)} onMouseLeave={() => setHoverIndex(null)} />
            
            {/* Visible circle target */}
            <circle
              cx={pt.x}
              cy={pt.y}
              r={hoverIndex === idx ? "6" : "4.5"}
              fill={hoverIndex === idx ? "#3b82f6" : "#0f172a"}
              stroke="#2563eb"
              strokeWidth={hoverIndex === idx ? "2.5" : "2"}
              className="transition-all duration-150 pointer-events-none"
            />
          </g>
        ))}
      </svg>

      {/* Floating coordinates Tooltip */}
      {hoverIndex !== null && (
        <div
          style={{
            left: `${(points[hoverIndex].x / w) * 100}%`,
            top: `${(points[hoverIndex].y / h) * 100 - 25}%`,
          }}
          className="absolute transform -translate-x-1/2 -translate-y-full bg-slate-950 border border-slate-800 text-[10px] text-slate-200 font-bold px-2 py-1 rounded shadow-xl pointer-events-none whitespace-nowrap z-10 animate-slide-down flex flex-col gap-0.5"
        >
          <span className="text-[8px] text-slate-500 uppercase tracking-widest">{points[hoverIndex].label}</span>
          <span>{points[hoverIndex].value.toLocaleString()} units</span>
        </div>
      )}
    </div>
  );
};

// 2. Area Chart Component
export const AreaChart: React.FC<ChartProps> = ({ data, height = 200, className = "" }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const w = 500;
  const h = height;
  const padding = { top: 25, right: 25, bottom: 35, left: 45 };

  const values = data.map((d) => d.value);
  const maxValue = Math.max(...values, 1);
  const minValue = 0;

  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  const points = data.map((item, idx) => {
    const x = padding.left + (idx / (data.length - 1)) * chartW;
    const y = padding.top + chartH - ((item.value - minValue) / (maxValue - minValue)) * chartH;
    return { x, y, label: item.label, value: item.value };
  });

  const pathD = points.reduce(
    (acc, pt, idx) => (idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`),
    ""
  );

  // Close area path under spline line
  const areaD = `${pathD} L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;

  return (
    <div className={`relative selection:bg-blue-600 selection:text-white ${className}`}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
          const gridY = padding.top + chartH * ratio;
          const gridVal = Math.round(maxValue - ratio * maxValue);
          return (
            <g key={index} className="opacity-30">
              <line x1={padding.left} y1={gridY} x2={w - padding.right} y2={gridY} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              <text x={padding.left - 10} y={gridY + 4} textAnchor="end" className="fill-slate-500 font-mono text-[9px] font-semibold">{gridVal}</text>
            </g>
          );
        })}

        {/* X axis labels */}
        {points.map((pt, idx) => (
          <text key={idx} x={pt.x} y={h - 10} textAnchor="middle" className="fill-slate-500 font-mono text-[9px] font-semibold opacity-70">
            {pt.label}
          </text>
        ))}

        {/* Area fill */}
        <path d={areaD} fill="url(#areaGrad)" />

        {/* Spline line */}
        <path d={pathD} fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        {/* Guideline */}
        {hoverIndex !== null && (
          <line x1={points[hoverIndex].x} y1={padding.top} x2={points[hoverIndex].x} y2={padding.top + chartH} stroke="#334155" strokeWidth="1.5" strokeDasharray="2 2" />
        )}

        {/* Hover markers */}
        {points.map((pt, idx) => (
          <g key={idx}>
            <circle cx={pt.x} cy={pt.y} r="15" fill="transparent" className="cursor-crosshair pointer-events-auto" onMouseEnter={() => setHoverIndex(idx)} onMouseLeave={() => setHoverIndex(null)} />
            <circle
              cx={pt.x}
              cy={pt.y}
              r={hoverIndex === idx ? "5.5" : "4"}
              fill={hoverIndex === idx ? "#3b82f6" : "#0f172a"}
              stroke="#2563eb"
              strokeWidth={hoverIndex === idx ? "2.5" : "2"}
              className="transition-all duration-150 pointer-events-none"
            />
          </g>
        ))}
      </svg>

      {/* Area Tooltip */}
      {hoverIndex !== null && (
        <div
          style={{
            left: `${(points[hoverIndex].x / w) * 100}%`,
            top: `${(points[hoverIndex].y / h) * 100 - 25}%`,
          }}
          className="absolute transform -translate-x-1/2 -translate-y-full bg-slate-950 border border-slate-800 text-[10px] text-slate-200 font-bold px-2 py-1 rounded shadow-xl pointer-events-none whitespace-nowrap z-10 animate-slide-down flex flex-col gap-0.5"
        >
          <span className="text-[8px] text-slate-500 uppercase tracking-widest">{points[hoverIndex].label}</span>
          <span>${points[hoverIndex].value.toLocaleString()}</span>
        </div>
      )}
    </div>
  );
};

// 3. Bar Chart Component
export const BarChart: React.FC<ChartProps> = ({ data, height = 200, className = "" }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const w = 500;
  const h = height;
  const padding = { top: 25, right: 25, bottom: 35, left: 45 };

  const values = data.map((d) => d.value);
  const maxValue = Math.max(...values, 1);
  const minValue = 0;

  const chartW = w - padding.left - padding.right;
  const chartH = h - padding.top - padding.bottom;

  const barCount = data.length;
  const barGap = 12;
  const totalGapsW = barGap * (barCount + 1);
  const barW = (chartW - totalGapsW) / barCount;

  return (
    <div className={`relative selection:bg-blue-600 selection:text-white ${className}`}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto overflow-visible">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
          const gridY = padding.top + chartH * ratio;
          const gridVal = Math.round(maxValue - ratio * maxValue);
          return (
            <g key={index} className="opacity-30">
              <line x1={padding.left} y1={gridY} x2={w - padding.right} y2={gridY} stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
              <text x={padding.left - 10} y={gridY + 4} textAnchor="end" className="fill-slate-500 font-mono text-[9px] font-semibold">{gridVal}</text>
            </g>
          );
        })}

        {/* Render Bars and Labels */}
        {data.map((item, idx) => {
          const x = padding.left + barGap + idx * (barW + barGap);
          const barHeight = ((item.value - minValue) / (maxValue - minValue)) * chartH;
          const y = padding.top + chartH - barHeight;

          return (
            <g key={idx}>
              {/* Grid Label */}
              <text x={x + barW / 2} y={h - 10} textAnchor="middle" className="fill-slate-500 font-mono text-[9px] font-semibold opacity-70">
                {item.label}
              </text>

              {/* Rounded Rectangle Bar */}
              <rect
                x={x}
                y={y}
                width={barW}
                height={barHeight}
                rx="4"
                fill={hoverIndex === idx ? "#3b82f6" : "#2563eb"}
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
              />
            </g>
          );
        })}
      </svg>

      {/* Bar Tooltip */}
      {hoverIndex !== null && (() => {
        const x = padding.left + barGap + hoverIndex * (barW + barGap);
        const barHeight = ((data[hoverIndex].value - minValue) / (maxValue - minValue)) * chartH;
        const y = padding.top + chartH - barHeight;

        return (
          <div
            style={{
              left: `${((x + barW / 2) / w) * 100}%`,
              top: `${(y / h) * 100 - 15}%`,
            }}
            className="absolute transform -translate-x-1/2 -translate-y-full bg-slate-950 border border-slate-800 text-[10px] text-slate-200 font-bold px-2 py-1 rounded shadow-xl pointer-events-none whitespace-nowrap z-10 animate-slide-down flex flex-col gap-0.5"
          >
            <span className="text-[8px] text-slate-500 uppercase tracking-widest">{data[hoverIndex].label}</span>
            <span>{data[hoverIndex].value.toLocaleString()} items</span>
          </div>
        );
      })()}
    </div>
  );
};

// 4. Pie Chart Component
export const PieChart: React.FC<ChartProps> = ({ data, height = 200, className = "" }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const w = 350;
  const h = height;
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(cx, cy) - 25;

  const totalSum = data.reduce((sum, item) => sum + item.value, 0);

  // Default color gradients
  const defaultColors = [
    "#2563eb", // blue
    "#3b82f6", // light blue
    "#10b981", // green
    "#f59e0b", // yellow
    "#ef4444", // red
    "#8b5cf6", // purple
  ];

  let cumulativeAngle = 0;

  // Compute SVG circular sector slices
  const slices = data.map((item, idx) => {
    const percentage = item.value / totalSum;
    const angle = percentage * 360;

    // Convert polar coordinates to Cartesian coordinates
    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    };

    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + angle;
    cumulativeAngle = endAngle;

    const startPt = polarToCartesian(cx, cy, r, startAngle);
    const endPt = polarToCartesian(cx, cy, r, endAngle);

    const largeArcFlag = angle > 180 ? 1 : 0;

    // Draw slice path coordinates
    const pathD = `
      M ${cx} ${cy}
      L ${startPt.x} ${startPt.y}
      A ${r} ${r} 0 ${largeArcFlag} 1 ${endPt.x} ${endPt.y}
      Z
    `;

    return {
      pathD,
      label: item.label,
      value: item.value,
      percentage,
      color: item.color || defaultColors[idx % defaultColors.length],
      midAngle: startAngle + angle / 2,
    };
  });

  return (
    <div className={`relative flex flex-col sm:flex-row items-center justify-center gap-6 selection:bg-blue-600 selection:text-white ${className}`}>
      {/* SVG Slices Panel */}
      <svg viewBox={`0 0 ${w} ${h}`} className="w-56 h-56 overflow-visible">
        {slices.map((slice, idx) => {
          const isHovered = hoverIndex === idx;

          // Pull segment outward slightly on hover
          const pushDistance = isHovered ? 8 : 0;
          const pushRad = ((slice.midAngle - 90) * Math.PI) / 180;
          const translateX = Math.cos(pushRad) * pushDistance;
          const translateY = Math.sin(pushRad) * pushDistance;

          return (
            <path
              key={idx}
              d={slice.pathD}
              fill={slice.color}
              style={{ transform: `translate(${translateX}px, ${translateY}px)` }}
              className="transition-all duration-300 cursor-pointer stroke-slate-900 stroke-2"
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            />
          );
        })}
      </svg>

      {/* Legend Block */}
      <div className="flex flex-col gap-2.5">
        {slices.map((slice, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 cursor-default"
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div
              style={{ backgroundColor: slice.color }}
              className={`w-3.5 h-3.5 rounded transition-all duration-200 ${
                hoverIndex === idx ? "scale-115 ring-2 ring-slate-800" : ""
              }`}
            />
            <div className="flex flex-col">
              <span className={`text-[10px] font-bold transition-colors ${hoverIndex === idx ? "text-slate-100" : "text-slate-400"}`}>
                {slice.label}
              </span>
              <span className="text-[9px] text-slate-500 font-semibold font-mono">
                {slice.value.toLocaleString()} ({Math.round(slice.percentage * 100)}%)
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
