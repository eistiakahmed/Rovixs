"use client";

import { useState } from "react";
import Link from "next/link";
import Loading from "@/components/ui/Loading";

export default function LoadingPlayground() {
  const [size, setSize] = useState<"sm" | "md" | "lg" | "xl">("md");
  const [label, setLabel] = useState("Loading assets...");
  const [darkTheme, setDarkTheme] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayDuration, setOverlayDuration] = useState(3);

  const triggerOverlay = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, overlayDuration * 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Dynamic Futuristic Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Header */}
      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-40 bg-slate-950/80 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
          <h1 className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Rovixs Loader Playground
          </h1>
        </div>
        <Link
          href="/"
          className="text-xs bg-slate-900 hover:bg-slate-800 border border-slate-800 px-4 py-2 rounded-full transition-all hover:border-slate-700 font-medium"
        >
          ← Back to Home
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left Side: Interactive Preview Showcase */}
        <section className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 flex flex-col items-center justify-center min-h-[450px] relative overflow-hidden shadow-2xl backdrop-blur-sm">
            
            {/* Custom Theme background wrapper */}
            <div
              className={`absolute inset-4 rounded-xl transition-all duration-500 flex items-center justify-center border border-slate-800/50 ${
                darkTheme
                  ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
                  : "bg-gradient-to-br from-slate-100 via-white to-slate-100 text-slate-900"
              }`}
            >
              <div className="flex flex-col items-center">
                <Loading size={size} label={label} showBlurBackdrop={false} />
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900/20 border border-slate-950 rounded-xl p-4 text-xs text-slate-400 leading-relaxed">
            <span className="font-semibold text-blue-400">Component Spec:</span> Features 3 SVG circular paths styled with glowing drop-shadows and varying dash patterns. Custom CSS utilities in <code className="text-indigo-400">globals.css</code> control precise clockwise and counter-clockwise rotation speeds (<code className="text-indigo-400">1.5s</code>, <code className="text-indigo-400">3s</code>, <code className="text-indigo-400">4s</code>) with a center-origin transform to ensure perfect stability.
          </div>
        </section>

        {/* Right Side: Control Settings Panel */}
        <aside className="lg:col-span-4 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 shadow-2xl backdrop-blur-sm">
          <div>
            <h2 className="text-lg font-bold text-slate-100">Controls & Options</h2>
            <p className="text-xs text-slate-400 mt-1">Configure and inspect the loading element.</p>
          </div>

          <hr className="border-slate-800/80" />

          {/* Size Selectors */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Size</label>
            <div className="grid grid-cols-4 gap-2">
              {(["sm", "md", "lg", "xl"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`py-2 px-3 text-xs font-bold rounded-lg border uppercase transition-all ${
                    size === s
                      ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-600/30"
                      : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Label Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Custom Text Label</label>
            <input
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="e.g. Loading..."
              className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Theme Switcher */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Backdrop Theme</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setDarkTheme(true)}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                  darkTheme
                    ? "bg-slate-800 border-slate-700 text-slate-100"
                    : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"
                }`}
              >
                Dark Space
              </button>
              <button
                onClick={() => setDarkTheme(false)}
                className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                  !darkTheme
                    ? "bg-slate-200 border-slate-300 text-slate-900 font-bold"
                    : "bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300"
                }`}
              >
                Light Theme
              </button>
            </div>
          </div>

          <hr className="border-slate-800/80" />

          {/* Test Overlay Mode */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Simulate Transition</label>
              <select
                value={overlayDuration}
                onChange={(e) => setOverlayDuration(Number(e.target.value))}
                className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-300"
              >
                <option value={2}>2s</option>
                <option value={3}>3s</option>
                <option value={5}>5s</option>
                <option value={10}>10s</option>
              </select>
            </div>
            
            <button
              onClick={triggerOverlay}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all hover:shadow-xl hover:shadow-blue-500/20 active:scale-[0.98] border border-blue-500/30"
            >
              Trigger Fullscreen Overlay
            </button>
          </div>
        </aside>
      </main>

      {/* Fullscreen Overlay Portal (Conditional) */}
      {showOverlay && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md animate-fade-in">
          <div className="relative">
            <Loading size="lg" label={label} showBlurBackdrop={false} />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
              <p className="text-xs text-slate-500">
                Automatically closing in {overlayDuration}s...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
