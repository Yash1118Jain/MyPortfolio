"use client";

import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  const scale = useSpring(useTransform(scrollY, [0, 120], [1, 0.96]), {
    stiffness: 180,
    damping: 24,
  });

  const yOffset = useTransform(scrollY, [0, 120], [0, -6]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.3, 0.6], rootMargin: "-20% 0px -40% 0px" },
    );

    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      style={{ scale, y: yOffset }}
      className="sticky top-4 z-50 mb-6 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/8 px-3 py-3 shadow-soft backdrop-blur-2xl sm:px-5">
        <a href="#" className="flex items-center gap-3 text-sm font-medium text-zinc-200">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300">
            YJ
          </span>
          <span className="hidden sm:inline">Yash Jain</span>
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-1 py-2 text-sm font-medium text-zinc-400 transition hover:text-white"
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[1px] rounded-full bg-blue-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            className="hidden rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 transition hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white sm:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200 transition hover:border-blue-400/40 hover:text-white md:hidden"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="absolute h-[1.5px] w-5 rounded-full bg-current"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute h-[1.5px] w-5 rounded-full bg-current"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="absolute h-[1.5px] w-5 rounded-full bg-current"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", stiffness: 220, damping: 24 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#05070A]/95 px-6 py-10 backdrop-blur-2xl md:hidden"
          >
            <div className="w-full max-w-sm rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-strong">
              <div className="mb-8 flex items-center justify-between">
                <div className="text-sm font-semibold tracking-[0.28em] text-zinc-400 uppercase">Navigate</div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-200"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-3">
                {links.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-base font-medium transition ${
                        isActive
                          ? "border-blue-400/30 bg-blue-500/10 text-white"
                          : "border-white/10 bg-white/5 text-zinc-300 hover:border-blue-400/30 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-sm text-zinc-500">↗</span>
                    </a>
                  );
                })}
              </div>
              <a
                href="/resume.pdf"
                onClick={() => setIsOpen(false)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-200 transition hover:bg-blue-500/20 hover:text-white"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
