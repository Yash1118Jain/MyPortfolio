</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              href="#work"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onPointerMove={onButtonPointerMove}
              onPointerLeave={onButtonPointerLeave}
              style={buttonMotionStyle}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-sm font-medium text-zinc-100 backdrop-blur-xl"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              onPointerMove={onButtonPointerMove}
              onPointerLeave={onButtonPointerLeave}
              style={buttonMotionStyle}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-medium text-zinc-200 backdrop-blur-xl"
            >
              <FileText size={15} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          onPointerMove={onCardPointerMove}
          onPointerLeave={onCardPointerLeave}
          style={cardMotionStyle}
          className="w-full max-w-[430px] flex-shrink-0"
        >
          <motion.div
            animate={{ y: [0, -4, 0], opacity: [0.96, 1, 0.96] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_46%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
            <motion.div
              animate={{ opacity: [0.52, 0.8, 0.52] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-[1.75rem] border border-white/10"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="text-[0.63rem] font-medium uppercase tracking-[0.34em] text-zinc-500">AI SYSTEM</div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[0.66rem] uppercase tracking-[0.24em] text-zinc-400">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400/60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                  </span>
                  Live
                </div>
              </div>

              <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-black/10 p-4">
                <div className="text-[0.62rem] uppercase tracking-[0.26em] text-zinc-500">Current Focus</div>
                <div className="mt-2 text-base font-medium text-zinc-100">Machine Learning</div>
              </div>

              <div className="mt-4 rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
                <div className="text-[0.62rem] uppercase tracking-[0.26em] text-zinc-500">Current Mission</div>
                <div className="mt-2 text-sm leading-7 text-zinc-400">
                  Building practical AI systems that solve real-world problems.
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {personal.techStack.map((tool) => (
                  <motion.div
                    key={tool}
                    whileHover={{ y: -3, scale: 1.01, borderColor: "rgba(59,130,246,0.24)" }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    className="rounded-[1rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur"
                  >
                    <div className="text-[0.58rem] uppercase tracking-[0.24em] text-zinc-500">{tool}</div>
                    <div className="mt-2 text-xl font-semibold text-zinc-100">1</div>
                    <div className="mt-1 text-[0.68rem] text-zinc-500"/>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-[1.2rem] border border-white/10 bg-black/10 p-4">
                <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.26em] text-zinc-500">
                  <span>Status</span>
                  <span className="text-zinc-300">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}