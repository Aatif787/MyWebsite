import Link from "next/link";
import { ArrowRight, Bot, Layers, Shield, Sparkles, Zap } from "lucide-react";
import { HomeHero } from "@/components/home-hero";

export default function Home() {
  return (
    <div className="space-y-16">
      <HomeHero />

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Systems first",
            description:
              "Architectures that honor latency budgets, resilience envelopes, and clarity of ownership. Designed to scale under load without sacrificing feel.",
            icon: Layers,
          },
          {
            title: "Human × machine",
            description:
              "Interfaces that feel inevitable: kinetic typography, purposeful motion, and AI that collaborates instead of interrupts.",
            icon: Bot,
          },
          {
            title: "Secure by default",
            description:
              "Defense-in-depth: authN/Z rigor, observability, and red-team habits that keep velocity high and risk contained.",
            icon: Shield,
          },
        ].map((item) => (
          <div
            key={item.title}
            className="card-highlight glass-panel relative overflow-hidden rounded-2xl p-6"
          >
            <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-cyan-400/10 blur-3xl" />
            <item.icon className="h-6 w-6 text-cyan-300" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-cyan-500/20 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
              Signature systems
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white lg:text-4xl">
              AI interfaces, realtime collaboration, and resilient platforms.
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Every project ships with measurable outcomes: faster onboarding,
              lower latency, more confident operators. Explore the engineering
              in the project dossier.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/50"
            >
              Explore projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Discuss a build
            </Link>
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Horizon AI",
              detail:
                "Voice-native assistant with wake-word, streaming ASR, and retrieval-aware LLM orchestration.",
            },
            {
              title: "Nyx Mesh",
              detail:
                "Realtime multiplayer canvas with CRDT sync, optimistic UI, and WebRTC media resilience.",
            },
            {
              title: "Atlas Orchestrator",
              detail:
                "LLM + automation fabric that fans out tasks across workers, with audit trails and guardrails.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card-highlight rounded-2xl border border-white/10 p-4"
            >
              <div className="flex items-center gap-2 text-cyan-200">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.25em]">
                  shipped
                </span>
              </div>
              <h4 className="mt-2 text-lg font-semibold text-white">
                {item.title}
              </h4>
              <p className="text-sm text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
            Delivery philosophy
          </p>
          <h3 className="text-3xl font-semibold text-white">
            Calm execution. Aggressive performance.
          </h3>
          <p className="text-slate-300">
            Helal moves from idea → architecture → delivery with relentless
            clarity. Observability baked in. Failure modes mapped early.
            Animation budgets tracked. Accessibility honored.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Page transitions via Framer Motion and GSAP-inspired curves.",
              "Lenis-powered smooth scroll with physics tuning.",
              "Command palette, custom cursor, and developer-mode Easter egg.",
              "Interactive architecture visualization with Three.js.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
              >
                <Zap className="mb-2 h-4 w-4 text-cyan-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="card-highlight relative overflow-hidden rounded-3xl border border-white/10 p-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/15" />
          <div className="relative flex items-center gap-4">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 shadow-lg shadow-cyan-500/30" />
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                Principle
              </p>
              <p className="text-xl font-semibold text-white">
                Every motion defends clarity.
              </p>
              <p className="text-sm text-slate-300">
                No decorative noise—only intent, feedback, and pacing that
                guides the reader to hire faster.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
