"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/whatsapp";

const classes = [
  "Dance Fitness",
  "Bollywood",
  "Zumba",
  "Tollywood",
  "Semi-Classical",
  "Afro Dance",
  "Kuchipudi",
  "Kids Dance",
];

export default function Tickets() {
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = `Hi 1 HUNDRED Dance! I’d like to book a class.\n\nClass: ${selectedClass}\nEmail: ${email || "Not provided"}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="tickets" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <p className="mb-3 text-xs tracking-[0.25em] text-accent uppercase">
              Buy Ticket
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl tracking-wide md:text-7xl">
              BOOK YOUR
              <br />
              NEXT CLASS
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
              Choose a class and continue on WhatsApp — we’ll confirm your spot
              quickly.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="theme-surface space-y-4 border border-line bg-surface p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
                Class
              </span>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full border border-line bg-background px-4 py-3 text-sm outline-none focus:border-accent"
              >
                {classes.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
                Email
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full border border-line bg-background px-4 py-3 text-sm outline-none placeholder:text-muted/60 focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-full bg-accent py-3.5 text-sm font-bold tracking-[0.18em] text-white uppercase transition-colors hover:bg-pink-deep"
            >
              Book on WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
