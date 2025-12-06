"use client";

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Fiverr",
    description: "Marketplace platform redesign focusing on improved seller workflows and enhanced user trust.",
    link: "https://www.notion.so/Fiverr-Case-Study",
  },
  {
    name: "Just Eat Takeaway",
    description: "Food delivery platform optimization with emphasis on order tracking and user satisfaction.",
    link: "https://www.notion.so/Just-Eat-Takeaway-Case-Study",
  },
  {
    name: "SundaySky",
    description: "Video personalization platform with focus on scalable design systems and component libraries.",
    link: "https://www.notion.so/SundaySky-Case-Study",
  },
  {
    name: "Elision",
    description: "Fintech dashboard redesign with emphasis on data visualization and role-based permissions.",
    link: "https://www.notion.so/Elision-Case-Study",
  },
  {
    name: "Strength Athletics",
    description: "Fitness platform design with focus on workout tracking and user engagement.",
    link: "https://www.notion.so/Strength-Athletics-Case-Study",
  },
  {
    name: "Melio",
    description: "B2B payments platform with vendor management and streamlined payment workflows.",
    link: "https://www.notion.so/Melio-Case-Study",
  },
];

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
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="py-6 border-b border-slate-800 hover:border-slate-600 transition-colors">
                  <h3 className="text-2xl md:text-3xl font-normal mb-2 text-slate-50 group-hover:text-slate-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

