import Image from "next/image";
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
    <section id="contact" className="px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-[960px] grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/sprinten-logo-expanded.png"
            alt={content.brand.tagline}
            width={180}
            height={198}
            className="h-auto w-[150px] md:w-[180px]"
          />
        </div>
        <div className="text-center md:text-left">
          <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
            {number} · {label}
          </div>
          <h2 className="mb-5 font-serif text-[28px] font-semibold leading-[1.2] tracking-[-0.01em] text-brown md:text-[34px]">
            {titlePrefix}
            <em className="italic text-terracotta">{titleEmphasis}</em>
            {titleSuffix}
          </h2>
          <p className="mb-6 text-[15px] leading-[1.7] text-brown-muted">{paragraph}</p>
          <a
            href={`mailto:${email}`}
            className="inline-block break-all font-serif text-[22px] font-medium tracking-[-0.01em] text-terracotta hover:underline md:text-[26px]"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
