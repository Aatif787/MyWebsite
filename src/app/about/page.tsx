import type { Metadata } from "next";

export const metadata = {
  title: "About — Helal Ahmad",
  description:
    "How Helal Ahmad thinks: system-first, AI-native, and outcome-obsessed.",
} satisfies Metadata;

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
          Philosophy
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Systems over stories. Precision over noise.
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          I approach every problem like a distributed system: define the
          contract, map the failure domains, measure the latency budget, and
          design the human loop that keeps it honest. The UI is a diagnostic
          surface, the backend is a choreography of guarantees, and AI is a
          co-evaluator, not a gimmick.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Idea → Architecture → Execution",
            detail:
              "Move quickly through design spikes, but commit only to architectures that honor constraints. Traceability from decision to deployment.",
          },
          {
            title: "AI as infrastructure",
            detail:
              "LLMs and agents sit alongside queues and caches. Prompting is treated like config; safety rails are treated like code; evaluation is continuous.",
          },
          {
            title: "Ethics & resilience",
            detail:
              "Human impact, auditability, and failure planning are non-negotiable. Build systems that remain graceful when everything shakes.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="card-highlight rounded-2xl border border-white/10 p-5"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
              Method
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="text-sm text-slate-300">{item.detail}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/10">
        <h2 className="text-2xl font-semibold text-white">
          How my thinking scales beyond code
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "Translate ambiguous requirements into deterministic contracts and measurable SLAs.",
            "Treat interfaces as part of the system design: motion as feedback, typography as information density control.",
            "Instrument everything: tracing, A/B harnesses, chaos drills, and eval sets for AI behaviors.",
            "Ship small, ship often—while protecting architectural integrity and accessibility budgets.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-[#0b0f18]/80 p-4 text-sm text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

