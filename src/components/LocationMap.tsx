"use client";

import { motion } from "framer-motion";
import { WHATSAPP } from "@/lib/whatsapp";

const LAT = 17.452133392713094;
const LNG = 78.38784209660535;

const MAPS_VIEW = `https://www.google.com/maps?q=${LAT},${LNG}&z=17`;
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;
const MAPS_EMBED = `https://maps.google.com/maps?q=${LAT},${LNG}&z=17&hl=en&output=embed`;

export default function LocationMap() {
  return (
    <section id="location" className="theme-surface border-y border-line bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">
              Find Us
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
              LOCATION
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted md:text-base">
            Visit 1 HUNDRED in Madhapur / HITEC City, Hyderabad — tap directions
            and we’ll see you on the floor.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:gap-10 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="theme-surface flex flex-col justify-between border border-line bg-surface p-7 md:p-9"
          >
            <div>
              <p className="text-[11px] tracking-[0.22em] text-accent uppercase">
                Studio Pin
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-brand)] text-2xl font-bold tracking-tight md:text-3xl">
                1 HUNDRED Dance Studio
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70 md:text-base">
                Madhapur / HITEC City
                <br />
                Hyderabad, Telangana
                <br />
                India
              </p>

              <div className="mt-8 space-y-4 border-t border-line pt-6">
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                    Coordinates
                  </p>
                  <p className="mt-1 font-mono text-sm text-foreground/80">
                    {LAT.toFixed(6)}, {LNG.toFixed(6)}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-muted uppercase">
                    Reach Us
                  </p>
                  <p className="mt-1 text-sm text-foreground/80">
                    WhatsApp · +91 83175 70274
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold tracking-[0.16em] text-white uppercase transition-colors hover:bg-pink-deep"
              >
                Get Directions
              </a>
              <a
                href={MAPS_VIEW}
                target="_blank"
                rel="noopener noreferrer"
                className="theme-surface inline-flex items-center justify-center gap-2 border border-line bg-elevated px-6 py-3.5 text-sm font-semibold tracking-[0.16em] uppercase transition-colors hover:border-accent hover:text-accent"
              >
                Open in Maps
              </a>
              <a
                href={WHATSAPP.visit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-line px-6 py-3.5 text-sm font-semibold tracking-[0.16em] text-foreground/80 uppercase transition-colors hover:border-accent hover:text-accent"
              >
                Ask on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="group relative"
          >
            <div
              aria-hidden
              className="absolute -inset-2 translate-x-2 translate-y-2 border border-accent/35 transition-transform duration-500 group-hover:translate-x-2.5 group-hover:translate-y-2.5 md:-inset-3"
            />
            <div className="relative border border-accent/20 bg-mat p-2 theme-surface md:p-3">
              <div className="relative aspect-[4/3] overflow-hidden border border-line bg-accent-soft md:aspect-auto md:min-h-[520px]">
                <iframe
                  title="1 HUNDRED Dance Studio location map"
                  src={MAPS_EMBED}
                  className="absolute inset-0 h-full w-full contrast-[1.04] saturate-[0.92] transition-[filter] duration-500 dark:brightness-[0.82] dark:contrast-[1.08] dark:saturate-[0.85] group-hover:saturate-100 dark:group-hover:brightness-90"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Corner marks */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-3 left-3 z-10 h-4 w-4 border-t-2 border-l-2 border-accent md:top-4 md:left-4 md:h-5 md:w-5"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-3 right-3 z-10 h-4 w-4 border-t-2 border-r-2 border-accent md:top-4 md:right-4 md:h-5 md:w-5"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-3 left-3 z-10 h-4 w-4 border-b-2 border-l-2 border-accent md:bottom-4 md:left-4 md:h-5 md:w-5"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-3 bottom-3 z-10 h-4 w-4 border-r-2 border-b-2 border-accent md:right-4 md:bottom-4 md:h-5 md:w-5"
                />

                {/* Floating pin card */}
                <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-10 md:left-auto md:right-5 md:w-64">
                  <div
                    className="theme-surface border border-line px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur-sm"
                    style={{ backgroundColor: "var(--map-card)" }}
                  >
                    <p className="text-[10px] tracking-[0.2em] text-accent uppercase">
                      Dropped Pin
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-brand)] text-sm font-bold">
                      1 HUNDRED Studio
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Madhapur · Hyderabad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
