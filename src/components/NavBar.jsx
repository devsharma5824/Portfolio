import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {Link , NavLink } from "react-router-dom";

const MotionLink = motion(Link);

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const menuWrap = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.03,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const menuCard = {
  hidden: {
    opacity: 0,
    y: -36,
    scale: 0.96,
    filter: "blur(14px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -26,
    scale: 0.96,
    filter: "blur(12px)",
    transition: {
      duration: 0.32,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const loadFromGround = {
  hidden: {
    y: 46,
    opacity: 0,
    filter: "blur(12px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

   useEffect(() => {
     setOpen(false);
   }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-[999] px-4 pt-6 sm:px-7 md:px-12">
      <nav className="mx-auto flex max-w-[1800px] items-center gap-6 px-4 sm:px-10">
        {/* LEFT NAME */}
        <Link
          to="/"
          className="group relative inline-flex pt-2 text-2xl font-black uppercase text-white mix-blend-difference md:text-3xl"
        >
          <span className="relative h-[36px] overflow-hidden leading-[36px]">
            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
              DEV
            </span>

            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
              DEV
            </span>
          </span>
        </Link>

        {/* RIGHT BUTTONS */}
        <motion.div
          ref={menuRef}
          variants={loadFromGround}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.18 }}
          className="relative ml-auto flex items-start gap-2 sm:gap-3"
        >
          <NavLink
            to="/contact"
            className="group relative hidden h-14 items-center justify-center overflow-hidden rounded-full bg-white/5 px-7 text-sm font-bold uppercase text-white shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-300 hover:text-black sm:inline-flex"
          >
            <span className="relative z-10 flex items-center gap-3">
              Let&apos;s Talk <span className="text-lg leading-none">•</span>
            </span>
            <span className="absolute inset-0 translate-y-full rounded-full bg-white transition duration-250 ease-out group-hover:translate-y-0" />
          </NavLink>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={() => setOpen((prev) => !prev)}
            className="relative z-20 inline-flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-5 text-sm font-bold uppercase text-black shadow-[0_20px_70px_rgba(0,0,0,0.12)] sm:h-14 sm:px-7"
          >
            <span className="relative h-5 overflow-hidden leading-5">
              <motion.span
                animate={{ y: open ? "-100%" : "0%" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Menu
              </motion.span>

              <motion.span
                animate={{ y: open ? "-100%" : "0%" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                Close
              </motion.span>
            </span>

            <motion.span
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl leading-none"
            >
              ⋮
            </motion.span>
          </motion.button>

          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuWrap}
                initial="hidden"
                animate="show"
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.96,
                  filter: "blur(12px)",
                  transition: {
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className="custom-menu-scroll absolute right-0 top-[64px] max-h-[calc(100vh-90px)] w-[calc(100vw-32px)] max-w-[390px] origin-top-right overflow-y-auto pr-1 sm:top-[70px]"
              >
                <motion.div
                  variants={menuCard}
                  className="overflow-hidden rounded-[24px] bg-white p-3 text-black shadow-[0_30px_100px_rgba(0,0,0,0.18)]"
                >
                  <div className="space-y-1">
                    {navItems.map((link, index) => (
                      <NavLink
                        key={link.label}
                        to={link.to}
                        end={link.to === "/"}
                        onClick={() => setOpen(false)}
                        className="group relative flex h-[62px] items-center justify-between overflow-hidden rounded-full px-5 text-2xl font-medium uppercase tracking-[-0.04em] text-black sm:text-3xl"
                      >
                        {({ isActive }) => (
                          <>
                            <span className="absolute inset-y-1 left-1 right-1 origin-center scale-x-0 rounded-full bg-black opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-hover:opacity-100" />

                            <span className="relative z-10 h-[38px] overflow-hidden leading-[38px]">
                              <motion.span
                                initial={{ y: 38 }}
                                animate={{ y: 0 }}
                                transition={{
                                  duration: 0.65,
                                  delay: 0.08 + index * 0.045,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block"
                              >
                                <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                                  {link.label}
                                </span>

                                <span className="block text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                                  {link.label}
                                </span>
                              </motion.span>
                            </span>

                            <span className="relative z-10 grid h-10 w-10 place-items-center overflow-hidden rounded-full">
                              {isActive && (
                                <span className="absolute h-2.5 w-2.5 rounded-full bg-black transition-all duration-300 group-hover:scale-0" />
                              )}

                              <span className="absolute translate-y-full text-white opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                                →
                              </span>
                            </span>
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={menuCard}
                  className="mt-3 rounded-[24px] bg-white p-7 text-black shadow-[0_30px_100px_rgba(0,0,0,0.18)]"
                >
                  <h3 className="text-4xl font-medium leading-[0.95] tracking-[-0.06em]">
                    Quick contact
                  </h3>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();

                      const message = e.currentTarget.message.value.trim();
                      const yourEmail = "devsharmaa04@gmail.com";

                      const subject = encodeURIComponent("Portfolio Contact");
                      const body = encodeURIComponent(message);

                      window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`;
                    }}
                    className="mt-7 flex min-h-16 items-center rounded-2xl bg-[#eef0f8] px-5 transition"
                  >
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="1"
                      className="max-h-24 min-h-10 flex-1 resize-none overflow-hidden bg-transparent py-3 text-base text-black outline-none placeholder:text-black/30 focus:text-black focus:placeholder:text-black/35"
                    />

                    <button
                      type="submit"
                      className="pl-4 text-4xl leading-none text-black transition duration-300 hover:translate-x-1"
                      aria-label="Send message"
                    >
                      →
                    </button>
                  </form>
                </motion.div>
                {/* <MotionLink
                  variants={menuCard}
                  to="/play"
                  onClick={() => setOpen(false)}
                  className="group mt-3 flex h-20 items-center justify-between overflow-hidden rounded-[22px] bg-white/5 px-7 text-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
                >
                  <span className="text-3xl">☻</span>
                  <span className="mr-auto pl-5 text-2xl font-bold uppercase tracking-[-0.03em]">
                    PLAY
                  </span>
                  <span className="text-4xl transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </MotionLink> */}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </nav>
    </header>
  );
}
