'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from 'framer-motion';
import { GitBranch, linkedin } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll direction for hiding/showing navbar
  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.pageYOffset;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(currentScrollY < lastScrollY ? false : true);
          lastScrollY = currentScrollY;
        });
      }
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  // Determine active section based on scroll position
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
      { threshold: [0.3, 0.6], rootMargin: '-20% 0px -40% 0px' }
    );

    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#leadership', label: 'Leadership' },
    { href: '#research', label: 'Research' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  const { scrollY } = useScroll();
  const navY = useSpring(
    useTransform(scrollY, [0, 100, 200], [0, 0, -100]),
    {
      stiffness: 180,
      damping: 22,
    }
  );

  return (
    <motion.header
      style={{ y: navY }}
      className="fixed top-0 z-50 w-full pointer-events-none"
    >
      <div className="pointer-events-all mx-auto max-w-[1400px]">
        <div className="border-b border-white/10 bg-white/[0.06] backdrop-blur-xl">
          <div className="flex h-[72px] items-center justify-between gap-8 px-6 sm:px-8 lg:px-10">
            {/* Left side: Logo and name */}
            <div className="flex shrink-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.08] text-sm font-semibold text-white">
                YJ
              </div>
              <span className="hidden text-sm font-medium text-zinc-100 sm:inline">
                Yash Jain
              </span>
            </div>

            {/* Center: Navigation links */}
            <nav className="hidden flex-1 items-center justify-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.replace('#', '') ||
                  (activeSection === '' && link.href === '#projects'); // Default to projects

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="relative flex items-center px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-zinc-100"
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {/* Animated blue pill indicator */}
                    <motion.span
                      layoutId={`active-indicator-${link.href}`}
                      initial={{ width: 0, left: '50%' }}
                      animate={
                        isActive
                          ? { width: '100%', left: 0 }
                          : { width: 0, left: '50%' }
                      }
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      className="absolute left-0 bottom-0 h-0.5 bg-blue-500/70"
                    />
                  </motion.a>
                );
              })}
            </nav>

            {/* Right side: Buttons and icons */}
            <div className="flex items-center gap-4">
              {/* Resume button */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] px-4 text-sm font-medium text-zinc-100 transition-all duration-300 hover:text-white hover:bg-white/[0.12]"
                whileTap={{ scale: 0.97 }}
              >
                Resume
              </motion.a>

              {/* Desktop: GitHub and LinkedIn icons */}
              <div className="hidden md:flex items-center gap-2">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-zinc-400 transition-all duration-300 hover:text-white hover:bg-white/[0.12]"
                  whileTap={{ scale: 0.97 }}
                >
                  <GitBranch className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-zinc-400 transition-all duration-300 hover:text-white hover:bg-white/[0.12]"
                  whileTap={{ scale: 0.97 }}
                >
                  <linkedin className="h-5 w-5" />
                </motion.a>
              </div>

              {/* Mobile: Hamburger menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
                className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] p-1 transition-all duration-300 hover:text-white hover:bg-white/[0.12]"
              >
                {/* Animated hamburger to X */}
                <motion.span
                  display="block"
                  width="18"
                  height="2"
                  bg="currentColor"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                  }}
                />
                <motion.span
                  display="block"
                  width="18"
                  height="2"
                  bg="currentColor"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ marginTop: 2, opacity: isMenuOpen ? 0 : 1 }}
                />
                <motion.span
                  display="block"
                  width="18"
                  height="2"
                  bg="currentColor"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ marginTop: 2, rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/[0.8] backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative w-full max-w-[260px] space-y-6"
            >
              {/* Mobile nav links */}
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.replace('#', '') ||
                  (activeSection === '' && link.href === '#projects');

                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="block w-full text-center py-3 px-4 rounded-xl border border-white/10 bg-white/[0.08] text-lg font-medium text-zinc-100 transition-all duration-300 hover:text-white hover:bg-white/[0.12]"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-0">{link.label}</span>
                    {/* Active indicator for mobile */}
                    <motion.span
                      layoutId={`mobile-active-${link.href}`}
                      initial={{ width: 0 }}
                      animate={isActive ? { width: '100%' } : { width: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="absolute left-0 bottom-0 h-0.5 bg-blue-500/70"
                    />
                  </motion.a>
                );
              })}

              {/* Mobile: Resume button */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 px-4 rounded-xl border border-white/10 bg-white/[0.08] text-lg font-medium text-zinc-100 transaction-all duration-300 hover:text-white hover:bg-white/[0.12]"
                whileTap={{ scale: 0.95 }}
              >
                Resume
              </a>

              {/* Mobile: Social icons */}
              <div className="flex justify-center gap-4">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-zinc-400 transition-all duration-300 hover:text-white hover:bg-white/[0.12]"
                  whileTap={{ scale: 0.95 }}
                >
                  <GitBranch className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.08] text-zinc-400 transition-all duration-300 hover:text-white hover:bg-white/[0.12]"
                  whileTap={{ scale: 0.95 }}
                >
                  <linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}