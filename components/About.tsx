"use client";

import { motion } from "framer-motion";
import { Brain, Code2, PenTool, Rocket, Sparkles, Telescope } from "lucide-react";

const journey = [
  {
    title: "Started with UI/UX Design",
    description: "Shaped experiences with a sharp eye for clarity, flow, and visual storytelling.",
    icon: PenTool,
    color: "from-blue-500/30 to-cyan-400/10",
  },
  {
    title: "Moved into Programming",
    description: "Turned design intuition into interactive product thinking and reliable frontend craft.",
    icon: Code2,
    color: "from-sky-500/30 to-blue-400/10",
  },
  {
    title: "Discovered Machine Learning",
    description: "Fell in love with models, systems, and the power of intelligent automation.",
    icon: Brain,
    color: "from-indigo-500/30 to-violet-400/10",
  },
  {
    title: "Built AI Projects",
    description: "Translated ideas into shipped experiences that blend product value with technical depth.",
    icon: Rocket,
    color: "from-cyan-500/30 to-blue-400/10",
  },
  {
    title: "Published Research",
    description: "Used research to ground decisions, strengthen intuition, and create stronger systems.",
    icon: Telescope,
    color: "from-blue-600/30 to-slate-400/10",
  },
  {
    title: "Now pursuing Data Science & AI Engineering",
    description: "Focused on building thoughtful, high-impact AI products and data-driven experiences.",
    icon: Sparkles,
    color: "from-sky-400/30 to-blue-500/10",
  },
];

const visualCards = [
  {
    title: "Design-first thinking",
    text: "Every product decision begins with clarity, context, and resonance.",
  },
  {
    title: "Systems over hype",
    text: "The work is grounded in reliability, interpretability, and real-world outcomes.",
  },
  {
    title: "AI with intention",
    text: "Built to feel useful, elegant, and deeply considered in the hands of users.",
  },
];

export function About() {
  return (
    <section id="about" className="mt-6 rounded-[2rem] border border-white/10 bg-[#060911]/90 p-6 shadow-strong sm:p-8 lg:p-10">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">About Me</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          A journey shaped by design, code, and machine intelligence.
        </h2>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="relative">
          <div className="absolute left-[1.05rem] top-0 h-full w-px bg-gradient-to-b from-blue-400/0 via-blue-400/70 to-blue-400/0" />

          <div className="space-y-5">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-[#0b1220] shadow-[0_0_20px_rgba(59,130,246,0.16)]">
                    <Icon size={16} className="text-blue-300" />
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4">
          {visualCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
              className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.24),transparent_45%)]" />
              <div className="relative z-10">
                <div className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">{index + 1}</div>
                <h3 className="mt-3 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
