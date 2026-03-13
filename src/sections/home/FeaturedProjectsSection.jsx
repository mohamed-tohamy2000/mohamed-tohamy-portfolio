import { motion } from "framer-motion";
import { projectsData } from "../../data/projects.data";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import Button from "../../components/ui/Button";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";

const featuredProjects = projectsData.filter((project) => project.featured);

export default function FeaturedProjectsSection() {
  return (
    <section className="section-space">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="panel-shell p-6 md:p-8"
        >
          <div className="section-header-line mb-12">
            <SectionTitle
              eyebrow="Selected Work"
              title="Featured Projects"
              description="These are sample items for now. Later you can switch the data source to Strapi from the service layer only."
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="glass-card rounded-3xl p-5"
              >
                <div className="mb-4 overflow-hidden rounded-2xl border border-emerald-300/15">
                  <img src={project.image} alt={project.title} className="h-36 w-full object-cover" />
                </div>

                <p className="text-lg font-bold text-base-content">{project.title}</p>
                <p className="mb-2 mt-1 text-sm text-base-content/75">{project.category}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="badge badge-outline border-base-300 text-base-content/85">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mb-5 text-sm leading-7 text-base-content/65">
                  {project.description}
                </p>

                <Button to="/projects" variant="outline" className="w-full">
                  Explore Project
                </Button>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


