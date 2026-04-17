import Image from "next/image";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="grid min-h-[440px] grid-cols-1 md:grid-cols-[1.25fr_1fr]">
      <div className="order-2 flex flex-col justify-between px-6 py-10 md:order-1 md:px-12 md:py-14">
        <div>
          <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
            {content.brand.mpgTag}
          </div>

          <div className="w-full max-w-[280px]">
            <Image
              src="/sprinten-logo-expanded.png"
              alt={content.brand.tagline}
              width={280}
              height={307}
              priority
              className="h-auto w-full"
            />
          </div>

          <p className="mt-6 max-w-[440px] text-[15px] leading-[1.6] text-brown-muted">
            {content.hero.description}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2.5 text-[11px] text-brown-muted">
          <div className="h-px w-7 bg-brown" />
          <span>{content.hero.scrollHint}</span>
        </div>
      </div>

      <div className="relative order-1 aspect-[4/3] bg-cream-warm md:order-2 md:aspect-auto md:min-h-[320px]">
        <Image
          src="/hero.png"
          alt={content.hero.photoAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/15 to-teal/10" />
      </div>
    </section>
  );
}
