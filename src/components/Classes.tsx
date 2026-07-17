"use client";

import { motion } from "framer-motion";

const classes = [
  {
    title: "DANCE FITNESS",
    desc: "High-energy workouts that blend cardio with choreography.",
  },
  {
    title: "BOLLYWOOD",
    desc: "Filmy expression, footwork, and vibrant stage presence.",
  },
  {
    title: "ZUMBA",
    desc: "Feel-good Latin-inspired dance fitness for every body.",
  },
  {
    title: "TOLLYWOOD",
    desc: "Powerful Telugu film-style moves and performance energy.",
  },
  {
    title: "SEMI-CLASSICAL",
    desc: "Graceful technique with classical roots and modern flow.",
  },
  {
    title: "AFRO DANCE",
    desc: "Rhythm-driven movement with grounded grooves and joy.",
  },
  {
    title: "KUCHIPUDI",
    desc: "Classical storytelling through precise Indian dance form.",
  },
  {
    title: "KIDS DANCE",
    desc: "Fun, foundational classes built for young dancers.",
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">
            Types of Classes
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
            FIND YOUR STYLE
          </h2>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {classes.map((item, i) => (
            <motion.a
              key={item.title}
              href="#schedule"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col gap-2 py-7 transition-colors md:flex-row md:items-center md:justify-between md:py-8"
            >
              <div className="flex items-baseline gap-5 md:gap-10">
                <span className="font-[family-name:var(--font-display)] text-sm text-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide transition-colors group-hover:text-accent md:text-5xl">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center justify-between gap-6 pl-12 md:pl-0">
                <p className="max-w-sm text-sm text-muted md:text-right">
                  {item.desc}
                </p>
                <span className="shrink-0 text-accent transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
