"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-4 shadow-sm">
        <a
          href="/"
          className="text-lg font-normal text-slate-950 hover:text-slate-700 transition-colors"
        >
          Joshua Goldberg
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#work"
            className="text-slate-600 hover:text-slate-950 transition-colors text-sm"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-slate-600 hover:text-slate-950 transition-colors text-sm"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-slate-600 hover:text-slate-950 transition-colors text-sm"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

