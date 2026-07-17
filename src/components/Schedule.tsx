"use client";

import { motion } from "framer-motion";
import { WHATSAPP } from "@/lib/whatsapp";

const schedule = [
  {
    time: "7:00 AM",
    name: "Dance Fitness",
    days: "Tue – Fri",
    batch: "Morning",
  },
  {
    time: "8:10 AM",
    name: "Bollyhop / Bollywood",
    days: "Tue – Fri",
    batch: "Regular Batch",
  },
  {
    time: "9:00 AM",
    name: "Dance Fitness",
    days: "Sat · Sun",
    batch: "Weekend",
  },
  {
    time: "10:00 AM",
    name: "Tollywood",
    days: "Sat · Sun",
    batch: "Regular Batch",
  },
  {
    time: "11:00 AM",
    name: "Bollywood",
    days: "Sat · Sun",
    batch: "Regular Batch",
  },
  {
    time: "12:00 PM",
    name: "Bollywood Ladies Style",
    days: "Sat · Sun",
    batch: "Ladies Style",
  },
  {
    time: "5:30 PM",
    name: "Kids Dance",
    days: "Mon – Fri",
    batch: "Regular Batch",
  },
  {
    time: "6:00 PM",
    name: "Dance Fitness",
    days: "Mon · Wed · Fri",
    batch: "Evening",
  },
  {
    time: "6:00 PM",
    name: "Kids Dance",
    days: "Mon · Wed · Fri",
    batch: "Regular Batch",
  },
  {
    time: "7:00 PM",
    name: "Dance Fitness",
    days: "Mon – Fri",
    batch: "Evening",
  },
  {
    time: "8:00 PM",
    name: "Tollywood",
    days: "Tue · Thu",
    batch: "Regular Batch",
  },
  {
    time: "8:00 PM",
    name: "Bollywood",
    days: "Mon · Wed · Fri",
    batch: "Regular Batch",
  },
  {
    time: "8:00 PM",
    name: "Bollywood Ladies Style",
    days: "Tue · Thu",
    batch: "Ladies Style",
  },
  {
    time: "9:00 PM",
    name: "Tollywood",
    days: "Mon · Wed · Fri",
    batch: "Regular Batch",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="bg-accent-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">
              Weekly Timings
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
              key={`${row.time}-${row.name}-${row.days}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.35) }}
              className="grid grid-cols-[5rem_1fr] items-center gap-4 border-b border-line py-5 md:grid-cols-[7rem_1.5fr_1fr_9rem] md:gap-8 md:py-6"
            >
              <span className="font-[family-name:var(--font-display)] text-xl text-accent md:text-3xl">
                {row.time}
              </span>
              <div>
                <p className="font-[family-name:var(--font-brand)] text-base font-bold md:text-xl">
                  {row.name}
                </p>
                <p className="mt-1 text-sm text-muted md:hidden">
                  {row.days} · {row.batch}
                </p>
              </div>
              <p className="hidden text-sm tracking-[0.06em] text-muted md:block">
                {row.days}
              </p>
              <p className="hidden text-right text-sm text-foreground/60 md:block">
                {row.batch}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
