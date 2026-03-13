import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 500, damping: 40 });
  const springY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleMedia = () => setIsDesktop(mediaQuery.matches);
    handleMedia();
    mediaQuery.addEventListener("change", handleMedia);

    const handleMove = (event) => {
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
    };

    const handleOver = (event) => {
      const target = event.target.closest("a, button, input, textarea");
      setIsHovering(Boolean(target));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      mediaQuery.removeEventListener("change", handleMedia);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [x, y]);

  if (!isDesktop) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-primary/60 bg-primary/10 mix-blend-screen"
      style={{
        x: springX,
        y: springY,
        width: isHovering ? 42 : 24,
        height: isHovering ? 42 : 24,
        boxShadow: isHovering
          ? "0 0 24px rgba(34,197,94,0.35)"
          : "0 0 12px rgba(34,197,94,0.2)",
      }}
    />
  );
}

