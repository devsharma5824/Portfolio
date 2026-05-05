import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MagneticButton({ children, className = "", href }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 180, damping: 18, mass: 0.25 });

  function handleMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    x.set(relX * 0.2);
    y.set(relY * 0.2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const content = (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "group relative inline-flex overflow-hidden rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-sm font-semibold text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-lime-300/60 hover:bg-lime-300 hover:text-black",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition duration-700 group-hover:translate-x-full" />
    </motion.span>
  );

  if (href) return <a href={href}>{content}</a>;

  return content;
}
