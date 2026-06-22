"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface NavbarLink {
  label: string;
  href?: string;
  megaMenu?: any;
}

export interface NavbarProps {
  brandName?: string;
  brandLogo?: React.ReactNode;
  links: NavbarLink[];
  onContactClick?: () => void;
  contactLabel?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName = "Rovixs",
  brandLogo,
  links,
  onContactClick,
  contactLabel = "Contact Us",
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl border z-50 transition-all duration-300 rounded-2xl ${
        scrolled
          ? "bg-background/90 border-purple-900/30 shadow-lg shadow-purple-950/20 backdrop-blur-md py-1"
          : "bg-background/70 border-purple-900/20 shadow-md shadow-purple-950/10 backdrop-blur-md py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {brandLogo ? (
            brandLogo
          ) : (
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-lg tracking-wider">R</span>
            </div>
          )}
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors duration-300">
            {brandName}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 relative">
          {links.map((link) => {
            const hasSubmenu = !!link.megaMenu;
            const isOpen = activeDropdown === link.label;

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => hasSubmenu && setActiveDropdown(link.label)}
                onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
              >
                {hasSubmenu ? (
                  <>
                    <button
                      className={`h-10 px-4 rounded-xl inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:bg-purple-950/40
                        ${isOpen ? "text-primary bg-purple-950/40" : "text-purple-200/80 hover:text-white"}`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-primary" : "text-purple-400/60"
                        }`}
                      />
                    </button>

                    {/* Simple Dropdown for dark theme */}
                    {isOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 border border-purple-900/40 rounded-2xl shadow-2xl p-4 backdrop-blur-md animate-slide-down flex flex-col gap-1">
                        <span className="text-[10px] font-extrabold text-purple-400/80 tracking-wider uppercase mb-2 block border-b border-purple-950/50 pb-1">
                          Explore {link.label}
                        </span>
                        
                        {link.label === "Services" && (
                          <div className="flex flex-col gap-1.5">
                            <Link href="/services/custom-software" className="text-xs font-semibold text-purple-200 hover:text-primary py-1 px-2 rounded-lg hover:bg-purple-950/40 transition-colors">Custom Software</Link>
                            <Link href="/services/saas-platforms" className="text-xs font-semibold text-purple-200 hover:text-primary py-1 px-2 rounded-lg hover:bg-purple-950/40 transition-colors">SaaS Platforms</Link>
                            <Link href="/services/web-applications" className="text-xs font-semibold text-purple-200 hover:text-primary py-1 px-2 rounded-lg hover:bg-purple-950/40 transition-colors">Web Applications</Link>
                            <Link href="/services/mobile-apps" className="text-xs font-semibold text-purple-200 hover:text-primary py-1 px-2 rounded-lg hover:bg-purple-950/40 transition-colors">Mobile App Development</Link>
                          </div>
                        )}
                        {link.label !== "Services" && (
                          <div className="flex flex-col gap-1">
                            <span className="text-xs text-purple-400/60 p-2 italic">Detailed case studies and pages are linked inside the primary service cards.</span>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className="h-10 px-4 rounded-xl inline-flex items-center text-sm font-medium text-purple-200/80 hover:text-white hover:bg-purple-950/40 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="animated"
            onClick={onContactClick}
            rightIcon={<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
            className="group h-11"
          >
            {contactLabel}
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-purple-950/40 border border-purple-900/40 text-purple-200 hover:bg-purple-900/40 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-40 md:hidden bg-black/60 backdrop-blur-sm">
          <div className="absolute top-24 left-4 right-4 bg-background border border-purple-900/40 rounded-3xl p-6 shadow-2xl flex flex-col gap-6 animate-slide-down">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href || "/"}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-4 text-sm font-semibold text-purple-200 hover:text-primary hover:bg-purple-950/40 rounded-xl transition-all text-left"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Button
              variant="primary"
              onClick={() => {
                setMobileOpen(false);
                if (onContactClick) onContactClick();
              }}
              className="w-full justify-center h-12"
            >
              {contactLabel}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
