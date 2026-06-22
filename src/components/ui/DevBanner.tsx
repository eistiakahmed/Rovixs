"use client";

import React, { useState } from "react";
import { X, Construction } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const DevBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-[60] overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-amber-500/90 via-orange-500/90 to-amber-500/90 backdrop-blur-sm border-b border-amber-400/30 px-4 py-2.5 flex items-center justify-center gap-3">
            {/* Subtle animated shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none" />

            <Construction className="w-4 h-4 text-white flex-shrink-0" />
            <p className="text-white text-xs sm:text-sm font-semibold tracking-wide text-center">
              🚧 This website is currently under development. Expected release within{" "}
              <span className="font-extrabold underline underline-offset-2">two months</span>.
            </p>

            <button
              onClick={() => setDismissed(true)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Dismiss banner"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
