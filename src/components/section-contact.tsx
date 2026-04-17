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
    <section id="contact" className="px-8 py-[90px] md:px-12">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
          {number} · {label}
        </div>
        <h2 className="mb-6 font-serif text-[32px] font-medium leading-[1.2] tracking-[-0.01em] text-brown">
          {titlePrefix}
          <em className="italic text-terracotta">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <p className="mb-8 text-[15px] leading-[1.7] text-brown-muted">{paragraph}</p>
        <a
          href={`mailto:${email}`}
          className="inline-block font-serif text-[28px] font-medium tracking-[-0.01em] text-terracotta hover:underline"
        >
          {email}
        </a>
      </div>
    </section>
  );
}
