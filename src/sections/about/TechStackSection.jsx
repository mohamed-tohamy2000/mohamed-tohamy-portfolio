import { motion } from "framer-motion";
import PanelSection from "../../components/ui/PanelSection";
import SectionTitle from "../../components/ui/SectionTitle";

const groupedStack = [
  {
    title: "Core",
    items: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "DaisyUI", "Bootstrap"],
  },
  {
    title: "Animation",
    items: ["Framer Motion", "GSAP Concepts", "Micro Interactions"],
  },
  {
    title: "Tools",
    items: ["Git", "VS Code", "Chrome DevTools", "Strapi-ready setup"],
  },
];

export default function TechStackSection() {
  return (
    <PanelSection panelClassName="p-6 md:p-8">
      <SectionTitle
        eyebrow="Technical Stack"
        title="Tools I Build With"
        description="This section is content-driven and easy to replace from a CMS later."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {groupedStack.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glass-card rounded-3xl p-6"
          >
            <h3 className="mb-4 text-xl font-semibold text-base-content">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="badge badge-outline border-base-300 px-3 py-3 text-base-content/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PanelSection>
  );
}
