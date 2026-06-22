"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GitBranch, Cpu, Zap, ShieldCheck, Search, HeartHandshake } from "lucide-react";
import { Card } from "@/components/ui/Card";

const MotionCard = motion(Card);

interface FeatureBlock {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeColor: string;
}

const features: FeatureBlock[] = [
  {
    title: "Scalable Architecture",
    description: "Systems structured to automatically scale database query connections and support spikes in concurrent user traffic.",
    icon: GitBranch,
    badgeColor: "bg-purple-950/40 border-purple-900/30 text-primary",
  },
  {
    title: "Modern Technology Stack",
    description: "Harness Next.js, React Native, TypeScript, Tailwind, and Node.js for modular, highly maintainable code layouts.",
    icon: Cpu,
    badgeColor: "bg-pink-950/40 border-pink-900/30 text-secondary",
  },
  {
    title: "Fast Performance",
    description: "Lightweight templates compiled for high Core Web Vitals, sub-second loads, and high user retention percentages.",
    icon: Zap,
    badgeColor: "bg-amber-950/40 border-amber-900/30 text-amber-400",
  },
  {
    title: "Secure Solutions",
    description: "Enterprise security auditing, HTTPS credentials, JWT logins, and secure data encryption protocols by default.",
    icon: ShieldCheck,
    badgeColor: "bg-emerald-950/40 border-emerald-900/30 text-emerald-400",
  },
  {
    title: "SEO Friendly",
    description: "Built-in structured metadata tags, semantic markup, and server side rendering configured for high search engine indexes.",
    icon: Search,
    badgeColor: "bg-rose-950/40 border-rose-900/30 text-rose-400",
  },
  {
    title: "Ongoing Support",
    description: "Continuous version updates, server maintenance schedules, and developer assistance intervals post-launch.",
    icon: HeartHandshake,
    badgeColor: "bg-cyan-950/40 border-cyan-900/30 text-cyan-400",
  },
];

export const WhyChoose: React.FC = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-purple-950/20" id="why-choose-section">
      {/* Decorative dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(#80808005_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none -z-10" />

      {/* Radar sonar pulse animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-50">
        {/* Left Radar */}
        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-80 h-80">
          <motion.div
            className="absolute inset-0 rounded-full border border-secondary/35 bg-secondary/5"
            animate={{
              scale: [0.5, 1.6],
              opacity: [0.6, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-secondary/20 bg-secondary/2"
            animate={{
              scale: [0.5, 1.6],
              opacity: [0.4, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
              delay: 3
            }}
          />
        </div>
        
        {/* Right Radar */}
        <div className="absolute -right-12 top-1/3 w-64 h-64">
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/35 bg-primary/5"
            animate={{
              scale: [0.6, 1.7],
              opacity: [0.5, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-primary/20 bg-primary/2"
            animate={{
              scale: [0.6, 1.7],
              opacity: [0.35, 0]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              delay: 3.5
            }}
          />
        </div>
      </div>

      <Container size="xl" className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Scale & Speed</span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed max-w-2xl">
            We follow strict engineering principles to deliver software that doesn't just work, but elevates your digital infrastructure.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <MotionCard
                key={feature.title}
                hoverable
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group relative bg-background/65 border border-purple-900/20 p-8 flex flex-col gap-5"
              >
                {/* Icon Wrapper */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${feature.badgeColor} transition-transform duration-300 group-hover:scale-105 shadow-md`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text content */}
                <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-purple-205/70 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </MotionCard>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
