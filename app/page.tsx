"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Brain, GitBranch, Link2, Sparkles } from "lucide-react";
import { About } from "../components/About";
import { Background } from "../components/Background";
import { Hero } from "../components/hero";
import { Navbar } from "../components/navbar";
import { SectionTransition } from "../components/section-transition";
import { SocialProof } from "../components/SocialProof";
import { TiltCard } from "../components/tilt-card";

export { motionPresets, fadeIn, fadeUp, fadeLeft, fadeRight, blurReveal, scaleReveal, staggerContainer, staggerItem, textReveal, cardReveal, buttonHover, magneticHover, floatingAnimation, scrollReveal, useMouseParallax, useMagneticHover, useFloatingAnimation } from "../lib/animations";

const skillGroups = [
  { title: "Machine Learning", items: ["PyTorch", "Scikit-learn", "XGBoost", "LightGBM"] },
  { title: "Data Science", items: ["Pandas", "NumPy", "Statsmodels", "Experiment Design"] },
  { title: "Programming", items: ["Python", "TypeScript", "SQL", "C++"] },
  { title: "Frontend", items: ["Next.js", "React", "Tailwind", "Framer Motion"] },
  { title: "Tools", items: ["Jupyter", "MLflow", "Docker", "Git"] },
  { title: "Databases", items: ["Postgres", "MongoDB", "Redis", "DuckDB"] },
  { title: "Cloud", items: ["AWS", "Vercel", "GCP", "Azure"] },
  { title: "Design", items: ["Figma", "Design Systems", "UI Strategy", "Prototyping"] },
];

const featuredProjects = [
  {
    title: "Panic Disorder Detection",
    description:
      "A machine learning system for identifying early risk signals from behavioral and physiological data with high interpretability.",
    problem: "Clinicians needed a reliable way to surface early-stage risk patterns without relying on slow manual review.",
    solution: "Built a robust binary classification pipeline with careful feature engineering, evaluation, and explainability layers.",
    stack: ["Python", "Scikit-learn", "Pandas", "SHAP"],
    metrics: ["92% accuracy", "8x faster review"],
  },
  {
    title: "Flood Detection with LightGBM",
    description:
      "A production-minded forecasting model designed to detect flood conditions using tabular and environmental signals.",
    problem: "Regional monitoring systems lacked a fast and dependable way to detect risk spikes before escalation.",
    solution: "Deployed a gradient-boosted model tuned for precision and latency, with a lightweight inference layer.",
    stack: ["LightGBM", "Python", "SQL", "AWS"],
    metrics: ["87% precision", "< 2s inference"],
  },
  {
    title: "AI Collaborative Whiteboard",
    description:
      "A realtime collaborative workspace that merges generative AI with structured team workflows for planning and ideation.",
    problem: "Teams were fragmented across tools and needed a shared system that could turn ideas into artifacts instantly.",
    solution: "Created a smooth, multi-user experience with AI-driven suggestions, task extraction, and streaming responses.",
    stack: ["Next.js", "TypeScript", "OpenAI", "Postgres"],
    metrics: ["40% faster planning", "3x engagement"],
  },
];

const timeline = [
  { year: "2024", title: "Senior AI Engineer", detail: "Leading applied ML systems and productized AI experiences for high-growth teams." },
  { year: "2023", title: "Research Intern", detail: "Published work at the intersection of machine learning and human-centered analytics." },
  { year: "2022", title: "Product Designer → Engineer", detail: "Bridged design systems, frontend delivery, and data-driven product development." },
];

