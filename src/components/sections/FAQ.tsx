"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "services",
    question: "What custom software services does Rovixs specialize in?",
    answer: "We specialize in end-to-end design and coding of custom software platforms, including high-availability web applications (Next.js), native cross-platform mobile apps (React Native), database systems optimization (PostgreSQL/Redis), and automated cloud delivery pipelines (DevOps).",
  },
  {
    id: "ownership",
    question: "Are the source codes and design files fully owned by us?",
    answer: "Yes, 100%. Upon completion of project milestones and final deployment clearance, you receive complete intellectual property and source code ownership. We do not charge licensing or monthly lock-in fees for custom work.",
  },
  {
    id: "timeline",
    question: "How long does a typical software development cycle take?",
    answer: "A standard development sprint takes between 2 to 10 weeks depending on complexity. Small marketing sites or custom CMS templates compile faster, while complex CRM databases or SaaS billing platforms follow a longer staging pipeline.",
  },
  {
    id: "monitoring",
    question: "Do you offer post-launch support and server maintenance?",
    answer: "Absolutely. We offer ongoing maintenance agreements covering automated daily backups, server load balancing checks, Node package security audits, and developer hotfix hours.",
  },
  {
    id: "upgrade",
    question: "Can we migrate data from a legacy database during deployment?",
    answer: "Yes, database solutions include comprehensive schema design and migration scripting. We migrate data safely from legacy platforms (MySQL, MongoDB, spreadsheet records) into optimized relational structures.",
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-purple-950/20" id="faq-section">
      {/* Accent vector decorations */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -z-10" />

      {/* Floating question marks backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-25">
        {[
          { x: "10%", y: "15%", size: "text-5xl font-bold", delay: 0 },
          { x: "85%", y: "20%", size: "text-6xl font-light", delay: 2 },
          { x: "75%", y: "80%", size: "text-4xl font-semibold", delay: 1 },
          { x: "15%", y: "75%", size: "text-7xl font-light", delay: 3 },
          { x: "48%", y: "85%", size: "text-3xl font-bold", delay: 4.5 },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            style={{ left: item.x, top: item.y }}
            className={`absolute font-sans text-primary/10 ${item.size}`}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.45, 0.15],
              rotate: [0, 8, -8, 0]
            }}
            transition={{
              duration: 8 + idx * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
          >
            ?
          </motion.div>
        ))}
      </div>

      <Container size="xl" className="relative z-10 max-w-4xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            FAQ Section
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
            Find answers to common questions about our design systems, database configurations, and deployment strategies.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-background/65 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-primary/50 shadow-lg shadow-purple-950/30"
                    : "border-purple-900/20 hover:border-purple-800"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors duration-250 hover:bg-purple-950/20"
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${isOpen ? "text-primary" : "text-purple-400"}`} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-purple-950/40 text-xs sm:text-sm text-purple-200/80 leading-relaxed bg-purple-950/10 text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
