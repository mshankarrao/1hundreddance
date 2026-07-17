"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === "night";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isNight ? "Switch to day mode" : "Switch to night mode"}
      aria-pressed={isNight}
      className="theme-toggle-glow theme-surface relative isolate flex h-10 w-[4.75rem] items-center rounded-full border border-line bg-surface/95 p-1 shadow-[var(--shadow-soft)] backdrop-blur-md"
    >
      <motion.span
        aria-hidden
        className="absolute top-1 bottom-1 w-8 rounded-full bg-accent"
        initial={false}
        animate={{ x: isNight ? 30 : 0 }}
        transition={{ type: "spring", stiffness: 480, damping: 32 }}
        style={{ left: 4 }}
      />

      <span className="relative z-10 flex w-full items-center justify-between px-1">
        <span
          className={`flex h-7 w-7 items-center justify-center transition-colors duration-300 ${
            isNight ? "text-muted" : "text-white"
          }`}
        >
          <SunIcon />
        </span>
        <span
          className={`flex h-7 w-7 items-center justify-center transition-colors duration-300 ${
            isNight ? "text-white" : "text-muted"
          }`}
        >
          <MoonIcon />
        </span>
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3.5" />
      <path
        strokeLinecap="round"
        d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.1 5.1l1.6 1.6M17.3 17.3l1.6 1.6M18.9 5.1l-1.6 1.6M6.7 17.3l-1.6 1.6"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M20.2 14.3A8.2 8.2 0 0 1 9.7 3.8a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}
