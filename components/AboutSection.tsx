"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen pt-32 pb-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-12">
            About
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8 text-lg md:text-xl text-slate-700 leading-relaxed"
          >
            <p>
              Product designer based in Israel, working on complex B2B
              interfaces and fintech platforms. I specialize in designing clear,
              trustworthy experiences for data-heavy products.
            </p>
            <p>
              My work spans dashboards, role-based permissions, vendor
              management systems, payment workflows, and design systems. I&apos;m
              passionate about creating data-heavy interfaces that feel simple
              and accessible—transforming complex workflows into intuitive
              experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

