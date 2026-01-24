"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function BentoPortfolio() {
  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/joshuagoldberg", icon: "𝕏" },
    { name: "GitHub", url: "https://github.com/joshuagoldberg", icon: "↗" },
    { name: "LinkedIn", url: "https://linkedin.com/in/joshuagoldberg", icon: "in" },
    { name: "Email", url: "mailto:hello@joshuagoldberg.com", icon: "@" },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-fr">
          {/* Profile Card - Large, spans 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-slate-200 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <h1 className="text-4xl lg:text-5xl font-normal mb-3 text-slate-950">
              Joshua Goldberg
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 mb-4">
              Product Designer
            </p>
            <p className="text-base lg:text-lg text-slate-500 leading-relaxed">
              Creating clear, trustworthy interfaces and calm, minimal experiences for complex B2B products and fintech platforms.
            </p>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-slate-200 p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <h2 className="text-xl font-medium mb-4 text-slate-950">Connect</h2>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors duration-200 group"
                >
                  <span className="text-lg font-medium">{link.icon}</span>
                  <span className="text-sm text-slate-700 group-hover:text-slate-900">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Project Cards */}
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <Link href={`/work/${project.slug}`} className="block h-full">
                {project.thumbnail && (
                  <div className="relative w-full h-40 lg:h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                )}
                <div className="p-5 lg:p-6">
                  <h3 className="text-xl lg:text-2xl font-medium mb-2 text-slate-950 group-hover:text-slate-700 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-600 leading-relaxed mb-3">
                    {project.description.length > 100 
                      ? `${project.description.substring(0, 100)}...` 
                      : project.description}
                  </p>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

