"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export interface MegaMenuSubCategory {
  title: string;
  id: string;
}

export interface MegaMenuItem {
  name: string;
  href?: string;
  description?: string;
}

export interface MegaMenuSection {
  title: string;
  gridCols?: number; // 1 to 4 columns inside section
  items: MegaMenuItem[];
  actionLink?: {
    label: string;
    href: string;
  };
}

export interface MegaMenuData {
  type: "tabs" | "grid";
  title: string;
  description: string;
  // For Mode A (tabs)
  subCategories?: MegaMenuSubCategory[];
  items?: Record<string, MegaMenuItem[]>; // matches subCategory.id
  // For Mode B (grid)
  featured?: {
    title: string;
    description: string;
    linkLabel: string;
    href: string;
  };
  sections?: MegaMenuSection[];
}

export interface NavbarLink {
  label: string;
  href?: string;
  megaMenu?: MegaMenuData;
}

export interface NavbarProps {
  brandName?: string;
  brandLogo?: React.ReactNode;
  links: NavbarLink[];
  onContactClick?: () => void;
  contactLabel?: string;
}

export const Navbar = React.forwardRef<HTMLHeadElement, NavbarProps>(
  (
    {
      brandName = "Rovixs",
      brandLogo,
      links,
      onContactClick,
      contactLabel = "Contact Us",
    },
    ref
  ) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const [activeSubCategory, setActiveSubCategory] = useState<string>("");
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Get active mega menu schema details
    const activeLinkData = links.find((link) => link.label === activeMegaMenu);

    // Close mega menu on click outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setActiveMegaMenu(null);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }, []);

    // Prevent background scroll when mobile menu is open
    useEffect(() => {
      if (mobileOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [mobileOpen]);

    // Handle mouse enter nav button
    const handleMouseEnterLink = (label: string, defaultSubCatId: string) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setActiveMegaMenu(label);
      setActiveSubCategory(defaultSubCatId);
    };

    // Handle mouse leave nav button
    const handleMouseLeaveLink = () => {
      timeoutRef.current = setTimeout(() => {
        setActiveMegaMenu(null);
      }, 150); // Small delay to allow moving mouse to the dropdown
    };

    // Keep menu open when mouse moves inside dropdown panel
    const handleMouseEnterDropdown = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    // Close menu when mouse leaves dropdown panel
    const handleMouseLeaveDropdown = () => {
      timeoutRef.current = setTimeout(() => {
        setActiveMegaMenu(null);
      }, 150);
    };

    return (
      <header
        ref={ref}
        className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-900/80 selection:bg-blue-600 selection:text-white relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            {brandLogo ? (
              brandLogo
            ) : (
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-lg tracking-wider">R</span>
              </div>
            )}
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
              {brandName}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav ref={menuRef} className="hidden md:flex items-center gap-1.5 relative">
            {links.map((link) => {
              const isMegaActive = activeMegaMenu === link.label;
              const defaultSubCatId = link.megaMenu?.subCategories?.[0]?.id || "";

              if (link.megaMenu) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleMouseEnterLink(link.label, defaultSubCatId)}
                    onMouseLeave={handleMouseLeaveLink}
                  >
                    <button
                      className={`h-10 px-4 rounded-xl inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-300 hover:bg-slate-900/60 
                        ${
                          isMegaActive
                            ? "bg-slate-900 text-blue-400 border-b border-blue-500/30"
                            : "text-slate-300 hover:text-white"
                        }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 opacity-70 transition-transform duration-300 ${
                          isMegaActive ? "rotate-180 text-blue-400" : ""
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href || "#"}
                  className="h-10 px-4 rounded-xl inline-flex items-center text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900/60 transition-all duration-300"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Side CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="glass"
              onClick={onContactClick}
              rightIcon={<ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
              className="group h-11"
            >
              {contactLabel}
            </Button>
          </div>

          {/* Hamburger Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-slate-800/80 hover:bg-slate-850 hover:border-slate-700/80 transition-all duration-200 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Full-width Desktop Mega Menu Dropdown */}
        {activeLinkData && activeLinkData.megaMenu && (
          <div
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
            className="absolute top-20 left-0 right-0 w-full bg-slate-950/95 border-b border-slate-900/80 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out animate-in fade-in slide-in-from-top-2.5 z-50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">

              {/* Mode A: Tabs-based menu (Services) */}
              {activeLinkData.megaMenu.type === "tabs" && (
                <>
                  {/* Left area: Sidebar categories */}
                  <div className="w-full md:w-1/4 border-r border-slate-900/80 pr-6 flex flex-col gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-1">
                        {activeLinkData.megaMenu.title}
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {activeLinkData.megaMenu.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1">
                      {(activeLinkData.megaMenu.subCategories || []).map((sub) => {
                        const isSubActive = activeSubCategory === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => setActiveSubCategory(sub.id)}
                            className={`w-full text-left py-2 px-3 rounded-lg text-xs font-semibold tracking-wide uppercase transition-all duration-300
                              ${
                                isSubActive
                                  ? "bg-blue-600/10 text-blue-400 border-l-2 border-blue-500"
                                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                              }`}
                          >
                            {sub.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right area: Grid list of active category items */}
                  <div className="w-full md:w-3/4 flex flex-col gap-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Top {activeSubCategory ? activeLinkData.megaMenu.subCategories?.find(s => s.id === activeSubCategory)?.title : "Services"}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3.5 gap-x-6">
                      {(activeLinkData.megaMenu.items?.[activeSubCategory] || []).map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href || "#"}
                          className="group/item flex flex-col gap-1 p-2 rounded-xl hover:bg-slate-900/40 border border-transparent hover:border-slate-800/40 transition-all duration-300"
                        >
                          <span className="text-xs font-bold text-slate-200 group-hover/item:text-blue-400 transition-colors duration-300 flex items-center justify-between">
                            {item.name}
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-blue-400" />
                          </span>
                          {item.description && (
                            <span className="text-[10px] text-slate-500 group-hover/item:text-slate-400 transition-colors duration-300 leading-normal">
                              {item.description}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Mode B: Multi-section Columns with Promo Card (Work, Company, Resources) */}
              {activeLinkData.megaMenu.type === "grid" && (
                <>
                  {/* Left area: Title, Description, and Promo Box */}
                  <div className="w-full md:w-[28%] border-r border-slate-900/80 pr-6 flex flex-col gap-5 justify-between">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-bold text-white flex items-center gap-1">
                        {activeLinkData.megaMenu.title}
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {activeLinkData.megaMenu.description}
                      </p>
                    </div>

                    {activeLinkData.megaMenu.featured && (
                      <div className="mt-auto border-t border-slate-900/80 pt-5 flex flex-col gap-1.5">
                        <span className="text-[9px] uppercase font-extrabold text-slate-500 tracking-wider">
                          {activeLinkData.megaMenu.featured.title}
                        </span>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          {activeLinkData.megaMenu.featured.description}
                        </p>
                        <a
                          href={activeLinkData.megaMenu.featured.href}
                          className="text-[10px] font-bold text-slate-200 underline hover:text-white transition-colors mt-0.5 inline-block w-fit"
                        >
                          {activeLinkData.megaMenu.featured.linkLabel}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Right area: Dynamic section columns */}
                  <div className="w-full md:w-[72%] flex flex-col md:flex-row gap-8 justify-between">
                    {(activeLinkData.megaMenu.sections || []).map((sec, secIdx) => (
                      <div
                        key={secIdx}
                        className={`flex-1 flex flex-col gap-4 min-w-[150px] ${
                          sec.gridCols === 2 ? "md:flex-[2]" : ""
                        }`}
                      >
                        <div className="flex items-center gap-1.5 border-b border-slate-900/60 pb-2">
                          <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[10px] font-extrabold text-slate-400 tracking-widest uppercase">
                            {sec.title}
                          </span>
                        </div>

                        <div
                          className={`grid gap-x-5 gap-y-2.5 ${
                            {
                              1: "grid-cols-1",
                              2: "grid-cols-2",
                              3: "grid-cols-3",
                              4: "grid-cols-4",
                            }[sec.gridCols || 1] || "grid-cols-1"
                          }`}
                        >
                          {sec.items.map((item, itemIdx) => (
                            <a
                              key={itemIdx}
                              href={item.href || "#"}
                              className="group/secitem flex flex-col gap-0.5"
                            >
                              <span className="text-xs font-bold text-slate-300 hover:text-blue-400 transition-colors duration-205 flex items-center justify-between">
                                {item.name}
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1.5 group-hover/secitem:opacity-100 group-hover/secitem:translate-x-0 transition-all duration-200 text-blue-400" />
                              </span>
                              {item.description && (
                                <span className="text-[9px] text-slate-500 leading-tight">
                                  {item.description}
                                </span>
                              )}
                            </a>
                          ))}
                        </div>

                        {sec.actionLink && (
                          <a
                            href={sec.actionLink.href}
                            className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors mt-auto pt-2 flex items-center gap-1 group/act"
                          >
                            {sec.actionLink.label}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>
        )}

        {/* Mobile Slide-out Drawer Menu */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Overlay background */}
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Drawer Panel */}
          <div
            className={`absolute top-0 right-0 h-full w-[85vw] max-w-sm bg-slate-950 border-l border-slate-900 shadow-2xl flex flex-col p-6 transition-transform duration-300 ease-out transform ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-900">
              <a href="#" className="flex items-center gap-2">
                {brandLogo ? (
                  brandLogo
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">R</span>
                  </div>
                )}
                <span className="font-bold text-md text-white">{brandName}</span>
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Links and Collapsible menus */}
            <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-4">
              {links.map((link) => {
                if (link.megaMenu) {
                  return (
                    <MobileMenuAccordion key={link.label} link={link} />
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href || "#"}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-2 text-sm font-semibold text-slate-300 hover:text-white border-b border-transparent hover:border-slate-900"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                  </a>
                );
              })}
            </div>

            {/* Drawer Footer CTA */}
            <div className="pt-6 border-t border-slate-900 flex flex-col gap-4">
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
        </div>
      </header>
    );
  }
);

Navbar.displayName = "Navbar";

// Helper component for mobile nav accordion
const MobileMenuAccordion = ({ link }: { link: NavbarLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubCat, setSelectedSubCat] = useState("");

  useEffect(() => {
    if (link.megaMenu?.type === "tabs" && link.megaMenu.subCategories?.[0]) {
      setSelectedSubCat(link.megaMenu.subCategories[0].id);
    }
  }, [link]);

  if (!link.megaMenu) return null;

  return (
    <div className="flex flex-col border-b border-slate-900/60 pb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-350 hover:text-white text-left"
      >
        {link.label}
        <ChevronDown
          className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-400" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="flex flex-col gap-4 pl-3 mt-2 animate-in fade-in duration-200">
          
          {/* Tabs Mode Mobile Render */}
          {link.megaMenu.type === "tabs" && (
            <>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {(link.megaMenu.subCategories || []).map((sub) => {
                  const isSel = selectedSubCat === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => setSelectedSubCat(sub.id)}
                      className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase whitespace-nowrap tracking-wide transition-colors
                        ${
                          isSel
                            ? "bg-blue-600 text-white"
                            : "bg-slate-900 text-slate-400 hover:text-slate-200"
                        }`}
                    >
                      {sub.title}
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2">
                {(link.megaMenu.items?.[selectedSubCat] || []).map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href || "#"}
                    className="group flex flex-col p-2 rounded-lg bg-slate-950 border border-slate-900/50 hover:border-slate-800 transition-all duration-300"
                  >
                    <span className="text-xs font-bold text-slate-300 group-hover:text-blue-400 flex items-center justify-between">
                      {item.name}
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                    </span>
                    {item.description && (
                      <span className="text-[10px] text-slate-500 mt-0.5">
                        {item.description}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </>
          )}

          {/* Grid Mode Mobile Render */}
          {link.megaMenu.type === "grid" && (
            <div className="flex flex-col gap-5">
              {(link.megaMenu.sections || []).map((sec, secIdx) => (
                <div key={secIdx} className="flex flex-col gap-2">
                  <span className="text-[9px] uppercase font-bold text-slate-455 tracking-wider">
                    {sec.title}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {sec.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href || "#"}
                        className="text-xs text-slate-300 hover:text-white py-1 flex items-center justify-between border-b border-slate-900/40"
                      >
                        {item.name}
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              {link.megaMenu.featured && (
                <div className="bg-slate-900/40 border border-slate-900 p-3.5 rounded-xl flex flex-col gap-1">
                  <span className="text-[8px] uppercase font-extrabold text-slate-505 tracking-wider">
                    Featured: {link.megaMenu.featured.title}
                  </span>
                  <p className="text-[10px] text-slate-400">
                    {link.megaMenu.featured.description}
                  </p>
                  <a
                    href={link.megaMenu.featured.href}
                    className="text-[10px] font-bold text-blue-400 underline mt-1"
                  >
                    {link.megaMenu.featured.linkLabel}
                  </a>
                </div>
              )}
            </div>
          )}

        </div>
      )}
    </div>
  );
};
