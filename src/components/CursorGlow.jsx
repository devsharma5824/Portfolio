import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 70, damping: 20 });
  const springY = useSpring(y, { stiffness: 70, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 180);
      y.set(e.clientY - 180);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[360px] w-[360px] rounded-full bg-lime-300/10 blur-3xl lg:block"
    />
  );
}
