"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";

const stats = [
  { label: "Projects Built", value: 18, suffix: "+", detail: "From experiments to shipped products with measurable impact." },
  { label: "Machine Learning Models", value: 12, suffix: "+", detail: "Production-minded systems tuned for reliability and speed." },
  { label: "Leadership Roles", value: 4, suffix: "+", detail: "Leading cross-functional execution across research and product." },
  { label: "Research Publication", value: 3, suffix: "+", detail: "Published work at the intersection of AI and human-centered design." },
  { label: "Internships", value: 2, suffix: "+", detail: "Hands-on experience in high-growth research and engineering teams." },
  { label: "Certificates", value: 6, suffix: "+", detail: "Advanced credentials across data science, cloud, and AI." },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1200;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const frame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), {
    stiffness: 140,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), {
    stiffness: 140,
    damping: 18,
  });
  const glowX = useTransform(x, [-100, 100], [12, 88]);
  const glowY = useTransform(y, [-100, 100], [12, 88]);

  const onPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;
    x.set((px / rect.width - 0.5) * 200);
    y.set((py / rect.height - 0.5) * 200);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.2 } }}
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(220px circle at ${glowX}% ${glowY}%, rgba(59,130,246,0.22), transparent 70%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <p className="text-sm uppercase tracking-[0.24em] text-zinc-500">{stat.label}</p>
        <div className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </div>
        <p className="mt-4 max-w-[22ch] text-sm leading-7 text-zinc-400">{stat.detail}</p>
      </div>
    </motion.article>
  );
}

export function SocialProof() {
  return (
    <section className="mt-6 rounded-[2rem] border border-white/10 bg-[#060911]/90 p-6 shadow-strong sm:p-8 lg:p-10">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Social Proof</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
          Built for ambitious teams that need signal, not noise.
        </h2>
        <p className="mt-4 text-lg leading-8 text-zinc-400">
          A blend of shipped products, research depth, and product-minded execution—designed to earn trust in seconds.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
