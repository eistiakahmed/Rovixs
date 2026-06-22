"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Check, Info, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  ctaText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "Ideal for startups needing a robust initial web framework.",
    ctaText: "Choose Starter",
    features: [
      { text: "Up to 3 Custom Web Modules", included: true },
      { text: "Standard Cloud Infrastructure", included: true },
      { text: "Weekly Database Backup Logs", included: true },
      { text: "Business Hours Support (Email)", included: true },
      { text: "Multi-tenant Custom Domains", included: false },
      { text: "Advanced Performance Telemetry", included: false },
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "Our most popular tier, designed for scaling business operations.",
    popular: true,
    ctaText: "Get Growth Plan",
    features: [
      { text: "Up to 8 Custom Web Modules", included: true },
      { text: "Dedicated Cloud Server Node", included: true },
      { text: "Daily Automated Database Backups", included: true },
      { text: "Priority Support (Email & Slack)", included: true },
      { text: "Multi-tenant Custom Domains", included: true },
      { text: "Advanced Performance Telemetry", included: false },
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 249,
    yearlyPrice: 199,
    description: "Bespoke, high-availability architecture with zero scaling limits.",
    ctaText: "Contact Sales",
    features: [
      { text: "Unlimited Custom Web Modules", included: true },
      { text: "Clustered High-Availability Node", included: true },
      { text: "Real-time Relational DB Replication", included: true },
      { text: "24/7 Dedicated Account Engineer", included: true },
      { text: "Multi-tenant Custom Domains", included: true },
      { text: "Advanced Performance Telemetry", included: true },
    ],
  },
];

export const Subscription: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-purple-950/20" id="subscription-preview">
      {/* Light design accent grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808003_1px,transparent_1px),linear-gradient(to_bottom,#80808003_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      <Container size="xl" className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-5">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
            Under Development
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Flexible Subscription <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed max-w-2xl">
            Choose a recurring package that fits your scaling milestones. Subscriptions are simulated and under active testing.
          </p>

          {/* Monthly / Yearly Toggle Switch */}
          <div className="flex items-center gap-3 bg-background/80 p-1.5 rounded-2xl border border-purple-900/30 shadow-md mt-4">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all duration-200 ${
                billingCycle === "monthly"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-purple-300 hover:text-white"
              }`}
            >
              Monthly Billed
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`py-2 px-4 rounded-xl text-xs font-bold transition-all duration-200 ${
                billingCycle === "yearly"
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-purple-300 hover:text-white"
              }`}
            >
              Yearly (Save ~20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan) => {
            const currentPrice = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const saving = plan.monthlyPrice - plan.yearlyPrice;

            return (
              <div
                key={plan.name}
                className={`relative bg-background/65 border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "border-secondary/50 shadow-xl shadow-pink-950/20 ring-1 ring-secondary/20 scale-100 md:scale-[1.03] z-10"
                    : "border-purple-900/20 shadow-lg shadow-purple-950/20 hover:border-primary/45"
                }`}
              >
                {/* Popular Ribbon */}
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white font-bold text-[10px] uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    Most Popular Choice
                  </span>
                )}

                {/* Plan Metadata */}
                <div className="flex flex-col gap-6 text-left">
                  <div className="flex flex-col gap-2">
                    <span className="text-purple-400 text-xs uppercase tracking-widest font-extrabold">{plan.name}</span>
                    <p className="text-purple-205/70 text-xs leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Pricing Display */}
                  <div className="flex items-baseline gap-1 pt-4 border-t border-purple-950/40">
                    <span className="text-4xl font-extrabold text-white">$</span>
                    <span className="text-5xl font-extrabold text-white tracking-tight">
                      {currentPrice}
                    </span>
                    <span className="text-purple-400 text-xs font-semibold ml-1">/ mo</span>
                  </div>
                  {billingCycle === "yearly" && (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md w-max">
                      Save ${saving}/mo (Billed annually)
                    </span>
                  )}

                  {/* Features list */}
                  <ul className="flex flex-col gap-3.5 pt-6">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex gap-2.5 items-start text-xs leading-normal ${
                          feature.included ? "text-purple-200" : "text-purple-400/40 line-through decoration-purple-950"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            feature.included
                              ? "bg-emerald-500/10 text-emerald-400"
                              : "bg-purple-950/40 text-purple-500"
                          }`}
                        >
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-8 mt-8 border-t border-purple-950/40">
                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    className={`w-full justify-center h-12 text-xs font-bold`}
                  >
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Under Development Callout Banner */}
        <div className="max-w-4xl mx-auto mt-16 bg-amber-500/5 border border-amber-500/25 rounded-2xl p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
            <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">Subscription Preview Warnings</h4>
            <p className="text-xs text-amber-400/80 leading-relaxed">
              This subscription module is currently under active frontend design. The server database has not been linked. Submitting plans will trigger a simulated mockup callback state, and no transaction data is processed.
            </p>
          </div>
        </div>

      </Container>
    </section>
  );
};
