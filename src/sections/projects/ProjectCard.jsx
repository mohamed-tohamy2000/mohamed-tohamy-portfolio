import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-[1.6rem] p-4"
    >
      <div className="mb-4 overflow-hidden rounded-2xl border border-emerald-300/15">
        <img src={project.image} alt={project.title} className="h-40 w-full object-cover" />
      </div>

      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-base-content">{project.title}</h3>
          <p className="mt-2 text-sm text-base-content/65">{project.category}</p>
        </div>
        <span className="badge badge-outline border-base-300 text-base-content/85">
          {project.id.toString().padStart(2, "0")}
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="badge badge-outline border-base-300 text-base-content/85">
            {item}
          </span>
        ))}
      </div>

      <p className="mb-5 text-sm leading-7 text-base-content/65">{project.description}</p>

      <div className="flex gap-3">
        <a href={project.liveUrl} className="btn btn-success flex-1 text-black">
          View Live
        </a>
        <a href={project.githubUrl} className="btn btn-outline flex-1 border-base-300">
          View Code
        </a>
      </div>
    </motion.article>
  );
}


