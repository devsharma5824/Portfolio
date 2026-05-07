import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [show, setShow] = useState(true);
  const [lift, setLift] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setLift(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 3300);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 0 }}
          animate={lift ? { y: "-100%" } : { y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1.15,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#080808]"
        >
          {/* soft glass/noise feel */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_45%)]" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

          {/* loading bar */}
          <div className="absolute left-0 top-0 h-[3px] w-full bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full bg-white"
            />
          </div>

          {/* center text */}
          <motion.div
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={
              lift
                ? { opacity: 0, y: -34, filter: "blur(10px)" }
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={{
              duration: lift ? 0.65 : 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 px-6 text-center"
          >
            {/* <p className="text-sm font-medium uppercase tracking-[0.35em] text-white/35">
              Portfolio
            </p> */}

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.07em] text-white sm:text-6xl">
              Hi, I am Dev Sharma
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
