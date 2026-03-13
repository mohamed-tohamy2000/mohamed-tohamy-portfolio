import { motion } from "framer-motion";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

export default function CTASection() {
  return (
    <section className="section-space">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="panel-shell rounded-[2rem] p-8 text-center md:p-12"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-primary">
            Let&apos;s build something
          </p>
          <h2 className="text-3xl font-bold text-base-content md:text-4xl">
            Clean code. Smooth UI. Easy to scale.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-base-content/65 md:text-base">
            The project is split into clean sections and reusable components so updates stay fast
            and simple, even if you connect it to Strapi later.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/contact">Start a Conversation</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}


