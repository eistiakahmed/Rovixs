"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Users, Layers, Package, GraduationCap, CreditCard, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/Card";

const MotionCard = motion(Card);

interface SolutionItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const solutionsData: SolutionItem[] = [
  {
    id: "crm",
    title: "CRM System",
    description: "Manage lead pipelines, customer logs, and analytics metrics to elevate client relations.",
    icon: Users,
    color: "from-purple-500/20 to-indigo-500/20 text-primary border-purple-800/30",
  },
  {
    id: "erp",
    title: "ERP Software",
    description: "Unify business processes, financial data, inventory logs, and operational workflows.",
    icon: Layers,
    color: "from-pink-500/20 to-purple-500/20 text-secondary border-pink-800/30",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Real-time stock catalog tracking, automated alerts, and supplier integrations.",
    icon: Package,
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-900/30",
  },
  {
    id: "school",
    title: "School Management",
    description: "Academic calendars, student performance reports, attendance tracking, and parent portals.",
    icon: GraduationCap,
    color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-900/30",
  },
  {
    id: "pos",
    title: "POS System",
    description: "Fast multi-terminal checkout registers, secure payment processing, and dynamic transaction logs.",
    icon: CreditCard,
    color: "from-rose-500/20 to-red-500/20 text-rose-450 border-rose-900/30",
  },
  {
    id: "hr",
    title: "HR Management",
    description: "Employee onboarding directories, payroll calculations, leave requests, and performance tracking.",
    icon: Briefcase,
    color: "from-cyan-500/20 to-sky-500/20 text-cyan-400 border-cyan-900/30",
  },
];

export const Solutions: React.FC = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-purple-950/20" id="solutions-section">
      {/* Soft background glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none -z-10" />

      {/* Pulsing Enterprise Nodes Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-55">
        {[
          { x: "15%", y: "25%", color: "bg-primary/30" },
          { x: "45%", y: "15%", color: "bg-secondary/30" },
          { x: "75%", y: "30%", color: "bg-primary/30" },
          { x: "85%", y: "75%", color: "bg-secondary/30" },
          { x: "30%", y: "80%", color: "bg-primary/30" },
          { x: "60%", y: "70%", color: "bg-secondary/30" },
        ].map((node, idx) => (
          <div key={idx} style={{ left: node.x, top: node.y }} className="absolute">
            {/* Core dot */}
            <motion.div
              className={`w-2 h-2 rounded-full ${node.color} shadow-lg shadow-primary/35`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: 4 + idx * 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Pulsing ring */}
            <motion.div
              className={`absolute -left-3 -top-3 w-8 h-8 rounded-full border border-primary/25`}
              animate={{
                scale: [0.8, 1.8],
                opacity: [0.5, 0],
              }}
              transition={{
                duration: 4 + idx * 0.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </div>
        ))}
      </div>

      <Container size="xl" className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            Enterprise Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tailored Platforms for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Every Operation</span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed max-w-2xl">
            We architect and deploy specialized dashboards and workflow hubs designed to optimize efficiency and drive organizational performance.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <MotionCard
                key={sol.id}
                hoverable
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-background/65 border border-purple-900/20 p-8 flex flex-col gap-6"
              >
                {/* Visual Icon Container */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${sol.color} border flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-350">
                    {sol.title}
                  </h3>
                  <p className="text-purple-205/70 text-sm leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                {/* Subtle link action decoration */}
                <div className="text-xs font-bold text-purple-400/50 group-hover:text-primary transition-colors flex items-center gap-1 mt-auto pt-4 border-t border-purple-950/40">
                  Ready to Deploy &rarr;
                </div>
              </MotionCard>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
