"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="card-highlight glass-panel relative space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-500/20"
    >
      <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
          Contact form
        </p>
        <h2 className="text-2xl font-semibold text-white">
          Tell me about the system.
        </h2>
      </div>
      <label className="block space-y-2 text-sm text-slate-200">
        Project objective
        <input
          type="text"
          placeholder="Ship a voice-native agent for support..."
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70 focus:bg-black/30"
        />
      </label>
      <label className="block space-y-2 text-sm text-slate-200">
        Timeline & constraints
        <input
          type="text"
          placeholder="6 weeks, must pass SOC2, p95 <300ms..."
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70 focus:bg-black/30"
        />
      </label>
      <label className="block space-y-2 text-sm text-slate-200">
        Contact
        <input
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70 focus:bg-black/30"
        />
      </label>
      <label className="block space-y-2 text-sm text-slate-200">
        Context
        <textarea
          rows={4}
          placeholder="Current architecture, risks, and success metrics..."
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/70 focus:bg-black/30"
        />
      </label>
      <motion.button
        whileHover={{ scale: 1.01, y: -2 }}
        whileTap={{ scale: 0.99 }}
        className="neon-border inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/30"
      >
        Hire me now
        <PhoneCall className="h-4 w-4" />
      </motion.button>
      <p className="text-xs text-slate-400">
        Prefer fast lane? Email{" "}
        <Link
          href="mailto:hire@helal.studio"
          className="text-cyan-200 underline"
        >
          hire@helal.studio
        </Link>{" "}
        with context. I’ll respond with a plan and architecture sketch.
      </p>
    </motion.form>
  );
}

