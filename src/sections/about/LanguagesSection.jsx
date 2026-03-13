import { motion } from "framer-motion";
import PanelSection from "../../components/ui/PanelSection";
import SectionTitle from "../../components/ui/SectionTitle";
import { personalData } from "../../data/personal.data";

export default function LanguagesSection() {
  return (
    <PanelSection panelClassName="p-6 md:p-8">
      <SectionTitle
        eyebrow="Communication"
        title="Languages"
        description="Simple data-driven section that you can later move to Strapi as well."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {personalData.languages.map((language, index) => (
          <motion.div
            key={language.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-card rounded-3xl p-6"
          >
            <p className="text-xl font-semibold text-base-content">{language.name}</p>
            <p className="mt-2 text-sm text-base-content/65">{language.level}</p>
          </motion.div>
        ))}
      </div>
    </PanelSection>
  );
}
