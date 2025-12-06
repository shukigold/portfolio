import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProjectBySlug, projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen">
      <Header />
      <div className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#work"
            className="text-slate-600 hover:text-slate-950 transition-colors text-sm mb-8 inline-block"
          >
            ← Back to Work
          </Link>

          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-normal mb-4">
                {project.name}
              </h1>
              {project.year && (
                <p className="text-lg text-slate-600 mb-6">{project.year}</p>
              )}
              {project.role && (
                <p className="text-lg text-slate-600 mb-8">Role: {project.role}</p>
              )}
            </div>

            <div className="space-y-8 text-lg md:text-xl text-slate-700 leading-relaxed">
              <p className="text-xl text-slate-800 font-medium">
                {project.longDescription || project.description}
              </p>

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-full text-sm bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.challenge && (
                <div className="pt-8">
                  <h2 className="text-2xl md:text-3xl font-normal mb-4 text-slate-950">
                    Challenge
                  </h2>
                  <p>{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-normal mb-4 text-slate-950">
                    Solution
                  </h2>
                  <p>{project.solution}</p>
                </div>
              )}

              {project.results && (
                <div>
                  <h2 className="text-2xl md:text-3xl font-normal mb-4 text-slate-950">
                    Results
                  </h2>
                  <p>{project.results}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

