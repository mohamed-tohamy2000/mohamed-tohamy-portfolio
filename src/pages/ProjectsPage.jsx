import { useMemo } from "react";
import PageWrapper from "../components/common/PageWrapper";
import PanelSection from "../components/ui/PanelSection";
import ProjectsHero from "../sections/projects/ProjectsHero";
import ProjectsFilter from "../sections/projects/ProjectsFilter";
import ProjectsGrid from "../sections/projects/ProjectsGrid";
import { projectsData } from "../data/projects.data";
import { useProjectsFilter } from "../hooks/useProjectsFilter";

export default function ProjectsPage() {
  const projects = useMemo(() => projectsData, []);
  const { activeFilter, setActiveFilter, filteredProjects } =
    useProjectsFilter(projects);

  return (
    <PageWrapper>
      <ProjectsHero />

      <PanelSection sectionClassName="pb-16 pt-0 md:pb-24" panelClassName="p-6 md:p-8">
        <ProjectsFilter
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />
        <ProjectsGrid projects={filteredProjects} />
      </PanelSection>
    </PageWrapper>
  );
}
