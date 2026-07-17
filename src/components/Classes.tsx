"use client";

import { motion } from "framer-motion";
import { WHATSAPP } from "@/lib/whatsapp";

type ClassSlot = {
  time: string;
  days: string;
  note?: string;
};

type DanceClass = {
  title: string;
  tagline: string;
  desc: string;
  slots: ClassSlot[];
};

const classes: DanceClass[] = [
  {
    title: "DANCE FITNESS",
    tagline: "Unlimited classes · One membership price",
    desc: "High-energy cardio choreography for every fitness level.",
    slots: [
      { time: "7:00 – 8:00 AM", days: "Tue · Wed · Thu · Fri" },
      { time: "6:00 – 7:00 PM", days: "Mon · Wed · Fri" },
      { time: "7:00 – 8:00 PM", days: "Mon – Fri" },
      { time: "9:00 – 10:00 AM", days: "Sat · Sun" },
    ],
  },
  {
    title: "TOLLYWOOD",
    tagline: "Feel the mass · Live the beat",
    desc: "Powerful Telugu film-style moves and stage energy.",
    slots: [
      { time: "8:00 – 9:00 PM", days: "Tue · Thu" },
      { time: "9:00 – 10:00 PM", days: "Mon · Wed · Fri" },
      { time: "10:00 – 11:00 AM", days: "Sat · Sun" },
    ],
  },
  {
    title: "BOLLYWOOD",
    tagline: "Learn · Express · Inspire",
    desc: "Filmy footwork, expression, and vibrant performance presence.",
    slots: [
      {
        time: "8:10 – 9:10 AM",
        days: "Tue · Wed · Thu · Fri",
        note: "Bollyhop / Regular Batch",
      },
      {
        time: "8:00 – 9:00 PM",
        days: "Mon · Wed · Fri",
        note: "Regular Batch",
      },
      {
        time: "11:00 AM – 12:00 PM",
        days: "Sat · Sun",
        note: "Regular Batch",
      },
      {
        time: "8:00 – 9:00 PM",
        days: "Tue · Thu",
        note: "Ladies Style",
      },
      {
        time: "12:00 – 1:00 PM",
        days: "Sat · Sun",
        note: "Ladies Style",
      },
    ],
  },
  {
    title: "KIDS DANCE",
    tagline: "Join the movement",
    desc: "Fun, foundational classes built for young dancers.",
    slots: [
      { time: "5:30 – 6:30 PM", days: "Mon – Fri", note: "Regular Batch" },
      { time: "6:00 – 7:00 PM", days: "Mon · Wed · Fri", note: "Regular Batch" },
    ],
  },
];

export default function Classes() {
  return (
    <section id="classes" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">
              Types of Classes
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
              FIND YOUR STYLE
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted md:text-base">
            Real studio batches from our floor — pick a style, check the
            timings, and book on WhatsApp.
          </p>
        </div>

        <div className="space-y-5 md:space-y-6">
          {classes.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="theme-surface border border-line bg-surface p-6 md:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-md">
                  <div className="flex items-baseline gap-4">
                    <span className="font-[family-name:var(--font-display)] text-sm text-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl tracking-wide md:text-5xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs tracking-[0.16em] text-accent uppercase">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {item.desc}
                  </p>
                </div>

                <div className="w-full flex-1 lg:max-w-xl">
                  <div className="divide-y divide-line border-y border-line">
                    {item.slots.map((slot) => (
                      <div
                        key={`${item.title}-${slot.time}-${slot.days}-${slot.note ?? ""}`}
                        className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                      >
                        <div>
                          <p className="font-[family-name:var(--font-brand)] text-base font-bold md:text-lg">
                            {slot.time}
                          </p>
                          {slot.note ? (
                            <p className="mt-0.5 text-xs text-muted">
                              {slot.note}
                            </p>
                          ) : null}
                        </div>
                        <p className="text-sm tracking-[0.04em] text-foreground/70 sm:text-right">
                          {slot.days}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-muted">
            Looking for Zumba, Semi-Classical, Afro, or Kuchipudi? Ask us on
            WhatsApp for current batches.
          </p>
          <a
            href={WHATSAPP.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.16em] uppercase transition-colors hover:text-accent"
          >
            Book a Class →
          </a>
        </div>
      </div>
    </section>
  );
}
