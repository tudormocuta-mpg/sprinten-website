import Image from "next/image";
import { content } from "@/lib/content";

export function Footer() {
  const { copyright, attributionPrefix, attributionLinkText, attributionLinkHref } =
    content.footer;

  return (
    <footer className="border-t border-cream/10 bg-brown px-6 py-16 text-cream md:px-12 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          <div className="md:col-span-2">
            <Image
              src="/sprinten-logo.svg"
              alt={content.brand.name}
              width={62}
              height={56}
              className="mb-6 h-12 w-auto opacity-90 [filter:brightness(0)_invert(1)]"
            />
            <p className="max-w-md text-[14px] leading-relaxed text-cream/60">
              Un proiect MPG dedicat copiilor cu dizabilități locomotorii, promovând sportul ca element central al incluziunii sociale.
            </p>
          </div>

          <div>
            <h5 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-peach">
              Navigație
            </h5>
            <ul className="space-y-3 text-[14px] font-medium text-cream/70">
              {content.nav.items.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-peach">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-cream/40 md:flex-row">
          <p>{copyright}</p>
          <p>
            {attributionPrefix}
            <a
              href={attributionLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-peach hover:underline"
            >
              {attributionLinkText}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
