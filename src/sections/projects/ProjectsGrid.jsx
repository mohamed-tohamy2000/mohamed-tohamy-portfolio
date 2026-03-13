import { AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </AnimatePresence>
    </div>
  );
}

