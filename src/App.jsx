import { useEffect } from "react";
import Lenis from "lenis";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import NavBar from "./components/NavBar";
import PageLoader from "./components/PageLoader";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    let lenis;
    let rafId;

    function initLenis() {
      const isSmallScreen = window.innerWidth < 640;

      if (isSmallScreen) {
        if (lenis) {
          lenis.destroy();
          lenis = null;
        }

        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }

        return;
      }

      if (lenis) return;

      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.4,
      });

      function raf(time) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    initLenis();

    window.addEventListener("resize", initLenis);

    return () => {
      window.removeEventListener("resize", initLenis);

      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <>
      <PageLoader />

      <main className="min-h-screen bg-black md:px-4 font-[Poppins] sm:px-7 md:px-12">
        <ScrollToTop />
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
