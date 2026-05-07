import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiGit,
} from "react-icons/si";

export default function About() {
  const stripeRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: stripeRef,
    offset: ["start 70%", "end 40%"],
  });

  const stripeProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.45,
  });

  const revealUp = {
    hidden: { y: "120%" },
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
      y: 42,
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

  const skills = [
    { name: "React", icon: SiReact },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Framer", icon: SiFramer },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Git", icon: SiGit },
  ];

  const experiences = [
    {
      title: "Frontend Designer",
      company: "Kepto Fintech",
      period: "Nov 2025 — May 2026",
      duration: "6 Months",
      text: "Worked on frontend design, responsive layouts, animated sections, admin UI polishing, and premium black-white interface styling for fintech web pages and dashboard screens.",
    },
    {
      title: "Web Development Intern",
      company: "Revolution Software Services Pvt. Ltd.",
      period: "Jan 2023 — Jan 2024",
      duration: "1 Year",
      text: "Developed proficiency in HTML, CSS, JavaScript, and Bootstrap through hands-on projects. Collaborated with team members to troubleshoot issues and improve web functionality.",
    },
    {
      title: "Website Templates",
      company: "Personal / Template Work",
      period: "Project Work",
      duration: "Live Projects",
      text: "Created and deployed responsive website templates including cubertonew1, startpnew1, and bancanew1 on Netlify.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[15%] h-[420px] w-[420px] rounded-full bg-white/10 blur-[160px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-white/10 blur-[170px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      </div>

      <section className="relative z-10 px-5 pb-24 pt-40 sm:px-8 md:px-12 lg:pt-44">
        <div className="mx-auto max-w-[1800px]">
          {/* TOP SECTION */}
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.08 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 backdrop-blur-xl"
              >
                <Sparkles size={15} />
                About Me / Skills / Experience
              </motion.div>

              <h1 className="max-w-6xl text-[15vw] font-semibold leading-[0.82] tracking-[-0.04em] text-white sm:text-[13vw] lg:text-[6.6vw]">
                <span className="block overflow-hidden">
                  <motion.span
                    variants={revealUp}
                    initial="hidden"
                    animate="show"
                    transition={{
                      duration: 0.9,
                      delay: 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    About
                  </motion.span>
                </span>

                <span className="block overflow-hidden">
                  <motion.span
                    variants={revealUp}
                    initial="hidden"
                    animate="show"
                    transition={{
                      duration: 0.9,
                      delay: 0.16,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    Me
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.36 }}
              className="max-w-2xl text-base leading-8 text-white/50 md:text-lg"
            >
              I am a frontend-focused developer who enjoys building smooth,
              responsive, premium web interfaces. I focus on clean layouts,
              motion, glass-style UI, and practical frontend design.
            </motion.p>
          </div>

          {/* ABOUT TEXT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 max-w-5xl"
          >
            <h2 className="text-4xl font-medium tracking-[-0.07em] text-white md:text-6xl">
              Frontend design with smooth interaction.
            </h2>

            <p className="mt-7 max-w-3xl text-base leading-8 text-white/45 md:text-lg">
              I like creating websites and dashboards that feel polished, fast,
              responsive, and visually clean. My work includes landing pages,
              admin interfaces, portfolio pages, animations, and frontend UI
              improvements.
            </p>
          </motion.div>

          {/* SKILLS */}
          <section className="mt-28">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-5xl font-medium tracking-[-0.07em] text-white md:text-7xl">
                Skills
              </h2>

              <p className="max-w-md text-sm leading-6 text-white/40">
                Tools I use for building animated, responsive, and modern web
                experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ delay: index * 0.035 }}
                    className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-black"
                  >
                    <div className="mb-10 flex items-center justify-between">
                      <Icon className="text-4xl text-white/70 transition duration-500 group-hover:text-black" />

                      <span className="translate-y-2 text-2xl opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        ↗
                      </span>
                    </div>

                    <h3 className="text-xl font-medium tracking-[-0.05em] text-white transition duration-500 group-hover:text-black">
                      {skill.name}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* EXPERIENCE */}
          <section ref={stripeRef} className="relative mt-32">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-20"
            >
              <h2 className="text-5xl font-medium tracking-[-0.07em] text-white md:text-7xl">
                Experience
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/45">
                A simple timeline of my frontend work, internship experience,
                and website template projects.
              </p>
            </motion.div>

            {/* DESKTOP CURVED STRIPE */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <svg
                className="absolute left-1/2 top-16 h-[1050px] w-[900px] -translate-x-1/2 overflow-visible"
                viewBox="0 0 900 1050"
                fill="none"
              >
                <path
                  d="M455 0 C120 180 760 335 415 515 C105 675 750 760 445 1050"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="20"
                  strokeLinecap="round"
                />

                <motion.path
                  d="M455 0 C120 180 760 335 415 515 C105 675 750 760 445 1050"
                  stroke="white"
                  strokeWidth="20"
                  strokeLinecap="round"
                  style={{ pathLength: stripeProgress }}
                />
              </svg>
            </div>

            {/* MOBILE STRAIGHT STRIPE */}
            <div className="absolute left-4 top-36 h-[calc(100%-7rem)] w-px bg-white/10 lg:hidden">
              <motion.div
                style={{ scaleY: stripeProgress }}
                className="h-full w-px origin-top bg-white"
              />
            </div>

            <div className="relative space-y-16 lg:space-y-28">
              {experiences.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 70, filter: "blur(14px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative z-10 max-w-xl ${
                    index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                  }`}
                >
                  <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl sm:p-8">
                    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
                          {item.company}
                        </p>

                        <h3 className="mt-3 text-3xl font-medium leading-none tracking-[-0.06em] text-white md:text-4xl">
                          {item.title}
                        </h3>
                      </div>

                      <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/45">
                        {item.duration}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-white/35">
                      {item.period}
                    </p>

                    <p className="mt-5 text-base leading-8 text-white/50">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* BOTTOM CTA */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-32 rounded-[40px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:p-12"
          >
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.07em] md:text-7xl">
              I build clean frontend experiences.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
              Open to frontend work, portfolio websites, landing pages,
              dashboards, and animated UI sections.
            </p>

            <Link
              to="/contact"
              className="group relative mt-9 inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 px-8 text-sm font-bold uppercase text-white transition duration-300 hover:text-black"
            >
              <span className="relative z-10 flex items-center gap-3">
                Contact Me
                <ArrowUpRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
                />
              </span>

              <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-300 ease-out group-hover:translate-y-0" />
            </Link>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
