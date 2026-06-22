"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiZod,
  SiNestjs,
  SiGraphql,
  SiFlutter,
  SiFirebase,
  SiPrisma,
  SiDocker,
  SiGooglecloud,
  SiGit
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const MotionCard = motion(Card);

interface TechItem {
  name: string;
  categories: string[]; // filter array: e.g. ["frontend", "backend", "database", "mobile", "devops"]
  icon: React.ComponentType<{ className?: string }>;
  brandColor: string;
}

const techStackData: TechItem[] = [
  {
    name: "JavaScript",
    categories: ["frontend", "backend"],
    icon: SiJavascript,
    brandColor: "#F7DF1E"
  },
  {
    name: "TypeScript",
    categories: ["frontend", "backend"],
    icon: SiTypescript,
    brandColor: "#3178C6"
  },
  {
    name: "React.js",
    categories: ["frontend"],
    icon: SiReact,
    brandColor: "#61DAFB"
  },
  {
    name: "Next.js",
    categories: ["frontend", "backend"],
    icon: SiNextdotjs,
    brandColor: "#FFFFFF"
  },
  {
    name: "Tailwind CSS",
    categories: ["frontend"],
    icon: SiTailwindcss,
    brandColor: "#38BDF8"
  },
  {
    name: "Redux",
    categories: ["frontend"],
    icon: SiRedux,
    brandColor: "#764ABC"
  },
  {
    name: "Node.js",
    categories: ["backend"],
    icon: SiNodedotjs,
    brandColor: "#339933"
  },
  {
    name: "Express.js",
    categories: ["backend"],
    icon: SiExpress,
    brandColor: "#FFFFFF"
  },
  {
    name: "NestJS",
    categories: ["backend"],
    icon: SiNestjs,
    brandColor: "#E0234E"
  },
  {
    name: "GraphQL",
    categories: ["frontend", "backend"],
    icon: SiGraphql,
    brandColor: "#E10098"
  },
  {
    name: "Flutter",
    categories: ["mobile"],
    icon: SiFlutter,
    brandColor: "#02569B"
  },
  {
    name: "Firebase",
    categories: ["mobile", "database"],
    icon: SiFirebase,
    brandColor: "#FFCA28"
  },
  {
    name: "MongoDB",
    categories: ["database"],
    icon: SiMongodb,
    brandColor: "#47A248"
  },
  {
    name: "Mongoose",
    categories: ["database"],
    icon: SiMongoose,
    brandColor: "#E23237"
  },
  {
    name: "PostgreSQL",
    categories: ["database"],
    icon: SiPostgresql,
    brandColor: "#4169E1"
  },
  {
    name: "MySQL",
    categories: ["database"],
    icon: SiMysql,
    brandColor: "#4479A1"
  },
  {
    name: "Redis",
    categories: ["database"],
    icon: SiRedis,
    brandColor: "#FF3E30"
  },
  {
    name: "Prisma",
    categories: ["database"],
    icon: SiPrisma,
    brandColor: "#2D3748"
  },
  {
    name: "Docker",
    categories: ["devops"],
    icon: SiDocker,
    brandColor: "#2496ED"
  },
  {
    name: "AWS",
    categories: ["devops"],
    icon: FaAws,
    brandColor: "#FF9900"
  },
  {
    name: "Google Cloud",
    categories: ["devops"],
    icon: SiGooglecloud,
    brandColor: "#4285F4"
  },
  {
    name: "Git",
    categories: ["devops"],
    icon: SiGit,
    brandColor: "#F05032"
  },
  {
    name: "Zod",
    categories: ["frontend", "backend"],
    icon: SiZod,
    brandColor: "#3E67B1"
  }
];

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Backend");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const categories = ["Backend", "Frontend", "Mobile", "Database", "DevOps"];

  const filteredTech = techStackData.filter((tech) => {
    return tech.categories.includes(activeCategory.toLowerCase());
  });

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-purple-950/20" id="tech-stack-section">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[150px] pointer-events-none -z-10" />

      {/* Orbital cosmic rings backdrop representing the tech ecosystem */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none overflow-hidden select-none -z-10 opacity-25">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Inner orbit */}
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="rgba(59,130,246,0.35)"
            strokeWidth="0.5"
            strokeDasharray="4,8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          />
          {/* Middle orbit */}
          <motion.circle
            cx="50"
            cy="50"
            r="32"
            fill="none"
            stroke="rgba(14,165,233,0.25)"
            strokeWidth="0.5"
            strokeDasharray="6,12"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          />
          {/* Outer orbit */}
          <motion.circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="rgba(59,130,246,0.15)"
            strokeWidth="0.3"
            strokeDasharray="2,6"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
          />
        </svg>
      </div>

      <Container size="xl" className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Technical Stack</span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed max-w-xl">
            A curated environment of modern frameworks and tools selected for high reliability, performance, and speed.
          </p>
        </div>

        {/* Dynamic Category Selector Tabs (Backend selected by default) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-purple-950/30 backdrop-blur-sm rounded-full border border-purple-900/35 relative gap-1 flex-wrap justify-center">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="relative px-6 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full cursor-pointer transition-colors duration-300 z-10 focus:outline-none"
                  style={{
                    color: isActive ? "#FFFFFF" : "rgba(209, 213, 219, 0.7)"
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10 shadow-lg shadow-primary/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Grid with Layout Transitions - Text Info Removed */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              // Find global index to prevent state mismatch
              const globalIdx = techStackData.findIndex(t => t.name === tech.name);
              const Icon = tech.icon;
              const isHovered = hoveredIdx === globalIdx;

              return (
                <MotionCard
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  hoverable
                  onMouseEnter={() => setHoveredIdx(globalIdx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="group relative bg-background/65 border rounded-2xl flex items-center justify-center h-32 transition-all duration-300 cursor-pointer"
                  style={{
                    borderColor: isHovered ? `${tech.brandColor}40` : "rgba(88,28,135,0.15)",
                    boxShadow: isHovered ? `0 10px 30px -10px ${tech.brandColor}20` : "none"
                  }}
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Centered Brand Icon - No Text Info */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-md"
                    style={{
                      color: tech.brandColor,
                      borderColor: isHovered ? `${tech.brandColor}60` : `${tech.brandColor}25`,
                      backgroundColor: isHovered ? `${tech.brandColor}18` : `${tech.brandColor}06`,
                      boxShadow: isHovered ? `0 0 15px ${tech.brandColor}30` : "none"
                    }}
                  >
                    <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </MotionCard>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </Container>
    </section>
  );
};
