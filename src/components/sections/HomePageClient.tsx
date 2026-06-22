"use client";

import { Navbar } from "@/components/ui/Navbar";
import { navbarLinks } from "@/app/navbarLinks";
import { useToast } from "@/components/ui/Toast";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Solutions } from "@/components/sections/Solutions";
import { Subscription } from "@/components/sections/Subscription";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export function HomePageClient() {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background text-purple-100 flex flex-col font-sans selection:bg-primary selection:text-white relative overflow-hidden">
      {/* Top Navbar */}
      <Navbar
        brandName="Rovixs"
        links={navbarLinks}
        contactLabel="Contact Us"
        onContactClick={() => {
          const element = document.getElementById("footer-email");
          if (element) {
            element.focus();
            element.scrollIntoView({ behavior: "smooth" });
          } else {
            toast("Please scroll to the footer to subscribe or submit an inquiry!", { title: "Contact Us" });
          }
        }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <Services />

      {/* 3. Solutions Section */}
      <Solutions />

      {/* 4. Why Choose Section */}
      <WhyChoose />

      {/* 5. Development Process Section */}
      <Process />

      {/* 6. Subscription Preview Section */}
      <Subscription />

      {/* 7. Core Tech Stack Section */}
      <TechStack />

      {/* 8. Featured Portfolio Section */}
      <Portfolio />

      {/* 9. Testimonials Section */}
      <Testimonials />

      {/* 10. FAQ Section */}
      <FAQ />

      {/* 11. CTA Banner Section */}
      <CTA />

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}