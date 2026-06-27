"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight, FileText, Sparkles } from "lucide-react";

const badges = ["ML Systems", "Data Products", "Agentic UX", "Applied AI"];
const metrics = [
  { label: "Applied AI", value: "20+" },
  { label: "Research", value: "6" },
  { label: "Deployments", value: "12" },
];

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-220, 220], [8, -8]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-220, 220], [-8, 8]), {
    stiffness: 140,
    damping: 18,
  });
  const glowX = useTransform(mouseX, [-220, 220], [15, 85]);
  const glowY = useTransform(mouseY, [-220, 220], [18, 82]);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mouseX.set((x / rect.width - 0.5) * 220);
    mouseY.set((y / rect.height - 0.5) * 220);
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100vh-6rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-[#060911] p-6 shadow-strong sm:p-8 lg:p-12"
    >
      <div className="absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.24),_transparent_36%),linear-gradient(135deg,_rgba(59,130,246,0.14)_0%,_rgba(255,255,255,0.02)_45%,_rgba(96,165,250,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(96,165,250,0.18),_transparent_24%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.12),_transparent_28%)]" />

      <div className="relative z-10 grid min-h-[calc(100vh-10rem)] gap-10 lg:grid-cols-[1.02fr_0.88fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-200"
          >
            <Sparkles size={14} />
            AI Engineer • Data Scientist • Product Designer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16 }}
            className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-7xl"
          >
            Solving real-world problems with AI that feels as sharp as it performs.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            I build machine learning systems, data science solutions, and intelligent software that turn complexity into calm, reliable products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              View Projects
              <ArrowDownRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-blue-400/40 hover:text-white"
            >
              <FileText size={16} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-sm text-zinc-300"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.16 }}
          onPointerMove={onPointerMove}
          onPointerLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative mx-auto w-full max-w-[470px]"
        >
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-80"
            style={{
              background: `radial-gradient(280px circle at ${glowX}% ${glowY}%, rgba(96,165,250,0.24), transparent 60%)`,
            }}
          />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-strong">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.1),_rgba(255,255,255,0.02))]" />
            <div className="relative h-[420px] rounded-[1.5rem] border border-white/10 bg-[linear-gradient(140deg,_rgba(59,130,246,0.22),_rgba(8,12,20,0.72)_55%,_rgba(96,165,250,0.14))] p-6">
              <div className="absolute left-5 top-5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-100">
                AI Identity
              </div>
              <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-zinc-300">
                Live Systems
              </div>

              <div className="absolute inset-x-6 bottom-6 rounded-[1.2rem] border border-white/10 bg-black/25 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between text-sm text-zinc-300">
                  <span>Signal layer</span>
                  <span>Realtime</span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {metrics.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                      <div className="text-xl font-semibold text-white">{item.value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute left-6 top-28 flex flex-col gap-3">
                {badges.slice(0, 2).map((badge) => (
                  <motion.div
                    key={badge}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm text-zinc-100 backdrop-blur"
                  >
                    {badge}
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-36 right-6 rounded-[1.25rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
                <div className="text-sm font-medium text-white">Model + Product</div>
                <div className="mt-2 text-sm text-zinc-300">Research-led, execution-ready, and thoughtfully engineered.</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
