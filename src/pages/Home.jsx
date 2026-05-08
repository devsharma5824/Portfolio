import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers, Mail, Sparkles } from "lucide-react";
import heroVideo from "../assets/right_vid1.mp4";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
} from "react-icons/si";
import { FaHtml5, FaCss3, FaBootstrap, FaGitAlt } from "react-icons/fa";

const revealUp = {
  hidden: {
    y: "120%",
  },
  show: {
    y: "0%",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 38,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function TextReveal({ children, className = "", delay }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        variants={revealUp}
        initial="hidden"
        animate="show"
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Home() {
  const techStack = [
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Framer", icon: SiFramer },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "Git", icon: FaGitAlt },
    { name: "CSS3", icon: FaCss3 },
    { name: "HTML5", icon: FaHtml5 },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center px-5 pb-10 pt-34 md:pt-22 sm:px-8 md:px-12"
      >
        <div className="mx-auto grid w-full max-w-[1800px] items-end gap-12 lg:grid-cols-[1.15fr_.85fr]">
          {/* LEFT CONTENT */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 backdrop-blur-xl"
            >
              <Sparkles size={15} className="text-white" />
              Frontend Developer / Full Stack Learner
            </motion.div>

            <h1 className="max-w-6xl text-[4rem] font-semibold leading-[0.86] tracking-[-0.07em] text-white sm:text-[13vw] lg:text-[6vw]">
              <TextReveal delay={1}>Smooth</TextReveal>
              <TextReveal delay={2}>websites</TextReveal>
              <TextReveal delay={3}>with feel.</TextReveal>
            </h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.45 }}
              className="mt-8 grid max-w-3xl gap-6 md:grid-cols-[1fr_auto]"
            >
              <p className="max-w-xl text-base leading-8 text-white/55 md:text-lg">
                I build premium, responsive, animated web interfaces using
                React, Tailwind, Framer Motion and modern frontend tools.
              </p>

              <div className="flex items-start gap-3">
                <Link
                  to="/projects"
                  className="group relative hidden h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 px-7 text-sm font-bold uppercase text-white shadow-[0_20px_70px_rgba(0,0,0,0.18)] sm:inline-flex hover:text-black transition duration-300"
                >
                  <span className="relative z-10 flex items-center gap-3 ">
                    View Work{" "}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className=" transition duration-300 z-2 group-hover:translate-x-0.5 group-hover:text-black group-hover:-translate-y-0.5"
                  />
                  <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-250 ease-out group-hover:translate-y-0" />
                </Link>

                <a
                  href="mailto:devsharmaa04@gmail.com"
                  className="group grid h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:bg-white hover:text-black"
                  aria-label="Contact"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.35 }}
            className="relative mx-auto w-full "
          >
            <div className="relative overflow-hidden rounded-[36px] bg-black p-0 shadow-[0_40px_140px_rgba(0,0,0,0.65)]">
              <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="h-[360px] w-full rounded-[36px] bg-black object-cover brightness-75 contrast-125 sm:h-[430px] lg:h-[520px]"
              />

              <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-black/25" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BOTTOM STRIP */}
      <section className="relative z-10 px-5 py-20 sm:px-8 md:px-14 lg:px-16">
        <div className="mx-auto max-w-[1800px]">
          <div className="mb-8 flex items-end justify-between gap-6">
            <h2 className="max-w-xl text-4xl font-medium tracking-[-0.07em] text-white md:text-6xl">
              Tech I work with
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {techStack.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-4 md:p-6 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-black"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <Icon className="text-4xl text-white/70 transition duration-500 group-hover:text-black" />
                    <span className="text-xl opacity-0 transition duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium tracking-[-0.06em] text-white transition duration-500 group-hover:text-black">
                    {tech.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
