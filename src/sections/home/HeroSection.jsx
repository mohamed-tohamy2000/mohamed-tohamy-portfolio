import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { personalData } from "../../data/personal.data";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { fadeUp, staggerContainer } from "../../utils/motionVariants";

export default function HeroSection() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 22,
        duration: 0.75,
        ease: "power2.out",
        delay: 0.2,
      });

      gsap.fromTo(
        ".hero-buttons > *",
        {
          opacity: 0,
          scale: 0.9,
          y: 12,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.6)",
          stagger: 0.12,
          delay: 0.35,
          clearProps: "opacity,transform",
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-space" ref={heroRef}>
      <Container>
        <div className="panel-shell hero-shell overflow-hidden p-6 md:p-8">
          <div className="hero-nebula" />
          <div className="relative z-[1] grid items-center gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.span
                variants={fadeUp}
                className="badge badge-success badge-lg rounded-full px-4 py-4 text-black"
              >
                {personalData.availability}
              </motion.span>

              <motion.div variants={fadeUp}>
                <h1 className="hero-title text-4xl font-black leading-tight text-base-content md:text-6xl">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">
                    {personalData.shortName}
                  </span>
                </h1>
                <p className="hero-subtitle mt-3 text-xl font-semibold text-base-content/75 md:text-2xl">
                  {personalData.role}
                </p>
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="max-w-xl text-sm leading-7 text-base-content/65 md:text-base"
              >
                {personalData.summary}
                <br />
                I build interactive, maintainable interfaces with clean structure and smooth UX.
              </motion.p>

              <div className="hero-buttons flex flex-wrap gap-4">
                <Button to="/projects">View Projects</Button>
                <Button
                  variant="outline"
                  href={personalData.cvUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download CV
                </Button>
              </div>

              {/* <motion.div variants={fadeUp} className="hero-stats-strip">
                {personalData.stats.map((stat) => (
                  <div key={stat.id} className="hero-stat-item">
                    <p className="text-3xl font-black text-base-content">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-base-content/65">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative self-end"
            >
              <img
                src={personalData.heroImage}
                alt={personalData.shortName}
                className="hero-portrait"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
