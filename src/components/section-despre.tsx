import { content } from "@/lib/content";

export function SectionDespre() {
  const { number, label, titlePrefix, titleEmphasis, titleSuffix, paragraphs } =
    content.despre;

  return (
    <section id="despre" className="mx-auto max-w-[760px] px-6 py-16 md:px-12 md:py-20">
      <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
        {number} · {label}
      </div>
      <h2 className="mb-6 font-serif text-[26px] font-medium leading-[1.15] tracking-[-0.02em] text-brown md:text-[34px]">
        {titlePrefix}
        <em className="italic text-terracotta">{titleEmphasis}</em>
        {titleSuffix}
      </h2>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="mb-3.5 text-[16px] leading-[1.7] text-brown last:mb-0"
        >
          {p}
        </p>
      ))}
    </section>
  );
}
