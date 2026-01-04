"use client";

import { motion, useAnimationControls, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkle, Waves } from "lucide-react";
import { PerformancePanel } from "./performance-panel";
import { ArchitectureCanvas } from "./architecture-canvas";

const titles = [
  "Software Engineer",
  "Full-Stack Architect",
  "AI Systems Builder",
  "Human × Machine Interface Designer",
];

export function HomeHero() {
  const [index, setIndex] = useState(0);
  const [stats, setStats] = useState([
    { label: "Projects shipped", value: 68, detail: "production" },
    { label: "Technologies mastered", value: 40, detail: "core" },
    { label: "Systems built", value: 24, detail: "mission-critical" },
  ]);
  const controls = useAnimationControls();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const parallaxY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), {
    stiffness: 140,
    damping: 22,
    mass: 0.8,
  });

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((value) => (value + 1) % titles.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setStats((current) =>
        current.map((item) => ({
          ...item,
          value: Math.max(
            item.value,
            Math.round(item.value + Math.random() * 3 - 1),
          ),
        })),
      );
    }, 1500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.08 * i,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }));
  }, [controls]);

  return (
    <section ref={ref} className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 -z-0 opacity-60 blur-3xl">
        <div className="absolute inset-x-0 top-10 h-64 rounded-full bg-linear-to-r from-cyan-400/15 via-blue-500/10 to-purple-500/18" />
        <div className="absolute left-10 top-20 h-48 w-48 rounded-full bg-cyan-400/14 blur-3xl" />
      </motion.div>
      <div className="relative z-10 space-y-6">
        <motion.div
          custom={0}
          initial={{ opacity: 0, y: 12 }}
          animate={controls}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300"
        >
          <Sparkle className="h-3.5 w-3.5 text-cyan-300" />
          Multi-surface engineering
        </motion.div>
        <motion.h1
          custom={1}
          initial={{ opacity: 0, y: 12 }}
          animate={controls}
          className="text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
        >
          Helal Ahmad
          <span className="block text-2xl font-normal text-slate-300 sm:text-3xl">
            builds production-grade systems that feel inevitable.
          </span>
        </motion.h1>
        <div className="flex flex-wrap items-center gap-3 text-base text-slate-200">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Rotating focus
          </p>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-full bg-white/10 px-4 py-2 text-white shadow-inner shadow-cyan-400/20"
          >
            {titles[index]}
          </motion.div>
        </div>
        <motion.p
          custom={2}
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          className="max-w-2xl text-lg text-slate-300"
        >
          Calm, precise, intimidatingly competent. Helal designs systems that
          merge AI, realtime collaboration, and cinematic UX—then ships them
          with measurable impact.
        </motion.p>
        <motion.div
          custom={3}
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          className="flex flex-wrap items-center gap-3"
        >
          <Link
            href="/projects"
            className="neon-border inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 px-5 py-3 text-base font-semibold text-white shadow-xl shadow-cyan-500/40 transition hover:-translate-y-1"
          >
            View advanced work <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-base text-slate-100 transition hover:-translate-y-1 hover:border-cyan-200/50 hover:bg-cyan-400/10"
          >
            Discuss a system
          </Link>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card-highlight rounded-2xl p-4 text-white shadow-lg shadow-cyan-500/10"
            >
              <motion.p
                key={item.value}
                initial={{ scale: 0.95, opacity: 0.6 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
                className="text-3xl font-semibold text-white"
              >
                {item.value}
              </motion.p>
              <p className="text-sm text-slate-300">{item.label}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative z-10 space-y-4">
        <ArchitectureCanvas />
        <PerformancePanel />
        <div className="glass-panel flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 shadow-lg shadow-cyan-500/20">
          <Waves className="h-4 w-4 text-cyan-300" />
          Physics-based scroll, kinetic text, and Three.js motion meet
          fault-tolerant backend design.
        </div>
      </div>
    </section>
  );
}

