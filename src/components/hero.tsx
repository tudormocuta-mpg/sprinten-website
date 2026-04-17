import Image from "next/image";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="bg-forest text-cream">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-[1.15fr_1fr] md:gap-12 md:px-12 md:py-20">
        <div className="order-2 md:order-1">
          <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-peach">
            {content.brand.mpgTag}
          </div>

          <h1 className="font-serif text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-cream md:text-[52px]">
            {content.hero.titlePrefix}
            <br />
            <em className="italic text-peach">{content.hero.titleEmphasis}</em>
            {content.hero.titleSuffix}
          </h1>

          <p className="mt-6 max-w-[460px] text-[15px] leading-[1.65] text-cream/75">
            {content.hero.description}
          </p>

          <a
            href={content.hero.ctaHref}
            className="mt-7 inline-block rounded-full bg-terracotta px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-terracotta/90"
          >
            {content.hero.ctaLabel}
          </a>
        </div>

        <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-xl md:order-2">
          <Image
            src="/hero.png"
            alt={content.hero.photoAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
