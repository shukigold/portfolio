"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    workSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
      {/* Soft radial gradients in corners */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
            Product Designer
            <br />
            <span className="text-slate-400">Creating clear, trustworthy</span>
            <br />
            <span className="text-slate-400">interfaces & calm UX</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          UX/UI Designer with a passion for creating intuitive and engaging
          digital experiences. Specializing in complex products, fintech, and
          B2B interfaces.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToWork}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-50 text-slate-950 rounded-2xl font-medium text-lg shadow-lg shadow-slate-50/10 hover:shadow-xl hover:shadow-slate-50/20 transition-all"
          >
            View my work
          </motion.button>
          <motion.a
            href="https://drive.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-slate-700 rounded-2xl font-medium text-lg hover:border-slate-500 transition-all"
          >
            Download résumé
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <motion.button
            onClick={scrollToWork}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-slate-500 hover:text-slate-400 transition-colors"
            aria-label="Scroll to work"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

