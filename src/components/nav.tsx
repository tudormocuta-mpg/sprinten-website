import Image from "next/image";
import { content } from "@/lib/content";

export function Nav() {
  return (
    <nav className="flex items-center justify-between border-b border-brown/10 px-10 py-4">
      <a href="#top" className="flex items-center" aria-label={content.brand.name}>
        <Image
          src="/sprinten-logo.svg"
          alt={content.brand.name}
          width={56}
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
    </nav>
  );
}
