import { motion } from "framer-motion";

const statusItems = ["Loading assets", "Preparing projects", "Almost ready"];

export default function InitialLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9998] grid place-items-center overflow-hidden bg-base-100 text-base-content"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="loader-grid absolute inset-0 opacity-70" />
      <div className="loader-scan absolute inset-x-0 top-0 h-24" />

      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative w-[min(88vw,420px)] px-6 text-center"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          Booting Interface
        </p>

        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-2xl border border-primary/35 bg-base-200/70 shadow-glow backdrop-blur-xl">
          <motion.span
            animate={{ opacity: [0.55, 1, 0.55], scale: [0.96, 1, 0.96] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="font-mono text-2xl font-bold text-primary"
          >
            AZ
          </motion.span>
        </div>

        <div className="mb-4 h-1 overflow-hidden rounded-full bg-base-300">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.25, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-2/3 rounded-full bg-primary shadow-[0_0_18px_rgba(34,197,94,0.65)]"
          />
        </div>

        <div className="h-6 overflow-hidden font-mono text-sm text-base-content/70">
          <motion.div
            animate={{ y: ["0%", "-33.333%", "-66.666%", "-66.666%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "steps(3)" }}
          >
            {statusItems.map((item) => (
              <p key={item} className="h-6">
                {item}
                <span className="text-primary">...</span>
              </p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
