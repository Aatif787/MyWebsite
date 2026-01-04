"use client";

import { motion } from "framer-motion";
import { Cpu, Gauge } from "lucide-react";

export function DeveloperBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 0.95, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="fixed right-6 top-24 z-40 w-72 rounded-2xl border border-cyan-300/30 bg-black/70 p-4 text-sm text-cyan-100 shadow-lg shadow-cyan-500/30 backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Cpu className="h-4 w-4 text-cyan-300" />
          <span className="text-xs uppercase tracking-[0.2em] text-cyan-200">
            Developer mode
          </span>
        </div>
        <span className="rounded-full bg-cyan-500/20 px-2 py-1 text-[10px] font-semibold text-cyan-100">
          Active
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3 text-xs text-slate-200">
        <Gauge className="h-4 w-4 text-cyan-300" />
        <div className="flex flex-col">
          <span>Performance tracing enabled</span>
          <span className="text-[11px] text-slate-400">
            Motion budget: 60fps · Accessibility overlay on
          </span>
        </div>
      </div>
    </motion.div>
  );
}

