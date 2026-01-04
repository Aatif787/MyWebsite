"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Activity, CloudCog, GaugeCircle } from "lucide-react";

type Metric = {
  label: string;
  unit?: string;
  min: number;
  max: number;
};

const metrics: Metric[] = [
  { label: "Latency budget", unit: "ms", min: 22, max: 48 },
  { label: "Throughput", unit: "req/s", min: 1200, max: 2800 },
  { label: "LLM tokens", unit: "t/s", min: 80, max: 140 },
];

export function PerformancePanel() {
  const [values, setValues] = useState<number[]>(() =>
    metrics.map((metric) => random(metric.min, metric.max)),
  );

  useEffect(() => {
    const id = setInterval(() => {
      setValues(metrics.map((metric) => random(metric.min, metric.max)));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const bars = useMemo(
    () =>
      values.map((value, index) => {
        const metric = metrics[index];
        const progress =
          ((value - metric.min) / (metric.max - metric.min)) * 100;
        return { metric, value, progress: Math.min(100, Math.max(0, progress)) };
      }),
    [values],
  );

  return (
    <div className="glass-panel relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="absolute right-8 top-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-200">
          <GaugeCircle className="h-5 w-5 text-cyan-300" />
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
            Performance sim
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-cyan-200">
          <Activity className="h-3.5 w-3.5" />
          Live
        </div>
      </div>
      <div className="grid gap-3">
        {bars.map(({ metric, value, progress }) => (
          <div key={metric.label} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>{metric.label}</span>
              <span className="text-cyan-200">
                {value}
                {metric.unit ? ` ${metric.unit}` : ""}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(124,244,255,0.4)]"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400">
        <CloudCog className="h-4 w-4 text-cyan-200" />
        Synthetic telemetry derived from production-scale budgets.
      </div>
    </div>
  );
}

function random(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

