"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, type PointerEvent as ReactPointerEvent } from "react";

export function Background({
  className = "",
  intensity = "subtle",
}: {
  className?: string;
  intensity?: "subtle" | "soft" | "medium";
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-160, 160], [2, -2]), {
    stiffness: 140,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-160, 160], [-2, 2]), {
    stiffness: 140,
    damping: 20,
  });

  const glowX = useTransform(mouseX, [-160, 160], [18, 82]);
  const glowY = useTransform(mouseY, [-160, 160], [20, 80]);

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mouseX.set((x / rect.width - 0.5) * 180);
    mouseY.set((y / rect.height - 0.5) * 180);
  };

  const opacityMap = {
    subtle: 0.4,
    soft: 0.6,
    medium: 0.8,
  } as const;

  const opacity = opacityMap[intensity];

  const noiseStyle = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06) 0, transparent 18%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.08) 0, transparent 20%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 0, transparent 24%)",
    }),
    [],
  );

  return (
    <motion.div
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={['pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]', className].filter(Boolean).join(' ')}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_40%)]" />
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)",
          backgroundSize: "54px 54px",
        }}
        animate={{ opacity: [0.28, 0.44, 0.28] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0"
        style={noiseStyle}
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: `radial-gradient(360px circle at ${glowX}% ${glowY}%, rgba(96,165,250,0.14), transparent 70%)`,
          opacity,
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background: "radial-gradient(800px circle at 20% 20%, rgba(59,130,246,0.06), transparent 40%), radial-gradient(900px circle at 80% 80%, rgba(255,255,255,0.04), transparent 42%)",
          opacity: opacity * 0.9,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.015),_transparent_72%)]" />
    </motion.div>
  );
}
