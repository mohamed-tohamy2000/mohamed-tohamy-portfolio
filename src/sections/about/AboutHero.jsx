import { motion } from "framer-motion";
import PanelSection from "../../components/ui/PanelSection";
import { personalData } from "../../data/personal.data";
import WhoAmIBox from "./WhoAmIBox";

export default function AboutHero() {
  return (
    <PanelSection panelClassName="p-6 md:p-8">
      <div className="grid items-start gap-8 lg:grid-cols-[320px,1fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2rem] p-4"
        >
          <img
            src={personalData.aboutImage || personalData.heroImage}
            alt={personalData.shortName}
            className="h-[360px] w-full rounded-[1.5rem] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="section-header-line pb-5">
            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-primary">
              About Me
            </p>
            <h1 className="text-4xl font-bold text-base-content md:text-5xl">
              {personalData.shortName}
            </h1>
            <p className="mt-3 text-lg text-base-content/75">{personalData.role}</p>
          </div>

          <p className="max-w-3xl text-sm leading-8 text-base-content/65 md:text-base">
            {personalData.longSummary}
          </p>

          <WhoAmIBox />
        </motion.div>
      </div>
    </PanelSection>
  );
}
