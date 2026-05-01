import { motion } from "framer-motion";
import { skillsData } from "../../data/skills.data";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";

export default function SkillsSection() {
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
              eyebrow="Core Stack"
              title="Skills & Tools"
              description="Skills are kept in a separate data file so you can easily edit or later fetch them from Strapi."
            />
          </div>

          <motion.div
            variants={staggerContainer}
            className="skills-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skillsData.map((skill) => (
              <motion.div
                key={skill.id}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="skill-card glass-card rounded-2xl p-5"
              >
                <p className="text-lg font-semibold text-base-content">{skill.name}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-primary">
                  {skill.category}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
