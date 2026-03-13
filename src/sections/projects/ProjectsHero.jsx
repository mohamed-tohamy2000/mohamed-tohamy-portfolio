import PanelSection from "../../components/ui/PanelSection";

export default function ProjectsHero() {
  return (
    <PanelSection sectionClassName="pb-4" panelClassName="section-header-line px-6 pb-8 pt-6 md:px-8">
      <p className="mb-2 text-xs uppercase tracking-[0.35em] text-primary">
        Portfolio Work
      </p>
      <h1 className="text-4xl font-bold text-base-content md:text-5xl">
        Projects & UI Experiments
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-base-content/65 md:text-base">
        Projects are structured in a way that makes data easy to edit now, and easy to switch
        later to an API source like Strapi.
      </p>
    </PanelSection>
  );
}
