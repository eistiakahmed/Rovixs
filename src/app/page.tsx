"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Search, Settings, Trash2, Mail, ArrowRight, Download, CheckCircle } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [asyncLoading, setAsyncLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const triggerAsyncLoad = () => {
    setAsyncLoading(true);
    setSuccess(false);
    setTimeout(() => {
      setAsyncLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* Background Gradient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <main className="flex-1 max-w-11/12 w-full mx-auto p-6 md:p-12 relative z-10 flex flex-col gap-12">
        {/* Header Section */}
        <section className="text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-800/80 pb-8">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Rovixs Button System
            </h1>
            <p className="text-slate-400 mt-2 text-lg">
              Explore custom, reusable button variants designed with micro-animations and custom color themes.
            </p>
          </div>
          <Button variant="primary" size="lg" onClick={() => router.push("/loading")}>
            Preview Loading Page <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
        </section>

        {/* Buttons Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Core Variants */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
            <div>
              <h2 className="text-lg font-bold text-slate-200">1. Core Variants</h2>
              <p className="text-xs text-slate-500 mt-0.5">Primary, Secondary, Outline, and Ghost styles.</p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Card 2: Interactive Loading Button */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
            <div>
              <h2 className="text-lg font-bold text-slate-200">2. Loading Button</h2>
              <p className="text-xs text-slate-500 mt-0.5">Click the button below to simulate an asynchronous loading event.</p>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Button
                variant="primary"
                isLoading={asyncLoading}
                onClick={triggerAsyncLoad}
                leftIcon={success ? <CheckCircle className="w-4 h-4 text-green-400 animate-bounce" /> : undefined}
                className={success ? "border-green-500/50 bg-green-950/20 text-green-400" : ""}
              >
                {success ? "Success!" : "Click to Load"}
              </Button>

              <Button variant="secondary" isLoading={true}>
                Static Loading
              </Button>
            </div>
          </div>

          {/* Card 3: Icon Button Configurations */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
            <div>
              <h2 className="text-lg font-bold text-slate-200">3. Icon Buttons</h2>
              <p className="text-xs text-slate-500 mt-0.5">Perfect square icon-only shapes or textual buttons with leading/trailing icons.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <span className="text-xs text-slate-400 w-20">Icon Only:</span>
                <Button variant="primary" isIconOnly size="sm">
                  <Search className="w-4 h-4" />
                </Button>
                <Button variant="secondary" isIconOnly size="md">
                  <Settings className="w-5 h-5" />
                </Button>
                <Button variant="outline" isIconOnly size="lg">
                  <Trash2 className="w-5 h-5 text-red-400" />
                </Button>
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-xs text-slate-400 w-20">With Text:</span>
                <Button variant="outline" leftIcon={<Mail className="w-4 h-4" />}>
                  Mail Box
                </Button>
                <Button variant="primary" rightIcon={<Download className="w-4 h-4" />}>
                  Download Invoice
                </Button>
              </div>
            </div>
          </div>

          {/* Card 4: Link Button Styles */}
          <div className="bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 flex flex-col gap-6 backdrop-blur-md">
            <div>
              <h2 className="text-lg font-bold text-slate-200">4. Link Buttons</h2>
              <p className="text-xs text-slate-500 mt-0.5">Buttons styled as standard links with underlines on hover.</p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <Button variant="link" size="sm">
                Small Link
              </Button>
              <Button variant="link" size="md">
                Default Link
              </Button>
              <Button variant="link" size="lg">
                Large Link
              </Button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
