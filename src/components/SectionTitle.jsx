import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
        <Sparkles size={14} /> {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {text && <p className="mt-4 text-base leading-7 text-white/55">{text}</p>}
    </Reveal>
  );
}
