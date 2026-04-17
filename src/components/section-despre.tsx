import { content } from "@/lib/content";

export function SectionDespre() {
  const { number, label, titlePrefix, titleEmphasis, titleSuffix, paragraphs } =
    content.despre;

  return (
    <section id="despre" className="px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
          {number} · {label}
        </div>
        <h2 className="mb-8 font-serif text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-brown md:text-[36px]">
          {titlePrefix}
          <em className="italic text-terracotta">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="mb-4 text-[15px] leading-[1.75] text-brown-muted last:mb-0 md:text-[16px]"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
