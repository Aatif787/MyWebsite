import type { Metadata } from "next";

export const metadata = {
  title: "Projects — Helal Ahmad",
  description:
    "Advanced engineering work: AI systems, realtime collaboration, orchestration, and scalable SaaS.",
} satisfies Metadata;

const projects = [
  {
    name: "Horizon AI",
    problem:
      "Voice-native assistant for operators that must work in noisy environments with <300ms perceived latency.",
    architecture:
      "Wake-word DSP, streaming ASR, RAG with vector + relational store, function-calling LLM, safety filters, and realtime UI state streamed over WebSockets.",
    tech:
      "Next.js, WebRTC, WebAudio, Python FastAPI for inference, Redis streams, Postgres + pgvector, OpenAI + local fallback, Temporal for workflows.",
    challenges:
      "Audio drift correction, partial hypotheses handling, grounding responses with deterministic tools, and low-latency UI hydration.",
    outcome:
      "Reduced operator task time by 42%; stabilized hallucinations with evals and guardrails; achieved 98.4% wake accuracy in field tests.",
  },
  {
    name: "Nyx Mesh",
    problem:
      "Realtime multiplayer whiteboard with infinite canvas, video co-presence, and offline resilience.",
    architecture:
      "CRDT document core, WebRTC media, WebSocket control plane, edge relays, optimistic UI with reconciliation, and snapshotting.",
    tech:
      "Next.js, React, yjs CRDT, websockets, WebRTC SFU, Zustand, Three.js overlays for spatial cursors, Redis + S3 snapshots.",
    challenges:
      "Clock skew, ghost cursors, media fallback, and ensuring render performance under 120fps cursor streams.",
    outcome:
      "Collaboration retention +31%; under 120ms p95 sync; zero data loss during network partitions thanks to CRDT + snapshot strategy.",
  },
  {
    name: "Atlas Orchestrator",
    problem:
      "LLM automation fabric that routes tasks to the right tools, enforces policy, and provides auditable trails.",
    architecture:
      "Graph-based agent planner, tool registry, policy engine, streaming token router, queue-based execution with retries, and observability surface.",
    tech:
      "TypeScript, Node, Temporal, Kafka, OpenAI/Anthropic, Redis, Postgres, OpenTelemetry, Next.js control plane.",
    challenges:
      "Tool schema validation, runaway agent prevention, cost caps, and deterministic replay of agent runs.",
    outcome:
      "Cut automation creation time by 60%; policy violations dropped to near-zero; added replayable runs for compliance reviews.",
  },
  {
    name: "Pulseboard",
    problem:
      "Scalable SaaS analytics dashboard for distributed IoT signals with sub-second drill-down.",
    architecture:
      "Ingest pipeline with Kafka, ClickHouse OLAP, Postgres configs, GraphQL gateway, and Next.js edge caching for common slices.",
    tech:
      "Next.js, GraphQL, ClickHouse, Kafka, Go services, Vercel edge, Tailwind + Framer Motion, Lens for infra dashboards.",
    challenges:
      "Balancing edge caching with auth rules, keeping charts interactive at scale, and zero-downtime schema migrations.",
    outcome:
      "p95 query latency 280ms; onboarding NPS +24; dashboards stay >60fps under heavy filter changes.",
  },
  {
    name: "Prism CV",
    problem:
      "Computer vision pipeline to detect manufacturing defects in realtime with operator feedback loop.",
    architecture:
      "Edge cameras → GPU inference service → feature store → human review UI; active learning loop retrains models weekly.",
    tech:
      "Python, PyTorch, ONNX runtime, FastAPI, Kafka, Postgres, Next.js UI with WebGL overlays for pixel masks.",
    challenges:
      "Model drift detection, low-light conditions, and building intuitive overlays without sacrificing FPS.",
    outcome:
      "Defect detection precision 94%; feedback loop cut false positives by 37%; review UI sustained 90fps overlays.",
  },
  {
    name: "Aegis Edge",
    problem:
      "Zero-trust edge security gateway with rate limits, anomaly detection, and developer-grade DX.",
    architecture:
      "Sidecar policy engine, WASM plugin system, mTLS everywhere, adaptive rate limiting, and real-time audit UI.",
    tech:
      "Rust for data plane, Go control services, WASM filters, Next.js admin, OpenTelemetry, Grafana, WireGuard for mesh.",
    challenges:
      "Maintaining ultra-low overhead, hot-reloading policies, and building explainable enforcement logs.",
    outcome:
      "Latency overhead <2.5ms; blocked >99.9% malicious traffic; dev teams ship policies in minutes with guardrails.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
          Advanced engineering work
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Systems that are already in production.
        </h1>
        <p className="max-w-3xl text-lg text-slate-300">
          Each project pairs human experience with ruthless technical rigor.
          Performance budgets, safety rails, and observability are built-in—not
          bolted on.
        </p>
      </section>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="card-highlight rounded-3xl border border-white/10 p-6 shadow-lg shadow-cyan-500/10"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">
                  Project
                </p>
                <h3 className="text-2xl font-semibold text-white">
                  {project.name}
                </h3>
              </div>
              <span className="rounded-full border border-cyan-300/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Deployed
              </span>
            </div>
            <div className="mt-3 grid gap-3 lg:grid-cols-2">
              <Detail label="Problem statement" value={project.problem} />
              <Detail label="Architecture" value={project.architecture} />
              <Detail label="Tech stack" value={project.tech} />
              <Detail label="Core challenges" value={project.challenges} />
              <Detail label="Outcome / impact" value={project.outcome} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
      <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
        {label}
      </p>
      <p className="mt-1 text-slate-200">{value}</p>
    </div>
  );
}

