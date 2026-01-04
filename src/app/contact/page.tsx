import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact — Helal Ahmad",
  description:
    "Hire Helal Ahmad to build AI-native, production-grade systems with cinematic precision.",
} satisfies Metadata;

export default function ContactPage() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
          Engage
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Hire immediately. Let’s build what others think is impossible.
        </h1>
        <p className="text-lg text-slate-300">
          I respond fast. Expect architecture notes, risks called out, and a
          delivery path that respects your constraints.
        </p>
        <div className="flex flex-wrap gap-3 text-sm text-slate-200">
          <Link
            href="mailto:hire@helal.studio"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:-translate-y-0.5 hover:border-cyan-200/50"
          >
            <Mail className="h-4 w-4 text-cyan-300" />
            hire@helal.studio
          </Link>
          <Link
            href="https://github.com/helal"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:-translate-y-0.5 hover:border-cyan-200/50"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/helal"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition hover:-translate-y-0.5 hover:border-cyan-200/50"
          >
            LinkedIn
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Response within 24 hours with a clear next step.",
            "On-call for system design, AI orchestration, and immersive product spikes.",
            "Available for rapid audits, prototypes, or full-stack delivery.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
            >
              <MessageSquare className="mb-2 h-4 w-4 text-cyan-300" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

