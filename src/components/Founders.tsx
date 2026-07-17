"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Co-Founder",
    role: "Artistic Direction",
    style: "Semi-Classical · Bollywood · Kuchipudi",
    image: "/founders/founder-her.jpg",
    note: "Grace, expression, and film-ready performance energy.",
    themeFit: "best",
  },
  {
    name: "Co-Founder",
    role: "Creative Direction",
    style: "Afro Dance · Dance Fitness · Street",
    image: "/founders/founder-him.jpg",
    note: "Urban power, groove, and high-impact stage presence.",
    themeFit: "contrast",
  },
];

export default function Founders() {
  return (
    <section id="founders" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">
              Leadership
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
              FOUNDERS
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted md:text-base">
            The vision behind 1 HUNDRED — two founders, one studio, every style
            on the floor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {founders.map((founder, i) => (
            <motion.article
              key={`${founder.role}-${i}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden border border-line bg-elevated theme-surface"
            >
              <div
                className={`relative overflow-hidden ${
                  founder.themeFit === "best"
                    ? "aspect-[3/4] bg-accent-soft"
                    : "aspect-[3/4] bg-foreground/90"
                }`}
              >
                <Image
                  src={founder.image}
                  alt={`${founder.role} of 1 HUNDRED`}
                  fill
                  quality={100}
                  priority={i === 0}
                  className={`object-cover transition-transform duration-700 group-hover:scale-[1.02] ${
                    founder.themeFit === "contrast"
                      ? "object-[center_15%]"
                      : "object-[center_18%]"
                  }`}
                  sizes="(max-width: 768px) 100vw, 700px"
                />
                {founder.themeFit === "contrast" && (
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                )}
              </div>

              <div className="border-t border-line p-6 md:p-8">
                <p className="text-xs tracking-[0.2em] text-accent uppercase">
                  {founder.role}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-5xl">
                  {founder.name}
                </h3>
                <p className="mt-3 text-sm font-medium text-foreground/80">
                  {founder.style}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {founder.note}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
