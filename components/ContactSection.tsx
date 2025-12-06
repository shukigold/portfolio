"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-32 px-6 relative flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
          I&apos;m open to new opportunities, collaborations, and freelance
            projects. Feel free to reach out.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="mailto:mail@joshgold.design"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-slate-50 text-slate-950 rounded-2xl font-medium text-lg shadow-lg shadow-slate-50/10 hover:shadow-xl hover:shadow-slate-50/20 transition-all"
            >
              Email me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
              <a
                href="mailto:mail@joshgold.design"
                className="hover:text-slate-50 transition-colors"
              >
                mail@joshgold.design
              </a>
              <span className="hidden sm:inline">•</span>
              <a
                href="tel:0547174791"
                className="hover:text-slate-50 transition-colors"
              >
                054-717-4791
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8">
              <a
                href="https://www.linkedin.com/in/joshua-goldberg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-50 transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/joshgold.design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-50 transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

