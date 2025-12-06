"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    name: "Fiverr",
    description: "Marketplace platform redesign focusing on improved seller workflows and enhanced user trust.",
    tags: ["Product Design", "UX Flows", "Marketplace"],
    link: "https://www.notion.so/Fiverr-Case-Study",
  },
  {
    name: "Just Eat Takeaway",
    description: "Food delivery platform optimization with emphasis on order tracking and user satisfaction.",
    tags: ["Product Design", "UX Research", "Mobile"],
    link: "https://www.notion.so/Just-Eat-Takeaway-Case-Study",
  },
  {
    name: "SundaySky",
    description: "Video personalization platform with focus on scalable design systems and component libraries.",
    tags: ["Design System", "Product Design", "B2B"],
    link: "https://www.notion.so/SundaySky-Case-Study",
  },
  {
    name: "Elision",
    description: "Fintech dashboard redesign with emphasis on data visualization and role-based permissions.",
    tags: ["Fintech", "Dashboards", "UX Flows"],
    link: "https://www.notion.so/Elision-Case-Study",
  },
  {
    name: "Strength Athletics",
    description: "Fitness platform design with focus on workout tracking and user engagement.",
    tags: ["Product Design", "Mobile", "UX Research"],
    link: "https://www.notion.so/Strength-Athletics-Case-Study",
  },
  {
    name: "Melio",
    description: "B2B payments platform with vendor management and streamlined payment workflows.",
    tags: ["Fintech", "B2B", "Design System"],
    link: "https://www.notion.so/Melio-Case-Study",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="h-full p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300 cursor-pointer">
          <h3 className="text-2xl font-semibold mb-3 text-slate-50">
            {project.name}
          </h3>
          <p className="text-slate-400 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-400 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
            View case study →
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="work"
      ref={ref}
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold mb-4">
            Selected Work
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Case studies showcasing product design, UX research, and design
            systems across fintech and B2B platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

