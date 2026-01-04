import type { Metadata } from "next";

export const metadata = {
  title: "Skills — Helal Ahmad",
  description:
    "Technical mastery across frontend performance, backend scalability, AI systems, and secure delivery.",
} satisfies Metadata;

const domains = [
  {
    title: "Programming languages",
    body: "TypeScript, Go, Python, and Rust where necessary. Choose the language based on latency budget, ecosystem maturity, and team ergonomics.",
    details:
      "I model interfaces first, then back them with strong typing and property-based tests. I favor composability and readability over cleverness.",
  },
  {
    title: "Frontend engineering",
    body: "React/Next.js with performance budgets. Component APIs are designed as systems, not pages. Motion is purposeful and measured.",
    details:
      "Code-split critical paths, prefetch with intent, ensure WCAG AA, and use WebGL/Canvas where it elevates comprehension.",
  },
  {
    title: "Backend & APIs",
    body: "Event-driven systems, GraphQL/REST hybrids, and gRPC where appropriate. Observability first: traces, metrics, structured logs.",
    details:
      "Patterns: CQRS, sagas for long-lived workflows, idempotency everywhere, retries with jitter, rate limits, and fine-grained authZ.",
  },
  {
    title: "AI / ML",
    body: "LLM orchestration, retrieval pipelines, voice interfaces, and evaluation harnesses. Safety and grounding are part of the architecture.",
    details:
      "Streaming ASR, wake-word detection, function calling, tool-use graphs, model fallback strategies, and quality gates with synthetic evals.",
  },
  {
    title: "DevOps & Cloud",
    body: "Docker, Terraform, CI/CD with progressive delivery. Blue/green and canary strategies, feature flags, and rollout scorecards.",
    details:
      "Kubernetes when justified, serverless for bursty loads, edge compute for latency-sensitive paths. Secrets and policies baked in.",
  },
  {
    title: "System design",
    body: "Microservices only when they serve the domain. Otherwise, keep monoliths modular and observable. Design for operability, not just scale.",
    details:
      "Real-time sync, multi-region replication, event sourcing when auditing matters, and backpressure strategies to keep systems graceful.",
  },
  {
    title: "Security & optimization",
    body: "Threat modeling, least privilege, secure defaults, and perf profiling. Caches are design elements, not band-aids.",
    details:
      "OWASP hardening, key rotation, signed URLs, differential privacy considerations, and perf sweeps using tracing plus user timings.",
  },
];

export default function SkillsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
          Technical mastery
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Depth, intent, and performance discipline.
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          I design stacks based on constraints, not trends. The result: systems
          that stay fast, stable, and legible to the humans who operate them.
        </p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {domains.map((domain) => (
          <div
            key={domain.title}
            className="card-highlight rounded-3xl border border-white/10 p-6 shadow-lg shadow-cyan-500/10"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
              Domain
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {domain.title}
            </h3>
            <p className="mt-2 text-sm text-slate-200">{domain.body}</p>
            <p className="mt-3 text-sm text-slate-400">{domain.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

