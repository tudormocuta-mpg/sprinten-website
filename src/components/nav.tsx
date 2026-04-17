import Image from "next/image";
import { Menu } from "lucide-react";
import { content } from "@/lib/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-cream/10 bg-forest px-6 py-5 md:px-12">
      <a
        href="#top"
        className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
        aria-label={content.brand.name}
      >
        <Image
          src="/sprinten-logo.svg"
          alt={content.brand.name}
          width={62}
          height={56}
          priority
          className="h-10 w-auto [filter:brightness(0)_invert(1)]"
        />
      </a>

      <nav className="hidden items-center gap-10 lg:flex">
        {content.nav.items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[12px] font-semibold uppercase tracking-[0.1em] text-cream/80 transition-opacity hover:opacity-100 hover:text-cream"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a
          href={content.nav.ctaHref}
          className="rounded-full bg-terracotta px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-terracotta/85"
        >
          {content.nav.ctaLabel}
        </a>
        <details className="group relative lg:hidden">
          <summary
            className="list-none cursor-pointer text-cream"
            aria-label="Meniu"
          >
            <Menu size={22} />
          </summary>
          <div className="absolute right-0 top-full z-10 mt-3 flex w-56 flex-col gap-1 rounded-lg border border-forest/20 bg-cream p-3 shadow-lg">
            {content.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-[14px] font-semibold text-brown hover:bg-cream-warm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
