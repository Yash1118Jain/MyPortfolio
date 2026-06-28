"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMouseParallax } from "../lib/animations";
import type { Project } from "../data/projects";
// Define color schemes for each variant
const variantColors = {
  hydroalert: {
    accent: "rgba(59, 130, 246, 0.2)", // Blue
    accentHover: "rgba(59, 130, 246, 0.3)",
    accentBorder: "rgba(59, 130, 246, 0.4)",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textTertiary: "rgba(255, 255, 255, 0.5)",
  },
  panic: {
    accent: "rgba(16, 185, 129, 0.2)", // Emerald
    accentHover: "rgba(16, 185, 129, 0.3)",
    accentBorder: "rgba(16, 185, 129, 0.4)",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textTertiary: "rgba(255, 255, 255, 0.5)",
  },
  doodlex: {
    accent: "rgba(139, 92, 246, 0.2)", // Purple
    accentHover: "rgba(139, 92, 246, 0.3)",
    accentBorder: "rgba(139, 92, 246, 0.4)",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textTertiary: "rgba(255, 255, 255, 0.5)",
  },
  selfhealing: {
    accent: "rgba(75, 85, 99, 0.2)", // Gray
    accentHover: "rgba(75, 85, 99, 0.3)",
    accentBorder: "rgba(75, 85, 99, 0.4)",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textTertiary: "rgba(255, 255, 255, 0.5)",
  },
  gaming: {
    accent: "rgba(245, 158, 11, 0.2)", // Amber
    accentHover: "rgba(245, 158, 11, 0.3)",
    accentBorder: "rgba(245, 158, 11, 0.4)",
    textSecondary: "rgba(255, 255, 255, 0.7)",
    textTertiary: "rgba(255, 255, 255, 0.5)",
  },
};

// Define layout patterns for each variant: alignment for each section section
// Sections: [narrativeIntroduction, problem, research, approach, pipeline, architecture, results, lessonsLearned, techStack, buttons]
const layoutPatterns = {
  hydroalert: [
    "left",   // narrativeIntroduction
    "right",  // problem
    "left",   // research
    "right",  // approach
    "left",   // pipeline
    "center", // architecture
    "right",  // results
    "left",   // lessonsLearned
    "center", // techStack
    "center"  // buttons
  ],
  panic: [
    "right",  // narrativeIntroduction
    "left",   // problem
    "right",  // research
    "left",   // approach
    "right",  // pipeline
    "center", // architecture
    "left",   // results
    "right",  // lessonsLearned
    "center", // techStack
    "center"  // buttons
  ],
  doodlex: [
    "center", // narrativeIntroduction
    "left",   // problem
    "right",  // research
    "center", // approach
    "left",   // pipeline
    "right",  // architecture
    "center", // results
    "left",   // lessonsLearned
    "right",  // techStack
    "center"  // buttons
  ],
  selfhealing: [
    "left",   // narrativeIntroduction
    "center", // problem
    "right",  // research
    "left",   // approach
    "center", // pipeline
    "right",  // architecture
    "left",   // results
    "center", // lessonsLearned
    "right",  // techStack
    "center"  // buttons
  ],
  gaming: [
    "right",  // narrativeIntroduction
    "center", // problem
    "left",   // research
    "right",  // approach
    "center", // pipeline
    "left",   // architecture
    "right",  // results
    "center", // lessonsLearned
    "left",   // techStack
    "center"  // buttons
  ],
};

interface ProjectCaseStudyProps {
  project: Project;
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const { scrollY } = useScroll();
  const sectionProgress = useTransform(scrollY, [0, 500], [0, 1]);

  const { motionStyle: parallaxStyle, onPointerMove, onPointerLeave } = useMouseParallax({
    xRange: 4,
    yRange: 4,
    scale: 1.005,
  });

  const colors =
  variantColors[project.styleVariant as keyof typeof variantColors];

  const layout =
  layoutPatterns[project.styleVariant as keyof typeof layoutPatterns];

