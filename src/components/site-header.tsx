"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Command, MoonStar, SunMedium } from "lucide-react";
import clsx from "clsx";

type Props = {
  onCommandPalette: () => void;
};

const links = [
  { href: "/", label: "Intro" },
  { href: "/about", label: "Philosophy" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ onCommandPalette }: Props) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const currentTheme = theme ?? "dark";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#05070e]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30" />
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Helal Ahmad
            </p>
            <p className="text-sm text-white/90">
              Systems Engineer · AI Architect
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm font-medium text-slate-200 shadow-lg shadow-cyan-500/10 lg:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-full px-3 py-1 transition",
                  active
                    ? "bg-white/15 text-white shadow-inner shadow-cyan-400/20"
                    : "hover:bg-white/10 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={onCommandPalette}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white"
          >
            <Command className="h-4 w-4 text-cyan-300" />
            Quick Jump
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-300">
              ⌘K
            </span>
          </button>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/10"
          >
            {currentTheme === "light" ? (
              <MoonStar className="h-4 w-4" />
            ) : (
              <SunMedium className="h-4 w-4" />
            )}
          </button>
          <Link
            href="/contact"
            className="neon-border inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/40 transition hover:-translate-y-0.5"
          >
            Hire
          </Link>
        </div>
      </div>
    </header>
  );
}

