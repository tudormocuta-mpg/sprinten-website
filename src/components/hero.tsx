import Image from "next/image";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="grid min-h-[440px] md:grid-cols-[1.25fr_1fr]">
      <div className="flex flex-col justify-between px-8 py-10 md:px-12 md:py-14">
        <div>
          <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
            {content.brand.mpgTag}
          </div>

          <div className="w-full max-w-[440px]">
            <Image
              src="/sprinten-logo-expanded.svg"
              alt={content.brand.tagline}
              width={440}
              height={248}
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

      <div className="relative min-h-[320px] bg-cream-warm">
        <Image
          src="/hero.jpg"
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
