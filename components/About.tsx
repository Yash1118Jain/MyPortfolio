"use client";

import { motion } from "framer-motion";
import { Lightbulb, Network, Palette, TrendingUp } from "lucide-react";

const philosophies = [
  {
    title: "Curiosity",
    description:
      "I constantly ask “why?” and explore adjacent possibilities. This habit uncovers hidden requirements and sparks ideas that lead to simpler, more robust designs.",
    icon: Lightbulb,
  },
  {
    title: "Systems Thinking",
    description:
      "I view every feature as part of a larger ecosystem—considering performance, maintainability, and user impact—so changes improve the whole rather than just a part.",
    icon: Network,
  },
  {
    title: "Design Mindset",
    description:
      "I approach problems like a designer: sketching alternatives, seeking feedback, and iterating until the solution feels intuitive and inevitable.",
    icon: Palette,
  },
  {
    title: "Continuous Learning",
    description:
      "I treat every project as a learning opportunity—studying outcomes, refining my mental models, and sharing knowledge so the team grows together.",
    icon: TrendingUp,
  },
];

export function About() {
  return (
    <section id="about" className="mt-6 rounded-[2rem] border border-white/10 bg-[#060911]/90 p-6 sm:p-8 lg:p-10">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-20 space-y-6">
          <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">
            Technical Philosophy
          </p>
          <h2 className="text-5xl font-light tracking-[-0.03em] text-white sm:text-6xl">
            How I Think
          </h2>
          <p className="max-w-2xl text-base leading-8 text-zinc-300">
            Good software begins with understanding people, problems, and systems before writing code.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {philosophies.map((philosophy, index) => {
            const Icon = philosophy.icon;
            return (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group space-y-6"
              >
                {/* Icon */}
                <div
                  className="transition-transform duration-1000 group-hover:scale-105"
                >
                  <Icon
                    size={36}
                    className="text-blue-400/60 group-hover:text-blue-400/80"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">
                  {philosophy.title}
                </h3>

                {/* Description */}
                <p className="leading-7 text-zinc-400 transition-colors duration-1000 group-hover:text-zinc-300">
                  {philosophy.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}