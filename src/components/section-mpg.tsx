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
    <section id="mpg" className="bg-forest px-6 py-[80px] text-cream md:px-12 md:py-[110px]">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-peach">
          {number} · {label}
        </div>
        <h2 className="mb-6 font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.01em] md:text-[34px]">
          {titlePrefix}
          <em className="italic text-peach">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <p className="mb-9 text-[15px] leading-[1.7] text-cream/80">{paragraph}</p>
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-peach px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-forest transition hover:bg-peach/90"
        >
          {ctaLabel}
        </a>
      </div>
    </section>
  );
}
