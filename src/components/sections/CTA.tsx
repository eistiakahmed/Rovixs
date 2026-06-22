"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";
import { useToast } from "@/components/ui/Toast";

export const CTA: React.FC = () => {
  const { toast } = useToast();

  const handleStartProject = () => {
    toast("Thank you! Please submit your details via the custom service forms or email hello@rovixs.com", {
      type: "success",
      title: "Consultation Request",
    });
  };

  const handleContactUs = () => {
    const element = document.getElementById("footer-email");
    if (element) {
      element.focus();
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      toast("Please email hello@rovixs.com directly for quick queries.", {
        title: "Contact Information",
      });
    }
  };

  return (
    <section className="relative py-20 bg-transparent overflow-hidden border-t border-purple-950/20">
      <Container size="xl" className="relative z-10">
        
        {/* Banner container */}
        <div className="relative bg-gradient-to-r from-background via-purple-950/50 to-secondary/20 border border-purple-900/35 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 shadow-purple-950/10">
          {/* Animated decorative graphics */}
          <motion.div
            className="absolute top-0 right-0 w-[320px] h-[320px] bg-primary/15 rounded-full blur-3xl pointer-events-none -z-0"
            animate={{
              scale: [1, 1.25, 1],
              x: [0, 15, -15, 0],
              y: [0, -15, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-secondary/20 rounded-full blur-2xl pointer-events-none -z-0"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -10, 10, 0],
              y: [0, 15, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Heading content */}
          <div className="flex-1 flex flex-col gap-4 relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider w-max mx-auto md:mx-0">
              <Sparkles className="w-3.5 h-3.5" />
              Build the Future With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Accelerate Your Digital Footprint?
            </h2>
            <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed max-w-xl">
              Partner with Rovixs to design bespoke SaaS dashboards, structure database engines, and deploy stable production code.
            </p>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10 flex-shrink-0">
            <Button
              variant="animated"
              size="lg"
              onClick={handleStartProject}
              className="font-bold group h-12 w-full sm:w-auto"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleContactUs}
              className="border-purple-800 text-purple-100 hover:bg-purple-950/30 hover:border-primary/50 font-bold h-12 w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </Button>
          </div>

        </div>

      </Container>
    </section>
  );
};
