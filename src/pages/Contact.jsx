import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
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

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value.trim();
    const mob = form.mob.value.trim();
    const message = form.message.value.trim();

    const yourEmail = "devsharmaa04@gmail.com";

   const subject = encodeURIComponent(
     `Portfolio Contact from ${name || "Visitor"}`,
   );

   const body = encodeURIComponent(
     `Name: ${name}\nMob: ${mob}\n\nMessage:\n${message}`,
   );

   window.open(
     `https://mail.google.com/mail/?view=cm&fs=1&to=${yourEmail}&su=${subject}&body=${body}`,
     "_blank",
   );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <section className="relative z-10 min-h-screen px-5 pb-24 pt-44 sm:px-8 md:px-12 lg:pt-40">
        <div className="mx-auto max-w-[1800px]">
          {/* heading */}
          <h1 className="max-w-6xl text-[4rem] font-semibold leading-[0.86] tracking-[-0.07em] text-white sm:text-[13vw] lg:text-[6vw]">
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
                Contact
              </motion.span>
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.32 }}
            className="mt-8 max-w-2xl text-base leading-8 text-white/45 md:text-lg"
          >
            Have a project, website idea, dashboard, or frontend work? Send me a
            message and I’ll get back to you.
          </motion.p>

          {/* main content */}
          <div className="mt-14 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
            {/* left form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.45 }}
              className="w-full rounded-[28px] border border-white/10 bg-white/[0.035] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-8 md:p-10 lg:max-w-4xl"
            >
              <div className="mb-8 md:mb-12 flex items-center justify-between gap-2  md:gap-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/30">
                    Message
                  </p>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-white md:text-5xl">
                    Tell me about it
                  </h2>
                </div>

                <div className="hidden h-14 w-14 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:grid">
                  <Send size={20} />
                </div>
              </div>

              <div className="space-y-9">
                {/* name */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.55 }}
                  className="group relative"
                >
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.18em] text-white/35">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="peer block w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 md:py-4 text-base text-white outline-none placeholder:text-white/20 focus:border-white/70 sm:text-lg"
                  />

                  <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100" />
                  <span className="pointer-events-none absolute bottom-[-10px] left-1/2 h-6 w-0 -translate-x-1/2 rounded-full bg-white/20 blur-xl transition-all duration-500 peer-focus:w-full" />
                </motion.div>

                {/* email */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.65 }}
                  className="group relative"
                >
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.18em] text-white/35">
                    Mobile
                  </label>

                  <input
                    type="number"
                    name="mob"
                    placeholder="Enter your mobile ( Optional )"
                    className="overflow-y-hidden peer block w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 md:py-4 text-base text-white outline-none placeholder:text-white/20 focus:border-white/70 sm:text-lg"
                  />

                  <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100" />
                  <span className="pointer-events-none absolute bottom-[-10px] left-1/2 h-6 w-0 -translate-x-1/2 rounded-full bg-white/20 blur-xl transition-all duration-500 peer-focus:w-full" />
                </motion.div>

                {/* message */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  transition={{ delay: 0.75 }}
                  className="group relative"
                >
                  <label className="mb-3 block text-sm font-medium uppercase tracking-[0.18em] text-white/35">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Enter your message"
                    className="peer block w-full resize-none border-0 border-b border-white/20 bg-transparent px-0 py-2 md:py-4 text-base text-white outline-none placeholder:text-white/20 focus:border-white/70 sm:text-lg"
                  />

                  <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] peer-focus:scale-x-100" />
                  <span className="pointer-events-none absolute bottom-[-10px] left-1/2 h-6 w-0 -translate-x-1/2 rounded-full bg-white/20 blur-xl transition-all duration-500 peer-focus:w-full" />
                </motion.div>
              </div>

              <button
                type="submit"
                className="group relative mt-8 md:mt-12 inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 px-8 text-sm font-bold uppercase text-white shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:text-black"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Send Message
                  <ArrowUpRight
                    size={18}
                    className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
                  />
                </span>

                <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-300 ease-out group-hover:translate-y-0" />
              </button>
            </motion.form>

            {/* right info */}
            <motion.aside
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.58 }}
              className="w-full min-w-0 lg:sticky lg:top-36 lg:max-w-xl"
            >
              <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl sm:p-8">
                <p className="text-sm uppercase tracking-[0.25em] text-white/30">
                  Contact Info
                </p>

                <h2 className="mt-4 text-4xl font-medium leading-[0.95] tracking-[-0.07em] text-white md:text-5xl">
                  Let’s build something.
                </h2>

                <div className="mt-10 space-y-4">
                  {/* email */}
                  <a
                    href="mailto:devsharmaa04@gmail.com"
                    className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-black/30 p-4 transition duration-300 hover:bg-white hover:text-black"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-black group-hover:text-white">
                        <Mail size={18} />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.18em] text-white/35 transition group-hover:text-black/40">
                          Email
                        </span>

                        <span className="mt-1 hidden truncate text-sm font-medium sm:block">
                          devsharmaa04@gmail.com
                        </span>

                        <span className="mt-1 block text-sm font-medium sm:hidden">
                          Go to mail
                        </span>
                      </span>
                    </span>

                    <ArrowUpRight size={18} />
                  </a>

                  {/* mobile */}
                  <a
                    href="tel:+919887379359"
                    className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-black/30 p-4 transition duration-300 hover:bg-white hover:text-black"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-black group-hover:text-white">
                        <Phone size={18} />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.18em] text-white/35 transition group-hover:text-black/40">
                          Mobile
                        </span>

                        <span className="mt-1 block truncate text-sm font-medium">
                          +91 9887379359
                        </span>
                      </span>
                    </span>

                    <ArrowUpRight size={18} />
                  </a>

                  {/* linkedin */}
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-[24px] border border-white/10 bg-black/30 p-4 transition duration-300 hover:bg-white hover:text-black"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 transition group-hover:bg-black group-hover:text-white">
                        <FaLinkedinIn size={18} />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-[0.18em] text-white/35 transition group-hover:text-black/40">
                          LinkedIn
                        </span>

                        <span className="mt-1 block truncate text-sm font-medium">
                          Dev Sharma
                        </span>
                      </span>
                    </span>

                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              <div className="mt-5 rounded-4xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm text-white/40 backdrop-blur-2xl md:rounded-full">
                Available for frontend, portfolio, landing page and dashboard
                work.
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}
