"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import {
  CommandPalette,
  commandPaletteEvent,
  developerToggleEvent,
} from "./command-palette";
import { Cursor } from "./cursor";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { DeveloperBadge } from "./developer-badge";
import { ParallaxBackdrop } from "./parallax-backdrop";
import { Galaxy } from "./galaxy";

function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.1,
      gestureOrientation: "vertical",
    });

    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

export function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [developerMode, setDeveloperMode] = useState(false);

  const paletteTrigger = useMemo(
    () => () => window.dispatchEvent(new Event(commandPaletteEvent)),
    [],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.toLowerCase() === "d") {
        setDeveloperMode((flag) => !flag);
      }
    };

    const onDeveloperEvent = () => setDeveloperMode((flag) => !flag);

    window.addEventListener("keydown", onKey);
    window.addEventListener(developerToggleEvent, onDeveloperEvent);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(developerToggleEvent, onDeveloperEvent);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <LenisProvider />
      <CommandPalette />
      <Cursor />
      <div className="relative min-h-screen overflow-hidden">
        <Galaxy />
        <div className="aurora-beams" />
        <div className="water-waves" />
        <ParallaxBackdrop />
        <div className="grid-overlay" />
        <div className="noise" />
        <div className="blur-spot bg-gradient-to-r from-cyan-500/25 via-sky-400/10 to-purple-500/15" />
        <div className="blur-spot bg-gradient-to-r from-indigo-500/15 via-transparent to-cyan-400/20" />
        <SiteHeader onCommandPalette={paletteTrigger} />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-28 lg:px-10"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <SiteFooter />
        {developerMode && <DeveloperBadge />}
      </div>
    </ThemeProvider>
  );
}

