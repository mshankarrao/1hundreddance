import Image from "next/image";
import { WHATSAPP } from "@/lib/whatsapp";
import { withBase } from "@/lib/paths";

const footerLinks = {
  Class: [
    { label: "Class Schedule", href: "#schedule" },
    { label: "Buy Ticket", href: WHATSAPP.booking, external: true },
    { label: "Founders", href: "#founders" },
  ],
  Information: [
    { label: "About Studio", href: "#about" },
    { label: "Location", href: "#location" },
    { label: "Contact Us", href: WHATSAPP.contact, external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background pb-10 pt-16">
      <div className="overflow-hidden border-b border-line pb-10">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, loop) => (
            <div key={loop} className="flex gap-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={`${loop}-${i}`}
                  className="font-[family-name:var(--font-display)] text-5xl tracking-wide text-accent/20 md:text-7xl"
                >
                  1 HUNDRED DANCE STUDIO
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 pt-14 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src={withBase("/logo.png")}
              alt="1 HUNDRED"
              width={140}
              height={140}
              className="h-20 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Dance studio for movers who train hard, create boldly, and never
              wait for a stage.
            </p>
            <p className="mt-6 text-sm text-foreground/70">
              Madhapur / HITEC City, Hyderabad
              <br />
              WhatsApp · +91 8463998396
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <p className="mb-4 text-xs tracking-[0.2em] text-muted uppercase">
                {title}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      {...("external" in item && item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} 1 HUNDRED Dance. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              YouTube
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
