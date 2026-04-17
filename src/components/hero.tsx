import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden px-6 pb-24 pt-16 text-cream md:px-12 md:pb-40 md:pt-24">
      <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-teal opacity-20 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-peach">
            {content.brand.mpgTag}
          </span>
          <h1 className="mb-8 font-sans text-[44px] font-extrabold leading-[1.05] tracking-tight md:text-[68px]">
            {content.hero.titlePrefix}
            <br />
            <span className="italic text-peach">{content.hero.titleEmphasis}</span>
            {content.hero.titleSuffix}
          </h1>
          <p className="mb-10 max-w-lg text-[16px] leading-relaxed text-cream/80 md:text-[18px]">
            {content.hero.description}
          </p>
          <a
            href={content.hero.ctaHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-9 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-cream shadow-lg shadow-black/10 transition-all hover:-translate-y-1 hover:bg-terracotta/85"
          >
            {content.hero.ctaLabel}
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="group relative">
          <div
            className="organic-image-frame relative z-20 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            style={{ aspectRatio: "1 / 1" }}
          >
            <Image
              src="/hero.png"
              alt={content.hero.photoAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="organic-shape-1 absolute -bottom-10 -right-10 z-10 h-48 w-48 bg-terracotta opacity-80 blur-[2px]" />
          <div className="organic-shape-1 absolute -left-12 top-1/2 z-10 h-32 w-32 -translate-y-1/2 bg-teal opacity-60 blur-[1px]" />
        </div>
      </div>

      <div className="absolute -bottom-px left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block h-[90px] w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0,64 C180,96 360,32 540,56 C720,80 900,104 1080,80 C1260,56 1350,40 1440,60 L1440,120 L0,120 Z"
            fill="#FDF6EC"
          />
        </svg>
      </div>
    </section>
  );
}
