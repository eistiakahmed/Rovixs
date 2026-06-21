"use client";

import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Search, CornerDownLeft, Command, FileText, Settings, User, Layers } from "lucide-react";
import { useRouter } from "next/navigation";
import { useToast } from "./Toast";

export interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface CommandItem {
  id: string;
  category: "Navigation" | "System Actions" | "Team Members";
  label: string;
  action: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open menu (triggered by parent state binding)
          onClose(); // Reset state
        }
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen, onClose]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setActiveIndex(0);
      setSearch("");
    }
  }, [isOpen]);

  const commandsList: CommandItem[] = [
    { id: "nav-dash", category: "Navigation", label: "Go to SaaS Dashboard", action: () => router.push("/dashboard") },
    { id: "nav-comp", category: "Navigation", label: "Go to Components Sandbox", action: () => router.push("/components") },
    { id: "nav-home", category: "Navigation", label: "Go to Home Landing", action: () => router.push("/") },
    { id: "sys-purge", category: "System Actions", label: "Purge Production API Key Cluster", action: () => toast("API Purged in node-02 cluster", { type: "error", title: "Purged Cluster" }) },
    { id: "sys-export", category: "System Actions", label: "Compile & Export Billing Statement PDF", action: () => toast("Initiating document compilation...", { type: "info", title: "Billing PDF" }) },
    { id: "sys-theme", category: "System Actions", label: "Force System Hardware Acceleration", action: () => toast("Hardware acceleration toggled on", { type: "success", title: "Config Set" }) },
    { id: "usr-meraj", category: "Team Members", label: "Eistiak Meraj (Product Architect)", action: () => toast("Opening active stream for Eistiak", { type: "info" }) },
    { id: "usr-ahmed", category: "Team Members", label: "Meraj Ahmed (Lead Frontend)", action: () => toast("Opening active stream for Meraj", { type: "info" }) },
  ];

  const filteredCommands = commandsList.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  // Keyboard navigation inside menu list
  useEffect(() => {
    if (!isOpen || filteredCommands.length === 0) return;

    const handleListKeys = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter") {
        e.preventDefault();
        filteredCommands[activeIndex].action();
        onClose();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleListKeys);
    return () => window.removeEventListener("keydown", handleListKeys);
  }, [isOpen, activeIndex, filteredCommands, onClose]);

  if (!isOpen || !mounted) return null;

  // Group commands by category for segmented visual look
  const categories: ("Navigation" | "System Actions" | "Team Members")[] = ["Navigation", "System Actions", "Team Members"];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Navigation":
        return <Layers className="w-3.5 h-3.5 text-blue-400" />;
      case "System Actions":
        return <Settings className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <User className="w-3.5 h-3.5 text-green-400" />;
    }
  };

  // Find overall flat index of a given item to check if active
  let absoluteIndexOffset = 0;

  const commandPortalElement = (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[12vh] selection:bg-blue-600 selection:text-white" role="dialog" aria-modal="true">
      {/* Backdrop glass blur overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-fade-in" />

      {/* Main Command Menu Box Panel */}
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col backdrop-blur-xl overflow-hidden animate-zoom-in max-h-[60vh]">
        {/* Search header container */}
        <div className="flex items-center gap-3.5 px-4.5 py-4 border-b border-slate-850 bg-slate-950/20">
          <Search className="w-4.5 h-4.5 text-slate-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setActiveIndex(0);
            }}
            className="flex-1 bg-transparent text-sm text-slate-200 placeholder:text-slate-655 focus:outline-none"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-1 rounded bg-slate-950 border border-slate-850 text-[10px] text-slate-500 font-bold uppercase select-none">
            ESC
          </kbd>
        </div>

        {/* Scrollable list items panel */}
        <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {filteredCommands.length > 0 ? (
            categories.map((cat) => {
              const catItems = filteredCommands.filter((c) => c.category === cat);
              if (catItems.length === 0) return null;

              const heading = (
                <div key={cat} className="flex flex-col gap-1.5">
                  {/* Category Title Heading */}
                  <span className="text-[9px] font-bold text-slate-550 uppercase tracking-widest px-3 pt-2">
                    {cat}
                  </span>
                  
                  <div className="flex flex-col gap-0.5">
                    {catItems.map((cmd) => {
                      const currentAbsoluteIndex = absoluteIndexOffset++;
                      const isItemActive = currentAbsoluteIndex === activeIndex;

                      return (
                        <button
                          key={cmd.id}
                          type="button"
                          onClick={() => {
                            cmd.action();
                            onClose();
                          }}
                          onMouseEnter={() => setActiveIndex(currentAbsoluteIndex)}
                          className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between transition-all duration-150 cursor-pointer
                            ${
                              isItemActive
                                ? "bg-slate-800/80 text-white"
                                : "text-slate-400 hover:text-slate-200"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            {getCategoryIcon(cat)}
                            <span className="text-xs font-semibold">{cmd.label}</span>
                          </div>
                          
                          {isItemActive && (
                            <div className="flex items-center gap-1 text-[9px] text-slate-500 font-semibold uppercase">
                              <span>Select</span>
                              <CornerDownLeft className="w-2.5 h-2.5" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
              return heading;
            })
          ) : (
            <div className="flex flex-col items-center justify-center py-10 gap-2">
              <Command className="w-8 h-8 text-slate-700 animate-pulse" />
              <span className="text-xs text-slate-550 font-bold">No results found matching query</span>
            </div>
          )}
        </div>

        {/* Footer shortcuts helper panel */}
        <div className="flex items-center justify-between px-4.5 py-3 border-t border-slate-850 bg-slate-950/20 text-[10px] text-slate-500 font-semibold uppercase select-none flex-shrink-0">
          <div className="flex items-center gap-2">
            <span>↑↓ to navigate</span>
            <span className="w-1 h-1 rounded-full bg-slate-800" />
            <span>Enter to select</span>
          </div>
          <div className="flex items-center gap-1 font-bold">
            <Command className="w-3 h-3 text-slate-550" />
            <span>+ K to toggle</span>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(commandPortalElement, document.body);
};
