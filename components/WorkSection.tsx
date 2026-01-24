"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExiting(true);
    setTimeout(() => {
      router.push(`/work/${project.slug}`);
    }, 300);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isExiting ? { opacity: 0, scale: 0.95 } : isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: isExiting ? 0.3 : 0.6, delay: isExiting ? 0 : index * 0.1, ease: "easeOut" }}
      className="h-full"
    >
      <Link 
        href={`/work/${project.slug}`} 
        onClick={handleClick}
        className="block group h-full"
      >
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="h-full rounded-3xl glass-card hover:bg-white/80 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
        >
          {project.thumbnail && (
            <div className="relative w-full h-48 md:h-56 overflow-hidden bg-slate-100">
              <Image
                src={project.thumbnail}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="flex-1 p-6 md:p-8 flex flex-col">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-normal mb-3 text-slate-950 group-hover:text-slate-700 transition-colors">
                {project.name}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                {project.description}
              </p>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            </div>
            <div className="mt-6 text-sm text-slate-500 group-hover:text-slate-700 transition-colors flex items-center gap-2">
            View project
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function WorkSection() {
  return (
    <section
      id="work"
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4">
            Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

