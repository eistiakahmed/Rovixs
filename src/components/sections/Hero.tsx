"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layout, Database, Terminal, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroCanvas } from "@/components/ui/HeroCanvas";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-transparent pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* Interactive cyberspace particle background */}
      <HeroCanvas />

      {/* Light dotted grid background pattern adapted for dark layout */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none -z-10" />

      {/* Ambient neon soft glow background circles */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[110px] pointer-events-none -z-10" />

      <Container size="xl" className="relative z-10 w-full flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Taglines, Headlines and CTA */}
        <div className="flex-1 flex flex-col gap-6 items-start text-left max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Software Engineering & SaaS Solutions
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Building Digital Products <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
              That Matter
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-purple-200/80 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            We create modern software solutions, SaaS applications, mobile apps, e-commerce platforms, and automation systems designed for growth.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto mt-2"
          >
            <Button
              variant="animated"
              size="lg"
              className="group min-w-[180px]"
              onClick={() => {
                const element = document.getElementById("subscription-preview");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="min-w-[180px]"
              onClick={() => {
                const element = document.getElementById("services-section");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Services
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Interactive Mockup / Code & Preview Cards */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center min-h-[350px]">
          
          {/* Main Visual Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[420px] bg-[#0c061a]/90 backdrop-blur-md rounded-2xl shadow-2xl p-5 border border-purple-900/30 text-left font-mono text-xs z-10 shadow-purple-950/20"
          >
            <div className="flex gap-1.5 mb-4 border-b border-purple-950/50 pb-3">
              <span className="w-3 h-3 rounded-full bg-rose-500 block animate-pulse" />
              <span className="w-3 h-3 rounded-full bg-amber-500 block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 block" />
              <span className="text-[10px] text-purple-400 font-bold ml-2">rovixs-deployment.ts</span>
            </div>
            
            <div className="flex flex-col gap-1.5 text-purple-250">
              <p><span className="text-pink-500">const</span> product = <span className="text-blue-400">await</span> Rovixs.<span className="text-yellow-400">build</span>(&#123;</p>
              <p className="pl-4">name: <span className="text-emerald-400">"SaaS Application"</span>,</p>
              <p className="pl-4">stack: [<span className="text-emerald-400">"Next.js"</span>, <span className="text-emerald-400">"Tailwind"</span>],</p>
              <p className="pl-4">scale: <span className="text-emerald-400">"High Availability"</span>,</p>
              <p className="pl-4">security: <span className="text-emerald-400">"Enterprise Grade"</span></p>
              <p>&#125;);</p>
              <p className="text-purple-400/50 mt-2">// Deploying project to cloud cluster...</p>
              <p><span className="text-emerald-400">✔</span> Production release compiled successfully.</p>
            </div>
          </motion.div>

          {/* Floating UI Card 1: Users/Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute left-0 bottom-4 w-44 bg-[#0c061a]/95 border border-purple-900/35 rounded-xl p-4 shadow-xl z-20 flex flex-col gap-2 text-left"
          >
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                <Layout className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-purple-450 uppercase font-bold tracking-wider">Active SaaS</span>
                <span className="text-xs font-bold text-white">Live Services</span>
              </div>
            </div>
            <div className="h-1.5 w-full bg-purple-950/60 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary w-[85%] rounded-full" />
            </div>
          </motion.div>

          {/* Floating UI Card 2: Microservices / Database */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute right-0 top-4 w-44 bg-[#0c061a]/95 border border-purple-900/35 rounded-xl p-4 shadow-xl z-20 flex flex-col gap-2 text-left"
          >
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Database className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-purple-455 uppercase font-bold tracking-wider">Cluster DB</span>
                <span className="text-xs font-bold text-white">99.99% Uptime</span>
              </div>
            </div>
            <div className="h-1.5 w-full bg-purple-950/60 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary w-[98%] rounded-full" />
            </div>
          </motion.div>

        </div>

      </Container>
    </section>
  );
};
