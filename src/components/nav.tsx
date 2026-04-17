import Image from "next/image";
import { content } from "@/lib/content";

export function Nav() {
  return (
    <nav className="relative flex items-center justify-between border-b border-brown/10 px-6 py-4 md:px-10">
      <a href="#top" className="flex items-center" aria-label={content.brand.name}>
        <Image
          src="/sprinten-logo.svg"
          alt={content.brand.name}
          width={62}
          height={56}
          priority
        />
      </a>

      <div className="hidden md:flex items-center gap-7 text-[13px] font-medium">
        {content.nav.items.map((item) => {
          const isContact = item.href === "#contact";
          return (
            <a
              key={item.href}
              href={item.href}
              className={isContact ? "text-terracotta" : "text-brown"}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      <details className="group relative md:hidden">
        <summary
          className="list-none cursor-pointer rounded-md p-2 hover:bg-brown/5"
          aria-label="Meniu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-brown group-open:hidden"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="hidden text-brown group-open:block"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full z-10 mt-2 flex w-56 flex-col gap-1 rounded-lg border border-brown/10 bg-cream p-3 shadow-lg">
          {content.nav.items.map((item) => {
            const isContact = item.href === "#contact";
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-[15px] font-medium hover:bg-cream-warm ${
                  isContact ? "text-terracotta" : "text-brown"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </details>
    </nav>
  );
}
