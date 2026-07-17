"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBase } from "@/lib/paths";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-line bg-surface py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-20 top-10 font-[family-name:var(--font-display)] text-[18vw] leading-none text-accent/10 select-none">
        100
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-2 md:items-center md:gap-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-mat theme-surface"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(235,46,126,0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(235,46,126,0.1),transparent_45%)]" />
          <Image
            src={withBase("/logo.png")}
            alt="1 HUNDRED"
            width={320}
            height={320}
            className="relative z-10 h-44 w-auto md:h-56"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">
            About Studio
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
            A FLOOR.
            <br />
            A BEAT.
            <br />
            A CREW.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
            Founded by Sumit and Geeta Agrawal, 1 HUNDRED is built for dancers
            who want intensity, craft, and community — from beginner foundations
            to performance-ready sessions.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              { value: "8", label: "Class styles" },
              { value: "2", label: "Founders" },
              { value: "1", label: "Mission" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-[family-name:var(--font-display)] text-3xl text-accent md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-[0.12em] text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
