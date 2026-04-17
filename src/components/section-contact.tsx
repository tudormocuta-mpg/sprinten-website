import Image from "next/image";
import { Mail } from "lucide-react";
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
    <section id="contact" className="bg-white px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="mb-4 text-[12px] font-bold uppercase tracking-[0.3em] text-terracotta">
            {number} . {label.toUpperCase()}
          </h2>
          <h3 className="mb-8 font-sans text-[36px] font-extrabold leading-tight tracking-tight text-forest md:text-[52px]">
            {titlePrefix}
            <span className="italic text-teal">{titleEmphasis}</span>
            {titleSuffix}
          </h3>
          <p className="mb-12 text-[16px] leading-relaxed text-brown-muted md:text-[18px]">
            {paragraph}
          </p>

          <div className="flex items-start gap-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cream text-forest">
              <Mail size={22} />
            </div>
            <div>
              <h5 className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
                Email Direct
              </h5>
              <a
                href={`mailto:${email}`}
                className="break-all font-sans text-[20px] font-bold text-forest hover:text-terracotta md:text-[24px]"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/sprinten-logo-expanded.png"
            alt={content.brand.tagline}
            width={280}
            height={307}
            className="h-auto w-[200px] md:w-[260px]"
          />
        </div>
      </div>
    </section>
  );
}
