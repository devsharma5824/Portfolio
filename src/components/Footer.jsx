export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-white/40">
      © {new Date().getFullYear()} Dev Sharma. Built with React, Vite, Tailwind
      & Framer Motion.
    </footer>
  );
}
