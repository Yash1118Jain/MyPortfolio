"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useState } from "react";

export function TiltCard({ children }: { children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [6, -6]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-6, 6]), { stiffness: 180, damping: 18 });
  const glowX = useTransform(x, [-100, 100], [20, 80]);
  const glowY = useTransform(y, [-100, 100], [20, 80]);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const px = (offsetX / rect.width - 0.5) * 200;
    const py = (offsetY / rect.height - 0.5) * 200;
    x.set(px);
    y.set(py);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
      }}
      onMouseEnter={() => setIsHovered(true)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      animate={{ scale: isHovered ? 1.01 : 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(280px circle at ${glowX}% ${glowY}%, rgba(96,165,250,0.18), transparent 70%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />
      {children}
    </motion.div>
  );
}
