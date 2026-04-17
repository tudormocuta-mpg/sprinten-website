import { content } from "@/lib/content";

export function SectionContact() {
  const {
    number,
    label,
    titlePrefix,
    titleEmphasis,
    titleSuffix,
    paragraph,
    email,
  } = content.contact;

  return (
    <section id="contact" className="px-6 py-[70px] md:px-12 md:py-[90px]">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
          {number} · {label}
        </div>
        <h2 className="mb-6 font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-brown md:text-[32px]">
          {titlePrefix}
          <em className="italic text-terracotta">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <p className="mb-8 text-[15px] leading-[1.7] text-brown-muted">{paragraph}</p>
        <a
          href={`mailto:${email}`}
          className="inline-block break-all font-serif text-[22px] font-medium tracking-[-0.01em] text-terracotta hover:underline md:text-[28px]"
        >
          {email}
        </a>
      </div>
    </section>
  );
}
