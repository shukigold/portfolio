"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "UX research & discovery",
  "Information architecture",
  "User flows & interaction design",
  "Design systems & tokens",
  "Design documentation",
  "Figma & prototyping",
  "Developer collaboration",
  "Accessibility (WCAG)",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="min-h-screen py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-4">About</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="p-10 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
              Product designer based in Israel, working on complex B2B
              interfaces and fintech platforms. I specialize in designing clear,
              trustworthy experiences for data-heavy products.
            </p>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              My work spans dashboards, role-based permissions, vendor
              management systems, payment workflows, and design systems. I&apos;m
              passionate about creating data-heavy interfaces that feel simple
              and accessible—transforming complex workflows into intuitive
              experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-slate-50">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm"
              >
                <p className="text-slate-300">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