const certifications = ["AWS Machine Learning", "Google Data Analytics", "Deep Learning Specialization", "Product Design Leadership"];
const techStack = ["Next.js", "React", "TypeScript", "Tailwind", "Python", "PyTorch", "Postgres", "AWS"];
const githubStats = [
  { label: "Repositories", value: "18+" },
  { label: "Contributions", value: "1.2k+" },
  { label: "Open Source", value: "7 active" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <main className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <Navbar />

        <div className="relative">
          <Background className="rounded-[2rem]" />
          <Hero />
        </div>
        <div className="relative">
          <Background className="rounded-[2rem]" intensity="soft" />
          <SocialProof />
        </div>
        <div className="relative">
          <Background className="rounded-[2rem]" intensity="subtle" />
          <About />
        </div>

        <SectionTransition>
          <section className="section-spacing">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Experience</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">A path from curiosity to applied impact.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {timeline.map((item) => (
                <div key={item.year} className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="text-sm font-semibold text-blue-300">{item.year}</div>
                  <div className="mt-3 font-semibold text-white">{item.title}</div>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section className="section-spacing">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Skills</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">A toolkit shaped for modern AI products.</h2>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {skillGroups.map((group) => (
                <TiltCard key={group.title}>
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm text-zinc-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section className="mt-16">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Tech Stack</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">A modern stack for fast-moving AI products.</h2>
            </div>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {techStack.map((tool) => (
                <div key={tool} className="section-shell px-5 py-4 text-sm text-zinc-200">
                  {tool}
                </div>
              ))}
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section id="work" className="section-spacing">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Featured Projects</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Selected work that blends rigor with clarity.</h2>
            </div>
            <div className="space-y-6">
              {featuredProjects.map((project, index) => (
                <TiltCard key={project.title}>
                  <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                    <div className={`h-56 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,_rgba(59,130,246,0.22),_rgba(255,255,255,0.04)_40%,_rgba(96,165,250,0.12)_100%)] p-6 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="flex h-full flex-col justify-between">
                        <div className="text-sm text-zinc-400">Case study 0{index + 1}</div>
                        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-zinc-200">
                          {project.title}
                        </div>
                      </div>
                    </div>
                    <div className={`space-y-4 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-2 text-sm text-blue-300">
                        <Sparkles size={14} />
                        {project.description}
                      </div>
                      <div>
                        <div className="font-semibold text-white">Problem</div>
                        <p className="mt-1 text-sm leading-7 text-zinc-400">{project.problem}</p>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Solution</div>
                        <p className="mt-1 text-sm leading-7 text-zinc-400">{project.solution}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">{tech}</span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.metrics.map((metric) => (
                          <div key={metric} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm text-blue-100">{metric}</div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-blue-400/40 hover:text-white">GitHub <GitBranch size={14} /></a>
                        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400">Live Demo <ArrowUpRight size={14} /></a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section id="experience" className="section-spacing grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Experience</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Leadership, research, and product craftsmanship.</h2>
            </div>
            <div className="section-shell p-7">
              <div className="space-y-4 text-sm leading-7 text-zinc-400">
                <p>Senior AI Engineer with a track record of building applied ML systems and launching product-grade experiences.</p>
                <p>Experience spans research, frontend engineering, and tight collaboration with founders, product teams, and stakeholders.</p>
              </div>
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section className="mt-16 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7">
            <div className="mb-6 flex items-end justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Publications</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Research with measurable impact.</h2>
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-black/20 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Nature Scientific Reports • 2024</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Interpretable Machine Learning for Early Disorder Detection</h3>
              <p className="mt-3 max-w-3xl text-base leading-8 text-zinc-400">A publication focused on model transparency, robust evaluation, and the practical deployment of machine learning in sensitive high-impact domains.</p>
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section className="section-spacing section-shell overflow-hidden p-7">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">Certifications</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Trusted by modern technical teams.</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {certifications.concat(certifications).map((item, index) => (
                <div key={`${item}-${index}`} className="min-w-[220px] rounded-[1.25rem] border border-white/10 bg-black/20 px-5 py-4 text-sm text-zinc-200">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section className="section-spacing section-shell p-7">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">GitHub</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">A steady pulse of experimentation and shipped work.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {githubStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.25rem] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        </SectionTransition>

        <SectionTransition>
          <section id="contact" className="section-spacing rounded-[1.75rem] border border-blue-400/20 bg-[linear-gradient(135deg,_rgba(59,130,246,0.14),_rgba(255,255,255,0.03))] p-8 shadow-soft">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-blue-200">Contact</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Let’s build something ambitious and useful.</h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-400">If you need a thoughtful AI product, a polished data-driven experience, or a technically strong frontend layer, I’d love to talk.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:hello@yashjain.dev" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-blue-400/40 hover:text-white">Email</a>
                <a href="#" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-blue-400/40 hover:text-white"><Link2 size={14} className="inline" /> LinkedIn</a>
                <a href="#" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-blue-400/40 hover:text-white"><GitBranch size={14} className="inline" /> GitHub</a>
              </div>
            </div>
          </section>
        </SectionTransition>
      </main>

      <footer className="mt-10 border-t border-white/10 px-4 py-6 text-center text-sm text-zinc-500">
        Crafted for impact, clarity, and lasting first impressions.
      </footer>
    </div>
  );
}
