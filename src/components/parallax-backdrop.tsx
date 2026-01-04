"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * ParallaxBackdrop renders layered motion fields that respond to scroll.
 * It sits behind all content to add depth without hurting readability.
 */
export function ParallaxBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const layer1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), {
    stiffness: 90,
    damping: 24,
  });
  const layer2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -220]), {
    stiffness: 110,
    damping: 26,
  });
  const layer3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -320]), {
    stiffness: 120,
    damping: 28,
  });

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: layer1, willChange: "transform" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,244,255,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.14),transparent_26%),radial-gradient(circle_at_50%_70%,rgba(56,189,248,0.12),transparent_32%)]"
      />
      <motion.div
        style={{ y: layer2, willChange: "transform" }}
        className="absolute -left-10 -right-10 top-1/4 h-96 rotate-2 bg-[linear-gradient(115deg,rgba(124,244,255,0.22),rgba(96,165,250,0.12),rgba(168,85,247,0.18))] blur-3xl opacity-60 light:bg-[linear-gradient(115deg,rgba(56,189,248,0.22),rgba(59,130,246,0.16),rgba(99,102,241,0.18))]"
      />
      <motion.div
        style={{ y: layer3, willChange: "transform" }}
        className="absolute inset-x-0 top-0 h-[120%] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_160px)] opacity-25"
      />
    </div>
  );
}


