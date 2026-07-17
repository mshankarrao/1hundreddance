"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBase } from "@/lib/paths";

const founders = [
  {
    name: "Sumit Agrawal",
    role: "Founder",
    style: "Hip-Hop · Popping · Afro Dance",
    image: "/founders/founder-him.jpg",
    bio: "With over 15 years of dance experience, Sumit has explored a wide spectrum of styles from Hip-Hop and Popping to the vibrant world of Afro Dance, where he found his true calling. Known for his energetic teaching style and ability to inspire every dancer, he believes dance is more than movement — it’s a way of life.",
    quote:
      "Driven by passion, powered by purpose — Sumit built a space where every dancer feels they belong.",
    themeFit: "contrast" as const,
  },
  {
    name: "Geeta Agrawal",
    role: "Co-Founder",
    style: "Semi-Classical · Dance Fitness",
    image: "/founders/founder-her.jpg",
    bio: "A former software developer who chose passion over profession, Geeta transformed her love for dance into a lifelong mission. With 10+ years of experience in dance and fitness, she leads Semi-Classical programs and actively contributes to dance training, bringing grace, discipline, and warmth to every class.",
    quote:
      "From writing code to creating confidence through dance, Geeta’s journey is a testament to following your heart.",
    themeFit: "best" as const,
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
              MEET THE FOUNDERS
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted md:text-base">
            Two dreamers. One vision. Endless rhythm — the heart of
            1 HUNDRED Dance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {founders.map((founder, i) => (
            <motion.article
              key={founder.name}
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
                  src={withBase(founder.image)}
                  alt={`${founder.name}, ${founder.role} of 1 HUNDRED`}
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
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {founder.bio}
                </p>
                <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-foreground/80 italic">
                  “{founder.quote}”
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
          className="mt-16 border border-line bg-surface p-8 md:mt-20 md:p-12"
        >
          <p className="text-xs tracking-[0.22em] text-accent uppercase">
            Their Story
          </p>
          <h3 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl tracking-wide md:text-6xl">
            TWO DREAMERS.
            <br />
            ONE VISION.
            <br />
            ENDLESS RHYTHM.
          </h3>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/75 md:text-lg">
            What started as a shared love for dance grew into 1 HUNDRED Dance —
            a community built on passion, inclusivity, and the belief that dance
            is for everyone. Together, Sumit and Geeta have poured their heart
            and soul into creating a space where beginners become performers,
            fitness meets fun, and every step tells a story.
          </p>
          <p className="mt-6 max-w-2xl border-l-2 border-accent pl-4 text-base leading-relaxed text-foreground/85 italic md:text-lg">
            “1 HUNDRED Dance isn’t just a studio — it’s the dream they built,
            one beat at a time.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
