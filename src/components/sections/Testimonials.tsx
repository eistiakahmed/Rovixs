"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";

const MotionCard = motion(Card);

interface TestimonialCard {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarLetter: string;
  rating: number;
}

const testimonials: TestimonialCard[] = [
  {
    quote: "Rovixs delivered our SaaS billing integration ahead of schedule. The code was exceptionally structured and security-tested. They are now our primary software partner.",
    name: "Sarah Jenkins",
    role: "Chief Technology Officer",
    company: "CloudCore Systems",
    avatarLetter: "S",
    rating: 5,
  },
  {
    quote: "The CRM dashboard we built with Rovixs completely overhauled our inventory operations. Real-time notifications and offline caching operate flawlessly on mobile interfaces.",
    name: "Rahman Al-Jamil",
    role: "Founder & Director",
    company: "DXMart Retail Group",
    avatarLetter: "R",
    rating: 5,
  },
  {
    quote: "Exceptional UI design and web portal engineering! They took our wireframes and converted them into pixel-perfect pages with very fast load times and clean animations.",
    name: "David Sterling",
    role: "VP of Product",
    company: "Creaify Digital",
    avatarLetter: "D",
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-purple-950/20" id="testimonials-section">
      {/* Background glow layers */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -z-10" />

      <Container size="xl" className="relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted by Industry <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Leaders</span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed max-w-2xl">
            See how our tailored systems and custom platform integrations help engineering teams accelerate operations.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((card, index) => (
            <MotionCard
              key={card.name}
              hoverable
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/65 border border-purple-900/20 p-8 relative flex flex-col justify-between gap-6"
            >
              {/* Quote Decorator Icon */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-purple-950/20 -z-0 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4 text-left">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(card.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-purple-100 text-sm leading-relaxed italic">
                  "{card.quote}"
                </p>
              </div>

              {/* Author Metadata */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-purple-950/40 relative z-10 text-left">
                {/* Avatar Icon */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-white font-bold flex items-center justify-center shadow-lg shadow-primary/10">
                  {card.avatarLetter}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">{card.name}</span>
                  <span className="text-[10px] text-purple-400 font-semibold leading-none mt-1">
                    {card.role}, <strong className="text-secondary font-bold">{card.company}</strong>
                  </span>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>

      </Container>
    </section>
  );
};
