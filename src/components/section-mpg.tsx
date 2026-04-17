import { content } from "@/lib/content";

export function SectionMPG() {
  const {
    number,
    label,
    titlePrefix,
    titleEmphasis,
    titleSuffix,
    paragraph,
    linkText,
    linkHref,
  } = content.mpg;

  return (
    <section id="mpg" className="bg-teal px-6 py-[70px] text-cream md:px-12 md:py-[90px]">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-peach">
          {number} · {label}
        </div>
        <h2 className="mb-6 font-serif text-[24px] font-medium leading-[1.25] tracking-[-0.01em] md:text-[30px]">
          {titlePrefix}
          <em className="italic text-peach">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <p className="mb-7 text-[15px] leading-[1.7] text-cream/85">{paragraph}</p>
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 border-b border-cream/50 pb-1 text-[13px] font-semibold tracking-[0.02em] text-cream hover:border-cream"
        >
          {linkText} <span className="text-[16px]">→</span>
        </a>
      </div>
    </section>
  );
}
