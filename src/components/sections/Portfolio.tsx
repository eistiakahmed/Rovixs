"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Sparkles, Layout, Smartphone, Cloud, Globe, Users, Database } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const MotionCard = motion(Card);

interface ProjectItem {
  title: string;
  category: "SaaS" | "E-Commerce" | "Mobile App" | "Enterprise Web";
  description: string;
  tech: string[];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const portfolioData: ProjectItem[] = [
  {
    title: "Creaify SaaS Workspace",
    category: "SaaS",
    description: "A secure, multi-tenant billing workspace built with automatic subdomain routing, Stripe dashboard, and license seats control.",
    tech: ["Next.js", "Stripe Billing", "PostgreSQL", "Tailwind CSS"],
    image: "/asset/software_img3.png?v=2",
    icon: Cloud,
  },
  {
    title: "babai E-Learning Platform",
    category: "Mobile App",
    description: "Responsive web portal and mobile app features supporting fast media streams, dynamic test cards, and real-time student reports.",
    tech: ["React Native", "Expo", "NodeJS APIs", "Vimeo API"],
    image: "/asset/software_img1.png?v=2",
    icon: Smartphone,
  },
  {
    title: "DXMart E-Commerce Suite",
    category: "E-Commerce",
    description: "High-performance online shop dashboard, synced database schema catalogs, and secure multi-merchant checkouts.",
    tech: ["Next.js", "Prisma ORM", "Redis", "Docker Compose"],
    image: "/asset/software_img2.png?v=2",
    icon: Layout,
  },
  {
    title: "Rovixs Enterprise Portal",
    category: "Enterprise Web",
    description: "Ultra-fast corporate portal with automated content scheduling and static page generation for high SEO index rankings.",
    tech: ["Next.js", "Headless CMS", "Tailwind CSS", "Vercel CDN"],
    image: "/asset/software_img4.png?v=2",
    icon: Globe,
  },
  {
    title: "OmniCRM pipeline dashboard",
    category: "SaaS",
    description: "An advanced CRM platform supporting custom pipeline filters, real-time analytics graphs, and third-party call integrations.",
    tech: ["React", "TypeScript", "NodeJS", "ChartJS"],
    image: "/asset/1782040519895.png",
    icon: Users,
  },
  {
    title: "Secure Headless CMS Engine",
    category: "Enterprise Web",
    description: "Tailored content management system offering nested catalog schemas, media optimization, and webhook rebuild triggers.",
    tech: ["GraphQL", "Next.js ISR", "PostgreSQL", "Tailwind CSS"],
    image: "/asset/1782041335822.png",
    icon: Database,
  },
];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = activeFilter === "All"
    ? portfolioData
    : portfolioData.filter(p => p.category === activeFilter);

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-purple-950/20" id="portfolio-section">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <Container size="xl" className="relative z-10">
        
        {/* Header and filter controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-max">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-left">
              Bespoke Systems <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">We Have Built</span>
            </h2>
            <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed text-left">
              Explore real-world software platforms, SaaS products, and custom portals built to solve complex business operations.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2.5">
            {["All", "SaaS", "E-Commerce", "Mobile App", "Enterprise Web"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`py-2 px-4 rounded-xl text-xs font-bold border tracking-wide transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                    : "bg-background/80 border-purple-900/30 text-purple-300 hover:text-white hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <MotionCard
                key={project.title}
                hoverable
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col bg-background/65 border border-purple-900/20 rounded-3xl overflow-hidden shadow-xl shadow-purple-950/20"
              >
                {/* Visual Image container */}
                <div className="relative aspect-video overflow-hidden border-b border-purple-950/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                  
                  {/* Category overlay label */}
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background/95 border border-purple-900/40 text-[10px] font-bold uppercase tracking-wider text-purple-200 shadow-md">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {project.category}
                  </span>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-6 text-left">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-205/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-purple-950/40">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-purple-950/45 border border-purple-900/30 text-[10px] text-purple-300 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action link */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-primary transition-colors group/link mt-2 w-max"
                    >
                      Read Case Study
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </MotionCard>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