  return (
    <motion.section
      id={project.id}
      style={{ opacity: sectionProgress }}
      className="relative isolate min-h-[calc(100vh-4rem)] bg-[var(--color-bg)] text-white px-6 pb-12 pt-20 sm:pb-16 sm:pt-24 lg:pb-20 lg:pt-28"
    >
      {/* Background gradient and subtle animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.03)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="block text-xs uppercase tracking-wider"
            style={{ color: colors.textSecondary }}
          >
            CASE STUDY {project.caseNumber}
          </motion.span>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 block text-5xl font-light tracking-tighter"
            style={{ color: "white" }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {project.impact}
          </motion.p>
        </motion.div>

        {/* Content Sections */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="space-y-20"
        >
          {/* Narrative Introduction */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[0] === "right" ? "text-right" : layout[0] === "center" ? "text-center" : ""}
            `}
          >
            <h2 className="text-3xl font-semibold tracking-tighter">
              Narrative Introduction
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: colors.textSecondary }}>
              {project.narrativeIntroduction}
            </p>
          </div>

          {/* Problem */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[1] === "right" ? "text-right" : layout[1] === "center" ? "text-center" : ""}
            `}
          >
            <h2 className="text-3xl font-semibold tracking-tighter" style={{ color: colors.accentBorder }}>
              Problem
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: colors.textSecondary }}>
              {project.story.problem}
            </p>
          </div>

          {/* Research */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[2] === "right" ? "text-right" : layout[2] === "center" ? "text-center" : ""}
            `}
          >
            <h2 className="text-3xl font-semibold tracking-tighter" style={{ color: colors.accentBorder }}>
              Research
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: colors.textSecondary }}>
              {project.story.research}
            </p>
          </div>

          {/* Approach */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[3] === "right" ? "text-right" : layout[3] === "center" ? "text-center" : ""}
            `}
          >
            <h2 className="text-3xl font-semibold tracking-tighter" style={{ color: colors.accentBorder }}>
              Approach
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: colors.textSecondary }}>
              {project.story.approach}
            </p>
          </div>

          {/* Pipeline */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[4] === "right" ? "text-right" : layout[4] === "center" ? "text-center" : ""}
            `}
            >
            <h2 className="text-3xl font-semibold tracking-tighter" style={{ color: colors.accentBorder }}>
              Pipeline
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: colors.textSecondary }}>
              {project.story.pipeline}
            </p>
          </div>

          {/* Architecture */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[5] === "right" ? "text-right" : layout[5] === "center" ? "text-center" : ""}
            `}
            >
            <h2 className="text-3xl font-semibold tracking-tighter" style={{ color: colors.accentBorder }}>
              Architecture
            </h2>
            <div className="mt-4">
              {/* Architecture Visual Placeholder */}
              <div className="relative h-[400px] rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center text-zinc-400/50">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5"
                    >
                      {/* Simple diagram placeholder */}
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="4"/>
                        <circle cx="12" cy="8" r="2"/>
                        <path d="M12 8v4"/>
                        <path d="M8 12h4"/>
                      </svg>
                    </motion.span>
                    <p className="mt-4 text-sm text-zinc-400/60">
                      TODO: Replace with actual architecture diagram<br className="hidden sm:inline" />
                      (SVG or technical illustration)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[6] === "right" ? "text-right" : layout[6] === "center" ? "text-center" : ""}
            `}
            >
            <h2 className="text-3xl font-semibold tracking-tighter" style={{ color: colors.accentBorder }}>
              Results
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: colors.textSecondary }}>
              {project.story.results}
            </p>
          </div>

          {/* Lessons Learned */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[7] === "right" ? "text-right" : layout[7] === "center" ? "text-center" : ""}
            `}
            >
            <h2 className="text-3xl font-semibold tracking-tighter" style={{ color: colors.accentBorder }}>
              Lessons Learned
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: colors.textSecondary }}>
              {project.story.lessonsLearned}
            </p>
          </div>

          {/* Technology Stack */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[8] === "right" ? "text-right" : layout[8] === "center" ? "text-center" : ""}
            `}
            >
            <h2 className="text-3xl font-semibold tracking-tighter" style={{ color: colors.accentBorder }}>
              Technology Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.5 }}
                  className={`rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/[0.12] hover:text-zinc-100`}
                  style={{ borderColor: colors.accentBorder }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`
              space-y-6
              text-left
              ${layout[9] === "right" ? "text-right" : layout[9] === "center" ? "text-center" : ""}
              mt-16
            `}
            >
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-center">
              {project.buttons.map((button, index) => (
                <motion.a
                  key={button.label}
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex h-12 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/${index % 2 === 0 ? "10" : "8"} px-6 py-3 text-sm font-medium text-zinc-${index % 2 === 0 ? "100" : "200"} backdrop-blur-sm transition-all duration-500 hover:bg-white/20`}
                  style={{
                    borderColor: colors.accentBorder,
                    backgroundColor: index % 2 === 0 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.08)",
                    color: index % 2 === 0 ? "white" : "rgba(255,255,255,0.8)"
                  }}
                >
                  {button.label}
                  {button.label === "GitHub Repository" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1.71 5.09 3.05c0 .67.27 1.27.75 1.54a5.44 5.44 0 0 0-1.1 2.89c2.04.84 4.76 1.56 7.72 1.17"/>
                    </svg>
                  )}
                  {button.label === "Live Demo" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 16l-4-4h7"/>
                    </svg>
                  )}
                  {button.label === "Read Documentation" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                      <path d="M18 1.5v9a9 9 0 0 1-9 9"/>
                    </svg>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}