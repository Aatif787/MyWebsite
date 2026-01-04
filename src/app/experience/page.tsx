import type { Metadata } from "next";

export const metadata = {
  title: "Experience — Helal Ahmad",
  description:
    "Experience, leadership, research, and measurable outcomes from Helal Ahmad.",
} satisfies Metadata;

const experiences = [
  {
    title: "Lead Systems Engineer — Neuralnorth",
    duration: "2023 — Present",
    items: [
      "Led AI interface program: shipped Horizon AI, cutting operator task time by 42%.",
      "Designed multi-tenant orchestration fabric with Temporal + Kafka; 99.97% uptime.",
      "Instituted observability-first culture: OpenTelemetry, SLO burn alerts, chaos drills.",
    ],
  },
  {
    title: "Senior Full-Stack Architect — Lumenary",
    duration: "2020 — 2023",
    items: [
      "Built Nyx Mesh collaboration stack; realtime sync p95 <120ms for 40k DAU.",
      "Owned frontend platform: performance budgets, accessibility gates, design tokens.",
      "Introduced blue/green deploys + feature flags, reducing rollback time to <2 minutes.",
    ],
  },
  {
    title: "Research & Open Source",
    duration: "Ongoing",
    items: [
      "Published evaluation harness for LLM safety; adopted by three enterprise teams.",
      "Maintainer: small OSS toolkit for CRDT testing at scale.",
      "Speaker: architecture resilience and AI grounding practices (multiple conferences).",
    ],
  },
];

const achievements = [
  "Cut onboarding time for enterprise dashboard users by 28% through UX and data modeling.",
  "Reduced cold-start latency for edge functions by 35% via bundle slimming and streaming.",
  "Auth hardening: mTLS everywhere, signed URLs, audit trails; zero critical incidents post-launch.",
  "Performance sweeps kept interaction latency under 100ms while retaining cinematic motion.",
];

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
          Experience & achievements
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Leadership in systems, AI, and human-grade product delivery.
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          I build teams that ship ambitious systems with calm rigor. The focus is
          measurable outcomes: uptime, latency, usability, and safety.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="card-highlight rounded-3xl border border-white/10 p-6 shadow-lg shadow-cyan-500/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                    Role
                  </p>
                  <h3 className="text-2xl font-semibold text-white">
                    {exp.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {exp.duration}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {exp.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="card-highlight rounded-3xl border border-white/10 p-6 shadow-lg shadow-cyan-500/10">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
            Outcomes
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Measured impact
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {achievements.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

