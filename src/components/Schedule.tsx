"use client";

import { motion } from "framer-motion";
import { WHATSAPP } from "@/lib/whatsapp";

const schedule = [
  { time: "10:00", name: "Dance Fitness", teacher: "NARA", level: "All Levels" },
  { time: "12:00", name: "Bollywood", teacher: "LIA", level: "Beginner" },
  { time: "14:30", name: "Zumba", teacher: "JUN", level: "All Levels" },
  { time: "17:00", name: "Semi-Classical", teacher: "LIA", level: "Intermediate" },
  { time: "19:30", name: "Kids Dance", teacher: "NARA", level: "Kids" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="bg-accent-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">
              Today
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
              SCHEDULE
            </h2>
          </div>
          <a
            href={WHATSAPP.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start text-sm font-semibold tracking-[0.16em] uppercase transition-colors hover:text-accent"
          >
            Book on WhatsApp →
          </a>
        </div>

        <div className="space-y-0">
          {schedule.map((row, i) => (
            <motion.div
              key={`${row.time}-${row.name}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="grid grid-cols-[4.5rem_1fr] items-center gap-4 border-b border-line py-5 md:grid-cols-[6rem_1.4fr_1fr_8rem] md:gap-8 md:py-6"
            >
              <span className="font-[family-name:var(--font-display)] text-2xl text-accent md:text-3xl">
                {row.time}
              </span>
              <div>
                <p className="font-[family-name:var(--font-brand)] text-lg font-bold md:text-xl">
                  {row.name}
                </p>
                <p className="mt-1 text-sm text-muted md:hidden">
                  {row.teacher} · {row.level}
                </p>
              </div>
              <p className="hidden text-sm tracking-[0.08em] text-muted uppercase md:block">
                {row.teacher}
              </p>
              <p className="hidden text-right text-sm text-foreground/60 md:block">
                {row.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
