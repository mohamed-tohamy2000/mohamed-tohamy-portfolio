import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillsData } from "../../data/skills.data";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 78%",
        },
        y: 80,
        opacity: 0,
        stagger: 0.16,
        duration: 0.8,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-space" ref={sectionRef}>
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
                className="skill-card glass-card rounded-2xl p-5 transition"
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
