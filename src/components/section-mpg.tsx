import { ArrowUpRight } from "lucide-react";
import { content } from "@/lib/content";

export function SectionMPG() {
  const {
    number,
    label,
    titlePrefix,
    titleEmphasis,
    titleSuffix,
    paragraph,
    ctaLabel,
    linkHref,
  } = content.mpg;

  return (
    <section id="mpg" className="bg-cream px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1180px]">
        <div className="relative overflow-hidden rounded-[48px] bg-forest">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <defs>
                <pattern id="dots-mpg" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-mpg)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-12 px-8 py-20 text-center md:px-20 md:py-28 lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <h2 className="mb-4 text-[12px] font-bold uppercase tracking-[0.3em] text-peach">
                {number} . {label.toUpperCase()}
              </h2>
              <h3 className="mb-6 font-sans text-[36px] font-extrabold leading-tight tracking-tight text-cream md:text-[52px]">
                {titlePrefix}
                <br className="hidden md:block" />
                <span className="italic text-peach">{titleEmphasis}</span>
                {titleSuffix}
              </h3>
              <p className="text-[16px] leading-relaxed text-cream/80 md:text-[18px]">{paragraph}</p>
            </div>
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-terracotta px-10 py-5 text-[12px] font-bold uppercase tracking-[0.2em] text-cream shadow-2xl transition-transform hover:scale-105"
            >
              {ctaLabel}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
