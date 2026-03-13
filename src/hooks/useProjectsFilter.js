import { useMemo, useState } from "react";

export function useProjectsFilter(projects) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [projects, activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredProjects,
  };
}

