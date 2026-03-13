import { motion } from "framer-motion";
import PanelSection from "../../components/ui/PanelSection";
import SectionTitle from "../../components/ui/SectionTitle";
import { certificatesData } from "../../data/certificates.data";

export default function CertificatesSection() {
  return (
    <PanelSection panelClassName="p-6 md:p-8">
      <SectionTitle
        eyebrow="Learning"
        title="Certifications"
        description="Separated into a dedicated data file for simple editing."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {certificatesData.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-card rounded-3xl p-6"
          >
            <p className="text-lg font-semibold text-base-content">{certificate.title}</p>
            <p className="mt-2 text-sm text-base-content/65">{certificate.issuer}</p>
            <p className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {certificate.year}
            </p>
          </motion.div>
        ))}
      </div>
    </PanelSection>
  );
}
