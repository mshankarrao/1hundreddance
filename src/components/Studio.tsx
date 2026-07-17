"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { WHATSAPP } from "@/lib/whatsapp";
import { withBase } from "@/lib/paths";

const portraits = [
  {
    src: "/studio.jpg",
    alt: "1 HUNDRED dance studio floor with brand wall",
    label: "Dance Floor",
    index: "01",
  },
  {
    src: "/office.jpg",
    alt: "1 HUNDRED studio reception desk",
    label: "Reception",
    index: "02",
  },
];

const fullRows = [
  {
    src: "/studio/full-1.jpg",
    alt: "Dancers training during a class at 1 HUNDRED",
    label: "In Session",
    caption: "Live energy on the floor — every class, every beat.",
    index: "03",
  },
  {
    src: "/studio/full-2.jpg",
    alt: "Wide view of a dance class in the 1 HUNDRED studio",
    label: "Training Space",
    caption: "Mirrors, light, and room to move with full focus.",
    index: "04",
  },
  {
    src: "/studio/full-3.jpg",
    alt: "Empty 1 HUNDRED Dance studio with brand wall",
    label: "Brand Floor",
    caption: "Focus · Passion · Growth — the space that holds it all.",
    index: "05",
  },
];

function CornerMarks() {
  return (
    <>
      <span
        aria-hidden
        className="absolute top-3 left-3 z-10 h-4 w-4 border-t-2 border-l-2 border-accent md:top-4 md:left-4 md:h-5 md:w-5"
      />
      <span
        aria-hidden
        className="absolute top-3 right-3 z-10 h-4 w-4 border-t-2 border-r-2 border-accent md:top-4 md:right-4 md:h-5 md:w-5"
      />
      <span
        aria-hidden
        className="absolute bottom-3 left-3 z-10 h-4 w-4 border-b-2 border-l-2 border-accent md:bottom-4 md:left-4 md:h-5 md:w-5"
      />
      <span
        aria-hidden
        className="absolute right-3 bottom-3 z-10 h-4 w-4 border-r-2 border-b-2 border-accent md:right-4 md:bottom-4 md:h-5 md:w-5"
      />
    </>
  );
}

function FrameShell({
  children,
  aspectClass,
}: {
  children: ReactNode;
  aspectClass: string;
}) {
  return (
    <div className="group relative">
      <div
        aria-hidden
        className="absolute -inset-2 translate-x-2 translate-y-2 border border-accent/35 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:translate-y-2.5 md:-inset-3"
      />
      <div className="relative border border-accent/20 bg-mat p-2 theme-surface md:p-3">
        <div className={`relative overflow-hidden border border-line ${aspectClass}`}>
          {children}
          <CornerMarks />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80 dark:from-black/35" />
        </div>
      </div>
    </div>
  );
}

export default function Studio() {
  return (
    <section id="studio" className="border-y border-line bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">
              Our Space
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
              THE STUDIO
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted md:text-base">
            From reception to the main floor — a complete look at where
            1 HUNDRED trains, creates, and performs.
          </p>
        </div>

        {/* Row 1 — portraits */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:gap-12">
          {portraits.map((space, i) => (
            <motion.figure
              key={space.src}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <FrameShell aspectClass="aspect-[3/4]">
                <Image
                  src={withBase(space.src)}
                  alt={space.alt}
                  fill
                  quality={95}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </FrameShell>
              <figcaption className="mt-5 flex items-center justify-between gap-4 border-b border-line pb-4">
                <div>
                  <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
                    Space {space.index}
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-brand)] text-lg font-bold tracking-tight md:text-xl">
                    {space.label}
                  </p>
                </div>
                <span className="font-[family-name:var(--font-display)] text-3xl text-accent/25 md:text-4xl">
                  {space.index}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Rows 2–4 — full studio landscapes */}
        <div className="mt-14 flex flex-col gap-14 md:mt-20 md:gap-16">
          {fullRows.map((row, i) => (
            <motion.figure
              key={row.src}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="w-full"
            >
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
                    Studio {row.index}
                  </p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-3xl tracking-wide md:text-5xl">
                    {row.label}
                  </h3>
                </div>
                <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted md:block">
                  {row.caption}
                </p>
              </div>

              <FrameShell aspectClass="aspect-[16/9]">
                <Image
                  src={withBase(row.src)}
                  alt={row.alt}
                  fill
                  quality={95}
                  priority={i === 0}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
              </FrameShell>

              <p className="mt-4 text-sm leading-relaxed text-muted md:hidden">
                {row.caption}
              </p>
            </motion.figure>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center md:mt-20">
          <p className="max-w-md text-sm leading-relaxed text-foreground/70">
            Soft light. Solid floors. A space made to move — visit us and feel
            the room for yourself.
          </p>
          <a
            href={WHATSAPP.visit}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent px-7 py-3.5 text-sm font-bold tracking-[0.16em] text-white uppercase transition-colors hover:bg-pink-deep"
          >
            Book a Visit
          </a>
        </div>
      </div>
    </section>
  );
}
