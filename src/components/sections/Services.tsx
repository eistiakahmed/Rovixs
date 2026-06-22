import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Code2, Smartphone, Layers, Database, Palette, GitBranch, ShieldCheck, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}

const servicesData: ServiceItem[] = [
  {
    id: "software-dev",
    number: "01",
    title: "Software Development",
    description: (
      <>
        We deliver <Link href="/services/custom-software" className="text-secondary hover:underline font-semibold">custom software</Link> solutions with expert <Link href="/services/frontend-development" className="text-secondary hover:underline font-semibold">front-end</Link> and <Link href="/services/backend-development" className="text-secondary hover:underline font-semibold">back-end</Link> development from design to deployment.
      </>
    ),
    icon: Code2,
  },
  {
    id: "web-app",
    number: "02",
    title: "Web App Development",
    description: (
      <>
        We create powerful <Link href="/services/web-applications" className="text-secondary hover:underline font-semibold">web applications</Link> and <Link href="/services/mobile-apps" className="text-secondary hover:underline font-semibold">mobile apps</Link> for iOS and Android that drive business growth.
      </>
    ),
    icon: Smartphone,
  },
  {
    id: "saas-dev",
    number: "03",
    title: "SaaS Development",
    description: (
      <>
        Build scalable <Link href="/services/saas-platforms" className="text-secondary hover:underline font-semibold">SaaS platforms</Link> with modern web technologies and cloud infrastructure for seamless user experiences.
      </>
    ),
    icon: Layers,
  },
  {
    id: "db-management",
    number: "04",
    title: "Database Management",
    description: (
      <>
        Optimize your data with robust <Link href="/services/database-solutions" className="text-secondary hover:underline font-semibold">database solutions</Link>, back-end integration, and cloud storage for better decision-making.
      </>
    ),
    icon: Database,
  },
  {
    id: "ux-design",
    number: "05",
    title: "UX Design",
    description: (
      <>
        Design stunning <Link href="/services/user-interfaces" className="text-secondary hover:underline font-semibold">user interfaces</Link> with <Link href="/services/cms-integration" className="text-secondary hover:underline font-semibold">CMS integration</Link> and <Link href="/services/web-development" className="text-secondary hover:underline font-semibold">web development</Link> that engage and delight your users.
      </>
    ),
    icon: Palette,
  },
  {
    id: "scalable-design",
    number: "06",
    title: "Scalable System Design",
    description: (
      <>
        Build future-ready systems with <Link href="/services/devops" className="text-secondary hover:underline font-semibold">DevOps</Link>, <Link href="/services/cloud-architecture" className="text-secondary hover:underline font-semibold">cloud architecture</Link>, and <Link href="/services/database-optimization" className="text-secondary hover:underline font-semibold">database optimization</Link> that scale with your business.
      </>
    ),
    icon: GitBranch,
  },
  {
    id: "sqa",
    number: "07",
    title: "SQA",
    description: (
      <>
        Ensure quality with comprehensive <Link href="/services/qa-testing" className="text-secondary hover:underline font-semibold">QA testing</Link>, <Link href="/services/devops-automation" className="text-secondary hover:underline font-semibold">DevOps automation</Link>, and reliable user experiences.
      </>
    ),
    icon: ShieldCheck,
  },
  {
    id: "ai-integration",
    number: "08",
    title: "AI & Cloud Integration",
    description: (
      <>
        Deploy machine learning, natural language pipelines, and serverless workflows on <Link href="/services/cloud-architecture" className="text-secondary hover:underline font-semibold">AWS/GCP</Link> clusters to automate operations.
      </>
    ),
    icon: Brain,
  },
];

export const Services: React.FC = () => {
  const floatingGlyphs = [
    { text: "</>", x: "10%", y: "20%", size: "text-2xl", delay: 0 },
    { text: "{}", x: "85%", y: "15%", size: "text-xl", delay: 2 },
    { text: "[]", x: "75%", y: "75%", size: "text-lg", delay: 1 },
    { text: "=>", x: "15%", y: "80%", size: "text-2xl", delay: 3 },
    { text: "const", x: "50%", y: "10%", size: "text-xs", delay: 4 },
    { text: "import", x: "90%", y: "55%", size: "text-xs", delay: 2.5 },
    { text: "async", x: "5%", y: "50%", size: "text-xs", delay: 1.5 },
  ];

  return (
    <section className="relative py-24 bg-transparent overflow-hidden border-t border-purple-950/20" id="services-section">
      {/* Soft background glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none -z-10" />

      {/* Floating coding symbols */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10 opacity-35">
        {floatingGlyphs.map((glyph, idx) => (
          <motion.div
            key={idx}
            style={{ left: glyph.x, top: glyph.y }}
            className={`absolute font-mono font-bold text-secondary/35 ${glyph.size}`}
            animate={{
              y: [0, -20, 0],
              opacity: [0.15, 0.4, 0.15],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 7 + idx * 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: glyph.delay
            }}
          >
            {glyph.text}
          </motion.div>
        ))}
      </div>

      <Container size="xl" className="relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 gap-4">
          <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Software Solutions that <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Move You Forward</span>
          </h2>
          <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed max-w-2xl">
            We engineer high-performance systems, intuitive interfaces, and scalable SaaS platforms to accelerate your operational velocity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.id}
                hoverable
                className="group relative bg-background/60 border border-purple-900/20 p-6 rounded-3xl transition-all duration-300 hover:border-primary/50 flex flex-col justify-between min-h-[265px]"
              >
                {/* Glow layer behind hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-5 text-left">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/40 border border-purple-900/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-purple-400/50 tracking-wider">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-purple-205/70 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

      </Container>
    </section>
  );
};
