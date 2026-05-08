import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiJavascript,
  SiLaravel,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { FaGithub, FaHtml5, FaCss3 } from "react-icons/fa";

export default function Projects() {
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

  const projects = [
    {
      title: "Kepto Fintech",
      type: "Fintech Website",
      year: "2026",
      description:
        "A premium fintech website focused on digital payments, bill payments, BBPS-style service pages, responsive sections, and polished frontend design.",
      stack: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3 },
        { name: "Javascript", icon: SiJavascript },
        { name: "Tailwind", icon: SiTailwindcss },
      ],
      live: "https://keptofintech.netlify.app",
      github: "https://github.com/devsharma5824/Kepto-Fintech.git",
    },
    {
      title: "VH Entertainment",
      type: "Movie Website",
      year: "2026",
      description:
        "A dark premium dashboard interface with cards, responsive tables, filter sections, AJAX-friendly layouts, sidebar behavior, and clean admin UI polish.",
      stack: [
        { name: "React", icon: SiReact },
        { name: "Framer", icon: SiFramer },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind", icon: SiTailwindcss },
      ],
      live: "https://vhentertainment.netlify.app",
      github: "https://github.com/devsharma5824/Vh-Entertainment.git",
    },
    {
      title: "Portfolio Website",
      type: "Personal Website",
      year: "2026",
      description:
        "A black and white liquid-glass portfolio with smooth page transitions, animated navbar, Framer Motion reveals, Lenis smooth scroll, and responsive sections.",
      stack: [
        { name: "React", icon: SiReact },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Framer", icon: SiFramer },
      ],
      live: "https://devsharmaa04.netlify.app",
      github: "https://github.com/devsharma5824/Portfolio.git",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-white/10 blur-[160px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-white/10 blur-[170px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
      </div>

      <section className="relative z-10 px-5 pb-24 pt-40 sm:px-8 md:px-12 lg:pt-44">
        <div className="mx-auto max-w-[1800px]">
          {/* heading */}
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
                Selected Work / Projects
              </motion.div>

              <h1 className="max-w-6xl text-[4rem] font-semibold leading-[0.86] tracking-[-0.07em] text-white sm:text-[13vw] lg:text-[6vw]">
                <span className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "120%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    Projects
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
              A collection of websites, dashboards, APIs, and frontend projects
              built with smooth animations, clean layouts, and black-white
              premium styling.
            </motion.p>
          </div>

          {/* featured large project */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.48 }}
            className="mt-20 overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-2xl md:p-8"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-white/35">
                  Featured Project
                </p>

                <h2 className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.07em] text-white md:text-7xl">
                  Portfolio experience.
                </h2>

                <p className="mt-7 max-w-2xl text-base leading-8 text-white/45">
                  A curated collection of projects highlighting modern UI
                  design, responsive layouts, smooth interactions, and
                  real-world frontend implementation.
                </p>
              </div>

              {/* <a
                href="#project-list"
                className="group relative inline-flex h-14 w-fit items-center justify-center overflow-hidden rounded-full bg-white/5 px-8 text-sm font-bold uppercase text-white transition duration-300 hover:text-black"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Work
                  <ArrowUpRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
                  />
                </span>

                <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-300 ease-out group-hover:translate-y-0" />
              </a> */}
            </div>

            {/* <div className="mt-10 h-[280px] overflow-hidden rounded-[32px] border border-white/10 bg-black/50 p-4 sm:h-[380px]">
              <div className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035]">
                <div className="absolute left-8 top-8 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/80" />
                  <span className="h-3 w-3 rounded-full bg-white/35" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>

                <div className="absolute inset-x-8 bottom-8">
                  <div className="rounded-[28px] border border-white/10 bg-black/60 p-6 backdrop-blur-2xl">
                    <p className="text-sm uppercase tracking-[0.22em] text-white/30">
                      Preview
                    </p>
                    <div className="mt-5 h-4 w-3/4 rounded-full bg-white/20" />
                    <div className="mt-3 h-4 w-1/2 rounded-full bg-white/10" />
                    <div className="mt-8 flex gap-3">
                      <div className="h-12 w-32 rounded-full bg-white" />
                      <div className="h-12 w-12 rounded-full border border-white/10 bg-white/10" />
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{
                    x: [0, 30, -20, 0],
                    y: [0, -20, 25, 0],
                    scale: [1, 1.1, 0.95, 1],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-white/10 blur-3xl"
                />

                <motion.div
                  animate={{
                    x: [0, -30, 20, 0],
                    y: [0, 30, -20, 0],
                    scale: [1, 0.92, 1.08, 1],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[-100px] left-[-80px] h-80 w-80 rounded-full bg-white/10 blur-3xl"
                />
              </div>
            </div> */}
          </motion.div>

          {/* project list */}
          <section id="project-list" className="mt-20 md:mt-28">
            <div className="flex flex-col gap-10">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-2xl transition duration-500 hover:bg-white hover:text-black sm:p-7"
                >
                  <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="max-w-3xl">
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/40 transition group-hover:border-black/10 group-hover:bg-black/5 group-hover:text-black/50">
                          {project.type}
                        </span>

                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/40 transition group-hover:border-black/10 group-hover:bg-black/5 group-hover:text-black/50">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-4xl font-medium leading-none tracking-[-0.07em] text-white transition group-hover:text-black md:text-6xl">
                        {project.title}
                      </h3>

                      <p className="mt-6 max-w-2xl text-base leading-8 text-white/45 transition group-hover:text-black/55">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-5 lg:items-end">
                      <div className="flex flex-wrap gap-3 lg:justify-end">
                        {project.stack.map((tech) => {
                          const Icon = tech.icon;

                          return (
                            <span
                              key={tech.name}
                              className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/60 transition group-hover:border-black/10 group-hover:bg-black/5 group-hover:text-black/60"
                            >
                              <Icon className="text-base" />
                              {tech.name}
                            </span>
                          );
                        })}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.live}
                          target="_blank"
                          className="grid h-13 w-13 place-items-center rounded-full bg-white text-black transition group-hover:bg-black group-hover:text-white"
                          aria-label="View live project"
                        >
                          <ArrowUpRight size={18} />
                        </a>

                        <a
                          href={project.github}
                          className="grid h-13 w-13 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition group-hover:border-black/10 group-hover:bg-black/5 group-hover:text-black"
                          aria-label="View github"
                        >
                          <FaGithub size={18} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </motion.article>
              ))}
            </div>
          </section>

          {/* bottom cta */}
          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 md:mt-32 rounded-[40px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl md:p-12"
          >
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.07em] md:text-7xl">
              Have a project idea?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
              I can help with portfolios, landing pages, dashboard UI, frontend
              animations, and responsive web experiences.
            </p>

            <a
              href="mailto:devsharmaa04@gmail.com"
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
            </a>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
