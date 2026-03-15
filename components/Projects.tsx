import { portfolioData } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold tracking-tight mb-16 text-center text-white">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            Projects
          </span>
        </h2>

        <div className="space-y-12">

          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}

        </div>

      </div>

    </section>
  );
}