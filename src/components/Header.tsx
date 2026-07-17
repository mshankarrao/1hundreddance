"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP } from "@/lib/whatsapp";
import { withBase } from "@/lib/paths";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "About Studio", href: "#about" },
  { label: "Founders", href: "#founders" },
  { label: "Class Schedule", href: "#schedule" },
  { label: "Types of Classes", href: "#classes" },
  { label: "Location", href: "#location" },
  { label: "Buy Ticket", href: WHATSAPP.booking, external: true as const },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`theme-surface fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open
            ? "border-b border-line backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
        style={
          scrolled || open
            ? { backgroundColor: "var(--header-bg)" }
            : undefined
        }
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-3 px-5 md:h-20 md:px-8">
          <a
            href="#top"
            className="relative z-50 block shrink-0"
            onClick={() => setOpen(false)}
            aria-label="1 HUNDRED Dance Studio home"
          >
            <Image
              src={withBase("/logo.png")}
              alt="1 HUNDRED"
              width={120}
              height={120}
              className="h-11 w-auto md:h-14"
              priority
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...("external" in link && link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-[12px] font-medium tracking-[0.08em] text-foreground/80 uppercase transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href={WHATSAPP.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden border border-accent bg-accent px-4 py-2 text-[12px] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-pink-deep sm:inline"
            >
              Booking
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-accent transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background xl:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-6 px-8 pt-16">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  {...("external" in link && link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="font-[family-name:var(--font-display)] text-5xl tracking-wide"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
