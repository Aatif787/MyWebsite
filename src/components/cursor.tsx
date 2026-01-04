"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);

  const glow = useMotionTemplate`radial-gradient(120px at ${springX}px ${springY}px, rgba(124,244,255,0.25), transparent 60%)`;
  const flame = useMotionTemplate`conic-gradient(from 180deg at ${springX}px ${springY}px, rgba(255,180,80,0.32), rgba(255,110,60,0.28), rgba(168,85,247,0.18), rgba(255,180,80,0.32))`;

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", enter);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", enter);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  useEffect(() => {
    const down = () => setActive(true);
    const up = () => setActive(false);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      <motion.div
        style={{
          translateX: springX,
          translateY: springY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: active ? 0.8 : 1,
          boxShadow: active
            ? "0 0 30px rgba(124,244,255,0.45), 0 0 12px rgba(168,85,247,0.35)"
            : "0 12px 30px rgba(124,244,255,0.25)",
        }}
        className="pointer-events-none fixed z-[90] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/60 bg-cyan-400/14 shadow-lg backdrop-blur lg:block"
        transition={{ type: "spring", damping: 18, stiffness: 240 }}
      />
      <motion.div
        style={{
          backgroundImage: glow,
          opacity: visible ? 0.5 : 0,
        }}
        className="pointer-events-none fixed inset-0 z-[80] hidden lg:block"
      />
      <motion.div
        style={{
          backgroundImage: flame,
          opacity: visible ? 0.35 : 0,
        }}
        animate={{
          scale: active ? 1.08 : 1,
          filter: active ? "blur(34px)" : "blur(40px)",
        }}
        className="pointer-events-none fixed inset-0 z-[70] hidden mix-blend-screen lg:block"
      />
    </>
  );
}

