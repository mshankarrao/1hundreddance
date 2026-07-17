"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBase } from "@/lib/paths";

export default function Hero() {
  return (
    <section
      id="top"
      className="noise relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full scale-105 object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={withBase("/video/hero-poster.jpg")}
        aria-hidden="true"
      >
        <source src={withBase("/video/hero.mp4")} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 transition-[background] duration-500"
        style={{
          background:
            "linear-gradient(to top, var(--hero-from), var(--hero-via), var(--hero-top))",
        }}
      />
      <div
        className="absolute inset-0 transition-[background] duration-500"
        style={{
          background:
            "linear-gradient(to right, var(--hero-side), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100 dark:bg-[radial-gradient(ellipse_at_top,rgba(255,77,148,0.14),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6"
        >
          <Image
            src={withBase("/logo.png")}
            alt="1 HUNDRED Dance Studio"
            width={220}
            height={220}
            className="h-24 w-auto md:h-32"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-display)] text-[clamp(3.5rem,14vw,9.5rem)] leading-[0.88] tracking-wide text-foreground"
        >
          Move your feet,
          <br />
          <span className="text-accent">feel united</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
            Train with world-class choreographers. Feel the floor. Own the
            moment.
          </p>
          <a
            href="#about"
            className="group inline-flex items-center gap-3 self-start border border-accent bg-accent px-6 py-3 text-sm font-semibold tracking-[0.16em] text-white uppercase transition-colors hover:bg-pink-deep hover:border-pink-deep"
          >
            Learn More
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute right-5 bottom-8 hidden items-center gap-3 md:flex md:right-8">
        <span className="pulse-line h-px w-10 bg-accent" />
        <span className="text-[11px] tracking-[0.2em] text-muted uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}
