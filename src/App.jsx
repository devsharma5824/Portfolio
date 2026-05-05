
import { useEffect } from "react";
import Lenis from "Lenis";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";


export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <main className="min-h-screen bg-black font-[Poppins] px-4 sm:px-7 md:px-12">
      <Home/>
      <NavBar />
    </main>
}