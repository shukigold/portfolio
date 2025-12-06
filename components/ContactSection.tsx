"use client";
/* eslint-disable react/no-unescaped-entities */

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
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-12">
            Contact
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-6 text-lg md:text-xl p-8 rounded-3xl glass-card"
          >
            <a
              href="tel:0547174791"
              className="text-slate-700 hover:text-slate-950 transition-colors"
            >
              Text Me
            </a>
            <a
              href="mailto:mail@joshgold.design"
              className="text-slate-700 hover:text-slate-950 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://drive.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-950 transition-colors"
            >
              CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

