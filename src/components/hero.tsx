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

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block h-[80px] w-[calc(100%+1.3px)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.15,116.32,109.58,175,109.11,234.34,108.64,286.42,88.72,321.39,56.44Z"
            fill="#FDF6EC"
          />
        </svg>
      </div>
    </section>
  );
}
