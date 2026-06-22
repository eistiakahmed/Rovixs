"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Search, Map, Paintbrush, Code2, ShieldAlert, Rocket, HeartHandshake } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "Thorough workshops to analyze business goals, customer journeys, data schemas, and key success metrics.",
    icon: Search,
    color: "bg-purple-950/40 border-purple-900/30 text-primary",
  },
  {
    step: "02",
    title: "Planning",
    description: "Mapping out system architecture blueprints, choosing database models, and defining developer sprints.",
    icon: Map,
    color: "bg-pink-950/40 border-pink-900/30 text-secondary",
  },
  {
    step: "03",
    title: "Design",
    description: "Creating responsive, interactive Figma prototypes, defining consistent typography systems and UI rules.",
    icon: Paintbrush,
    color: "bg-purple-950/40 border-purple-900/30 text-primary",
  },
  {
    step: "04",
    title: "Development",
    description: "Writing pixel-perfect frontend layouts and secure, scalable API endpoints using modern frameworks.",
    icon: Code2,
    color: "bg-blue-950/40 border-blue-900/30 text-blue-400",
  },
  {
    step: "05",
    title: "Testing",
    description: "Executing automated Playwright flows, Jest unit suites, and load test scripts to eliminate security bugs.",
    icon: ShieldAlert,
    color: "bg-rose-950/40 border-rose-900/30 text-rose-400",
  },
  {
    step: "06",
    title: "Launch",
    description: "Deploying build clusters to cloud environments (Vercel, AWS) with zero downtime and custom CDN caches.",
    icon: Rocket,
    color: "bg-emerald-950/40 border-emerald-900/30 text-emerald-400",
  },
  {
    step: "07",
    title: "Support",
    description: "Continuous telemetry tracking, active server upgrades, package patches, and dedicated maintenance.",
    icon: HeartHandshake,
    color: "bg-amber-950/40 border-amber-900/30 text-amber-400",
  },
];

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-purple-950/20" id="process-section">
      {/* Soft background decorative layout */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <Container size="xl" className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            Our Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How We Move <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">You Forward</span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed max-w-2xl">
            A rigorous, structured pipeline designed to turn digital concepts into enterprise-grade production software.
          </p>
        </div>

        {/* Timeline Row (Desktop) */}
        <div className="hidden lg:flex flex-col gap-10 max-w-6xl mx-auto">
          {/* Step circles navigation bar */}
          <div className="relative flex justify-between items-center w-full px-8">
            {/* Timeline connector track */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-purple-950 -translate-y-1/2 -z-10" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 -z-10 transition-all duration-500"
              style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
            />

            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStep;
              const isPassed = idx < activeStep;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-300 relative group
                    ${isActive
                      ? "bg-primary border-primary text-white scale-110 ring-4 ring-primary/20"
                      : isPassed
                      ? "bg-background border-secondary text-secondary shadow-md shadow-secondary/5"
                      : "bg-background border-purple-900/40 text-purple-400 hover:border-primary/50 hover:text-white"
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  
                  {/* Floating Number Tooltip */}
                  <span className="absolute -bottom-7 text-[10px] uppercase font-bold tracking-widest text-purple-400 group-hover:text-white transition-colors">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Panel */}
          <div className="bg-background/75 border border-purple-900/20 p-8 rounded-3xl shadow-xl shadow-purple-950/20 mt-8 flex flex-col md:flex-row items-center gap-8 min-h-[220px]">
            {/* Large number index */}
            <div className="text-7xl font-extrabold bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent opacity-85 select-none w-24 text-center">
              {processSteps[activeStep].step}
            </div>

            {/* Content text */}
            <div className="flex-1 flex flex-col gap-3 text-left">
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                Stage {activeStep + 1}
              </span>
              <h3 className="text-xl font-bold text-white">
                {processSteps[activeStep].title} Phase
              </h3>
              <p className="text-purple-205/70 text-sm sm:text-base leading-relaxed">
                {processSteps[activeStep].description}
              </p>
            </div>
          </div>
        </div>

        {/* Static Card Timeline List (Fallback for Mobile & Tablet) */}
        <div className="flex lg:hidden flex-col gap-6 max-w-2xl mx-auto">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="bg-background/65 border border-purple-900/20 p-6 rounded-2xl flex gap-5 items-start text-left shadow-md"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border ${step.color} shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">{step.step}</span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-purple-205/70 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
