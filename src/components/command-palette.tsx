"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  Compass,
  Cpu,
  LucideIcon,
  MoonStar,
  PanelTopOpen,
  Route,
  Terminal,
} from "lucide-react";

export const commandPaletteEvent = "open-command-palette";
export const developerToggleEvent = "toggle-developer-mode";

type Action = {
  label: string;
  hint: string;
  icon: LucideIcon;
  onSelect: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const actions = useMemo<Action[]>(
    () => [
      {
        label: "Home — Immersive intro",
        hint: "Reset narrative",
        icon: Route,
        onSelect: () => router.push("/"),
      },
      {
        label: "About — Philosophy",
        hint: "Mindset & systems",
        icon: Compass,
        onSelect: () => router.push("/about"),
      },
      {
        label: "Skills — Technical mastery",
        hint: "Stacks & approach",
        icon: Cpu,
        onSelect: () => router.push("/skills"),
      },
      {
        label: "Projects — Advanced work",
        hint: "6 flagship systems",
        icon: PanelTopOpen,
        onSelect: () => router.push("/projects"),
      },
      {
        label: "Experience — Outcomes",
        hint: "Leadership & research",
        icon: Terminal,
        onSelect: () => router.push("/experience"),
      },
      {
        label: "Contact — Engage",
        hint: "High-speed response",
        icon: ArrowRight,
        onSelect: () => router.push("/contact"),
      },
      {
        label: "Toggle theme",
        hint: "Animated dark/light",
        icon: MoonStar,
        onSelect: () => setTheme(theme === "light" ? "dark" : "light"),
      },
      {
        label: "Developer mode overlay",
        hint: "Reveal diagnostics",
        icon: Terminal,
        onSelect: () =>
          window.dispatchEvent(new Event(developerToggleEvent)),
      },
    ],
    [router, setTheme, theme],
  );

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => {
          const next = !value;
          if (!next) setQuery("");
          return next;
        });
      }

      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };

    const openFromEvent = () => {
      setQuery("");
      setOpen(true);
    };

    window.addEventListener("keydown", handleKey);
    window.addEventListener(commandPaletteEvent, openFromEvent);

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener(commandPaletteEvent, openFromEvent);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/60 backdrop-blur-sm">
      <Command
        label="Command menu"
        className="mt-24 w-[90vw] max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0f18] shadow-2xl shadow-cyan-500/10"
      >
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
          <Terminal className="h-4 w-4 text-cyan-300" />
          <Command.Input
            value={query}
            onValueChange={setQuery}
            placeholder="Navigate or run an action…"
            className="flex-1 bg-transparent text-base text-white outline-none placeholder:text-slate-500"
          />
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
            esc
          </span>
        </div>
        <Command.List className="max-h-[60vh] overflow-y-auto">
          <Command.Empty className="px-4 py-6 text-sm text-slate-400">
            No matches. Try “projects” or “contact”.
          </Command.Empty>
          <Command.Group heading="Navigate" className="px-2 py-1 text-xs uppercase tracking-[0.14em] text-slate-500">
            {actions.map((action) => (
              <Command.Item
                key={action.label}
                value={action.label}
                onSelect={() => {
                  setOpen(false);
                  setQuery("");
                  action.onSelect();
                }}
                className="group flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-100 data-[selected=true]:bg-white/5"
              >
                <action.icon className="h-4 w-4 text-cyan-300" />
                <div className="flex flex-col">
                  <span className="font-medium">{action.label}</span>
                  <span className="text-xs text-slate-400">{action.hint}</span>
                </div>
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}

