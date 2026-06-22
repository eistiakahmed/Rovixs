"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { useToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export const Footer: React.FC = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast("Please enter a valid email address.", { type: "error", title: "Subscription Error" });
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast("You have successfully subscribed to our newsletter!", {
        type: "success",
        title: "Subscribed Successfully",
      });
    }, 1000);
  };

  return (
    <footer className="relative bg-[#010410] border-t border-purple-950/40 py-16 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/5 blur-[100px] pointer-events-none -z-10" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-purple-950/30">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-5 text-left">
            <a href="#" className="flex items-center gap-2.5 w-max group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-base">R</span>
              </div>
              <span className="font-bold text-lg text-white group-hover:text-primary transition-colors">
                Rovixs
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We design and engineer custom software solutions, high-performance database engines, responsive cloud portals, and premium UI design systems. Built to elevate your operations.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-transparent border border-primary/30 flex items-center justify-center text-primary/80 hover:text-primary hover:border-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-transparent border border-primary/30 flex items-center justify-center text-primary/80 hover:text-primary hover:border-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-transparent border border-primary/30 flex items-center justify-center text-primary/80 hover:text-primary hover:border-primary hover:bg-primary/10 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services Directory (2 cols) */}
          <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-1 h-3 rounded-full bg-primary" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Services</h3>
            </div>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/services/custom-software" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 block w-fit">Custom Software</a>
              </li>
              <li>
                <a href="/services/web-applications" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 block w-fit">Web App Dev</a>
              </li>
              <li>
                <a href="/services/saas-platforms" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 block w-fit">SaaS Platforms</a>
              </li>
              <li>
                <a href="/services/database-solutions" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 block w-fit">Databases</a>
              </li>
              <li>
                <a href="/services/user-interfaces" className="hover:text-white hover:translate-x-1.5 transition-all duration-300 block w-fit">UI/UX Design</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Directory (3 cols) */}
          <div className="sm:col-span-1 lg:col-span-3 flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-1 h-3 rounded-full bg-primary" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Contact</h3>
            </div>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@rovixs.com" className="hover:text-white transition-colors break-all">hello@rovixs.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Silicon Tech Office, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Box (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-1 h-3 rounded-full bg-primary" />
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Newsletter</h3>
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Stay updated with articles on SaaS structures, DevOps, and cloud architectures.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
              <div className="flex items-center p-1 bg-background/55 border border-purple-900/35 focus-within:border-primary/55 rounded-xl transition-all shadow-md">
                <input
                  type="email"
                  required
                  id="footer-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="w-full bg-transparent border-0 px-3 py-2 text-xs text-white placeholder-purple-600/70 focus:outline-none focus:ring-0"
                />
                <Button
                  type="submit"
                  variant="animated"
                  disabled={isSubmitting}
                  className="py-2 px-3 h-auto text-xs font-bold flex items-center justify-center gap-1 flex-shrink-0 rounded-lg shadow-sm"
                >
                  {isSubmitting ? "..." : <Send className="w-3.5 h-3.5" />}
                </Button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar copyrights */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-8 text-[11px] font-bold text-slate-500 uppercase tracking-widest gap-4">
          <span>&copy; 2026 ROVIXS. All rights reserved.</span>
          <span>Crafted for Solo Brand Engineering</span>
        </div>
      </Container>
    </footer>
  );
};
