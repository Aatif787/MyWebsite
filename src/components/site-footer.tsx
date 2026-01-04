import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#05070e]/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="text-white">Helal Ahmad</p>
          <p className="text-slate-400">
            Full-stack architect crafting resilient, human-grade systems.
          </p>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <Link
            href="mailto:hire@helal.studio"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Mail className="h-4 w-4" />
            hire@helal.studio
          </Link>
          <Link
            href="https://github.com/helal"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/helal"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}

