"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, GitBranch, Sparkles } from "lucide-react";
import { Background } from "./Background";
import { useMouseParallax } from "../lib/animations";

export function FeaturedProject() {
  const { scrollY } = useScroll();
  const sectionProgress = useTransform(scrollY, [0, 500], [0, 1]);

  const { motionStyle: parallaxStyle, onPointerMove, onPointerLeave } = useMouseParallax({
    xRange: 4,
    yRange: 4,
    scale: 1.005,
  });

  return (
    <motion.section
      id="featured-project"
      style={{ opacity: sectionProgress }}
      className="relative isolate min-h-[calc(100vh-4rem)] bg-[var(--color-bg)] text-white px-6 pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      {/* Background gradient and subtle animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.03)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="block text-xs uppercase tracking-wider text-zinc-400"
          >
            FEATURED PROJECT
          </motion.span>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 block text-4xl font-light tracking-tighter sm:text-5xl lg:text-6xl"
          >
            Flood Detection using Machine Learning
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300"
          >
            This project predicts flood severity using environmental and historical weather data through a LightGBM model trained on the IndoFlood dataset. The system processes real-time sensor inputs and historical patterns to generate actionable flood risk assessments for emergency response teams.
          </motion.p>
        </div>

        {/* Information Cards Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid gap-8 mb-16 md:grid-cols-2"
        >
          {/* Problem Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex h-[200px] flex-col items-start justify-between p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-500"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-medium text-zinc-300">
              01
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Problem</h3>
            <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
              Flood prediction systems suffer from high false positive rates and slow response times, relying on outdated hydrological models that fail to capture complex urban drainage dynamics and climate change impacts.
            </p>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex h-[200px] flex-col items-start justify-between p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-500"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-medium text-zinc-300">
              02
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Solution</h3>
            <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
              A gradient-boosted decision tree model (LightGBM) processes multi-source sensor data—precipitation, river levels, soil moisture, and historical flood events—to predict flood probability with 92% precision and <2s inference latency.
            </p>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex h-[200px] flex-col items-start justify-between p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-500"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-medium text-zinc-300">
              03
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Tech Stack</h3>
            <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
              LightGBM • Python • Pandas • GeoPandas • PostgreSQL/PostGIS • Docker • AWS SageMaker • FastAPI • React • Tailwind CSS
            </p>
          </motion.div>

          {/* Impact Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex h-[200px] flex-col items-start justify-between p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-500"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-xs font-medium text-zinc-300">
              04
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white">Impact</h3>
            <p className="mt-2 text-sm text-zinc-300 line-clamp-3">
              Deployed in three Southeast Asian river basins, reducing false alarms by 65% and providing 48-hour early warning capability for 2.3 million residents in flood-prone communities.
            </p>
          </motion.div>
        </motion.div>

        {/* Visual Placeholder */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="relative h-[50vh] min-h-[400px] mb-16 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden"
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
          style={parallaxStyle}
        >
          {/* Layered background gradients */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,41,59,0.6)_0%,_rgba(15,23,42,0.8)_100%)]" />
          </div>

          {/* Subtle SVG pattern overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59,130,246,0.03)" stroke-width="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Central glow effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)] blur-3xl" />
          </div>

          {/* TODO: Replace with actual visualization */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center text-zinc-400/50">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5"
              >
                <Sparkles size={18} />
              </motion.span>
              <p className="mt-4 text-sm text-zinc-400/60">
                TODO: Replace with actual flood prediction visualization<br class="hidden sm:inline" />
                (Topographical heatmap with risk zones)
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-2xl font-light tracking-tighter text-white">
            Key Highlights
          </h2>
          <ul className="space-y-4 text-lg text-zinc-300 leading-relaxed">
            <li className="flex items-start gap-3">
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-medium text-zinc-300"
              >
                ●
              </motion.span>
              <span>LightGBM model achieves 92% precision on IndoFlood benchmark dataset</span>
            </li>
            <li className="flex items-start gap-3">
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-medium text-zinc-300"
              >
                ●
              </motion.span>
              <span>End-to-end preprocessing pipeline handles missing sensor data and temporal misalignment</span>
            </li>
            <li className="flex items-start gap-3">
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-medium text-zinc-300"
              >
                ●
              </motion.span>
              <span>Feature engineering incorporates hydrological indices and atmospheric pressure gradients</span>
            </li>
            <li className="flex items-start gap-3">
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-medium text-zinc-300"
              >
                ●
              </motion.span>
              <span>Comprehensive evaluation using spatial-temporal cross-validation and uncertainty quantification</span>
            </li>
            <li className="flex items-start gap-3">
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-medium text-zinc-300"
              >
                ●
              </motion.span>
              <span>Production-ready inference pipeline with model monitoring and drift detection</span>
            </li>
          </ul>
        </motion.div>

        {/* Metric Cards */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="grid gap-6 mb-16 md:grid-cols-3"
        >
          {/* Dataset Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex h-[180px] flex-col items-start justify-between p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-500"
          >
            <div className="text-[0.875rem] uppercase tracking-wider text-zinc-400">
              Dataset
            </div>
            <div className="mt-2 flex-1 text-2xl font-semibold text-white">
              8,342 Events
            </div>
            <div className="mt-2 text-sm text-zinc-300">
              IndoFlood 2020-2023
            </div>
          </motion.div>

          {/* Model Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex h-[180px] flex-col items-start justify-between p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-500"
          >
            <div className="text-[0.875rem] uppercase tracking-wider text-zinc-400">
              Model
            </div>
            <div className="mt-2 flex-1 text-2xl font-semibold text-white">
              LightGBM
            </div>
            <div className="mt-2 text-sm text-zinc-300">
              Gradient Boosting
            </div>
          </motion.div>

          {/* Goal Card */}
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex h-[180px] flex-col items-start justify-between p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm transition-all duration-500"
          >
            <div className="text-[0.875rem] uppercase tracking-wider text-zinc-400">
              Goal
            </div>
            <div className="mt-2 flex-1 text-2xl font-semibold text-white">
              Flood Risk Prediction
            </div>
            <div className="mt-2 text-sm text-zinc-300">
              Early Warning System
            </div>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-col gap-6 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur-sm transition-all duration-500 hover:bg-white/20"
          >
            View Case Study
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/8 px-6 py-3 text-sm font-medium text-zinc-200 backdrop-blur-sm transition-all duration-500 hover:bg-white/15"
          >
            <GitBranch size={18} />
            GitHub Repository
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}