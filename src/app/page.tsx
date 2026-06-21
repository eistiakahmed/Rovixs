"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Sparkles, LayoutGrid, Cpu } from "lucide-react";

export default function WelcomeHome() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden justify-center items-center">
      {/* Background Gradient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Decorative center radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none -z-10" />

      <Container size="md" className="relative z-10 flex flex-col items-center text-center px-6 py-12 md:py-24 gap-8">
        
        {/* Core Logo/Icon Badge */}
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 shadow-xl shadow-blue-500/5 animate-logo-glow mb-2">
          <Cpu className="w-8 h-8 text-blue-400" />
        </div>

        {/* Hero Copy */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-none">
            Rovixs Components
          </h1>
          <p className="text-slate-400 text-base sm:text-xl leading-relaxed max-w-lg mx-auto">
            A premium component ecosystem styled with customized brand colors, glassmorphic layouts, and smooth animations.
          </p>
        </div>

        {/* Dynamic Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mt-4">
          <Button
            variant="animated"
            size="lg"
            onClick={() => router.push("/components")}
            leftIcon={<LayoutGrid className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Components Sandbox
          </Button>

          <Button
            variant="glass"
            size="lg"
            onClick={() => router.push("/loading")}
            leftIcon={<Sparkles className="w-5 h-5 text-blue-400" />}
            rightIcon={<ArrowRight className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition-transform" />}
            className="w-full sm:w-auto"
          >
            Orbit Loader
          </Button>
        </div>

        {/* Footer Framework Badges */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 uppercase tracking-widest mt-12">
          <span>Next.js 16</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span>Tailwind v4</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          <span>React 19</span>
        </div>

      </Container>
    </div>
  );
}
