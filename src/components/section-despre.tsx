import { ChevronRight } from "lucide-react";
import { content } from "@/lib/content";

export function SectionDespre() {
  const { number, label, titlePrefix, titleEmphasis, titleSuffix, paragraphs } =
    content.despre;

  return (
    <section id="despre" className="relative bg-cream px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[860px] text-center">
        <h2 className="mb-4 text-[12px] font-bold uppercase tracking-[0.3em] text-terracotta">
          {number} . {label.toUpperCase()}
        </h2>
        <h3 className="mb-10 font-sans text-[36px] font-extrabold leading-tight tracking-tight text-forest md:text-[56px]">
          {titlePrefix}
          <span className="italic text-teal">{titleEmphasis}</span>
          {titleSuffix}
        </h3>
        <div className="space-y-6 text-[16px] leading-relaxed text-brown-muted md:text-[18px]">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="#principii"
            className="inline-flex items-center font-bold uppercase tracking-[0.2em] text-forest text-[12px] transition-transform hover:translate-x-2"
          >
            Vezi principiile noastre
            <ChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
