"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight, Menu, LogOut, Settings, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export interface SidebarSubItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
  active?: boolean;
  badge?: string;
  badgeVariant?: "primary" | "secondary" | "success" | "warning" | "danger" | "outline" | "glass";
  subItems?: SidebarSubItem[];
}

export interface SidebarCategory {
  title?: string;
  items: SidebarItem[];
}

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: SidebarCategory[];
  brandLogo?: React.ReactNode;
  brandName?: string;
  brandSub?: string;
  defaultCollapsed?: boolean;
  onCollapseChange?: (collapsed: boolean) => void;
  showLogout?: boolean;
  onLogoutClick?: () => void;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      categories,
      brandLogo,
      brandName = "Rovixs",
      brandSub = "Enterprise Admin",
      defaultCollapsed = false,
      onCollapseChange,
      showLogout = true,
      onLogoutClick,
      className = "",
      ...props
    },
    ref
  ) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

    const handleToggleCollapse = () => {
      const nextState = !isCollapsed;
      setIsCollapsed(nextState);
      if (onCollapseChange) onCollapseChange(nextState);
    };

    const handleToggleSubMenu = (label: string) => {
      if (isCollapsed) {
        // Expand sidebar first if click happens when collapsed
        setIsCollapsed(false);
        if (onCollapseChange) onCollapseChange(false);
        setOpenMenus((prev) => ({ ...prev, [label]: true }));
      } else {
        setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
      }
    };

    return (
      <aside
        ref={ref}
        className={`bg-slate-950 border border-slate-900 shadow-xl flex flex-col transition-all duration-300 ease-in-out relative text-slate-300 select-none
          ${isCollapsed ? "w-20" : "w-64"} ${className}`}
        {...props}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center px-4 border-b border-slate-900/80 gap-3 overflow-hidden whitespace-nowrap">
          {brandLogo ? (
            <div className="flex-shrink-0">{brandLogo}</div>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/10 flex-shrink-0">
              <span className="text-white font-bold text-sm tracking-wider">R</span>
            </div>
          )}
          {!isCollapsed && (
            <div className="flex flex-col gap-0.5 animate-in fade-in duration-300">
              <span className="font-bold text-xs text-white leading-tight">{brandName}</span>
              <span className="text-[10px] text-slate-500 leading-tight">{brandSub}</span>
            </div>
          )}
        </div>

        {/* Sidebar Navigation */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 flex flex-col gap-5 scrollbar-thin scrollbar-thumb-slate-900 scrollbar-track-transparent">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="flex flex-col gap-1">
              {/* Category Title */}
              {cat.title && (
                <div className="h-5 px-3 flex items-center mb-1">
                  {isCollapsed ? (
                    <div className="w-full border-t border-slate-900" />
                  ) : (
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500 animate-in fade-in duration-300">
                      {cat.title}
                    </span>
                  )}
                </div>
              )}

              {/* Items List */}
              <div className="flex flex-col gap-0.5">
                {cat.items.map((item, itemIdx) => {
                  const hasSub = item.subItems && item.subItems.length > 0;
                  const isSubOpen = !!openMenus[item.label] && !isCollapsed;
                  const isItemActive = item.active || (hasSub && item.subItems?.some(s => s.active));

                  return (
                    <div key={itemIdx} className="flex flex-col">
                      {/* Nav Item button */}
                      {hasSub ? (
                        <button
                          onClick={() => handleToggleSubMenu(item.label)}
                          className={`w-full h-11 px-3 rounded-xl flex items-center gap-3 transition-all duration-200 group/item relative
                            ${
                              isItemActive
                                ? "bg-slate-900/60 text-white font-medium"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                            }`}
                        >
                          {/* Active highlight side bar */}
                          {isItemActive && (
                            <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r bg-blue-500" />
                          )}
                          <div className={`flex-shrink-0 transition-colors duration-200 ${isItemActive ? "text-blue-400" : "text-slate-400 group-hover/item:text-slate-200"}`}>
                            {item.icon}
                          </div>
                          {!isCollapsed && (
                            <>
                              <span className="text-xs text-left flex-1 truncate transition-opacity duration-300">
                                {item.label}
                              </span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                                  isSubOpen ? "rotate-180" : ""
                                }`}
                              />
                            </>
                          )}
                        </button>
                      ) : (
                        <a
                          href={item.href || "#"}
                          className={`w-full h-11 px-3 rounded-xl flex items-center gap-3 transition-all duration-200 group/item relative
                            ${
                              isItemActive
                                ? "bg-blue-600/10 text-blue-400 font-medium"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40"
                            }`}
                        >
                          {/* Active highlight side bar */}
                          {isItemActive && (
                            <span className="absolute left-0 top-3 bottom-3 w-1 rounded-r bg-blue-500" />
                          )}
                          <div className={`flex-shrink-0 transition-colors duration-200 ${isItemActive ? "text-blue-400" : "text-slate-400 group-hover/item:text-slate-200"}`}>
                            {item.icon}
                          </div>
                          {!isCollapsed && (
                            <>
                              <span className="text-xs text-left flex-1 truncate transition-opacity duration-300">
                                {item.label}
                              </span>
                              {item.badge && (
                                <Badge
                                  variant={item.badgeVariant || "primary"}
                                  size="sm"
                                  className="h-4.5 px-1.5 text-[8px] rounded font-bold uppercase leading-none"
                                >
                                  {item.badge}
                                </Badge>
                              )}
                            </>
                          )}
                        </a>
                      )}

                      {/* Nested Subitems Accordion */}
                      {hasSub && isSubOpen && (
                        <div className="flex flex-col pl-9 pr-2 py-1 gap-1 border-l border-slate-900 ml-5 mt-0.5 animate-in fade-in duration-200">
                          {item.subItems?.map((sub, subIdx) => (
                            <a
                              key={subIdx}
                              href={sub.href || "#"}
                              className={`h-8 px-3 rounded-lg flex items-center text-[11px] font-medium transition-colors duration-200
                                ${
                                  sub.active
                                    ? "text-blue-400 bg-slate-900/30"
                                    : "text-slate-500 hover:text-slate-300"
                                }`}
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-900/80 flex flex-col gap-1 bg-slate-950/40">
          {showLogout && (
            <button
              onClick={onLogoutClick}
              className="w-full h-11 px-3 rounded-xl flex items-center gap-3 text-slate-400 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 group/btn"
            >
              <LogOut className="w-4 h-4 flex-shrink-0 group-hover/btn:translate-x-0.5 transition-transform" />
              {!isCollapsed && <span className="text-xs text-left truncate">Sign Out</span>}
            </button>
          )}

          {/* Collapse/Expand Toggle trigger */}
          <button
            onClick={handleToggleCollapse}
            className="w-full h-11 px-3 rounded-xl flex items-center gap-3 text-slate-500 hover:text-slate-300 hover:bg-slate-900/30 transition-all duration-200 group/btn"
          >
            {isCollapsed ? (
              <PanelLeftOpen className="w-4 h-4 flex-shrink-0" />
            ) : (
              <PanelLeftClose className="w-4 h-4 flex-shrink-0" />
            )}
            {!isCollapsed && <span className="text-xs text-left truncate">Collapse Menu</span>}
          </button>
        </div>
      </aside>
    );
  }
);

Sidebar.displayName = "Sidebar";
