"use client";

import Link from "next/link";
import { projects } from "@/data/projects";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-12">
            Work
          </h2>

          <div className="space-y-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="block group"
              >
                <div className="py-6 border-b border-slate-200 hover:border-slate-400 transition-colors">
                  <h3 className="text-2xl md:text-3xl font-normal mb-2 text-slate-950 group-hover:text-slate-700 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

