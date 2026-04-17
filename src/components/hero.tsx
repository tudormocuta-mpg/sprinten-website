import Image from "next/image";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="bg-forest text-cream">
      <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] md:min-h-[520px]">
        <div className="order-2 flex flex-col justify-between px-6 pb-12 pt-10 md:order-1 md:px-12 md:py-16">
          <div>
            <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-peach">
              {content.brand.mpgTag}
            </div>

            <h1 className="font-serif text-[40px] font-medium leading-[1.03] tracking-[-0.02em] text-cream md:text-[58px]">
              {content.hero.titlePrefix}
              <br />
              <em className="italic text-peach">{content.hero.titleEmphasis}</em>
              {content.hero.titleSuffix}
            </h1>

            <p className="mt-7 max-w-[440px] text-[15px] leading-[1.65] text-cream/75">
              {content.hero.description}
            </p>

            <a
              href={content.hero.ctaHref}
              className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-terracotta/90"
            >
              {content.hero.ctaLabel}
            </a>
          </div>

          <div className="mt-10 hidden items-center gap-2.5 text-[11px] text-cream/50 md:flex">
            <div className="h-px w-7 bg-cream/40" />
            <span>{content.hero.scrollHint}</span>
          </div>
        </div>

        <div className="relative order-1 aspect-[4/3] md:order-2 md:aspect-auto md:min-h-[420px]">
          <Image
            src="/hero.png"
            alt={content.hero.photoAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-forest/30 via-transparent to-forest/20" />
        </div>
      </div>
    </section>
  );
}
