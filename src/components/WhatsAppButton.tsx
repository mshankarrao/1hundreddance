import { WHATSAPP } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP.general}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 hover:bg-[#1ebe57] md:right-8 md:bottom-8"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.04 3C9.4 3 4 8.37 4 14.96c0 2.1.55 4.15 1.6 5.96L4 29l8.28-1.55a12.1 12.1 0 0 0 5.76 1.47h.01c6.64 0 12.04-5.37 12.04-11.96C30.09 8.37 24.68 3 16.04 3zm0 21.9h-.01a10 10 0 0 1-5.1-1.4l-.36-.21-4.91.92.93-4.79-.24-.38a9.9 9.9 0 0 1-1.52-5.28C5.83 9.5 10.4 4.97 16.04 4.97c5.64 0 10.21 4.53 10.21 10.1 0 5.57-4.57 10.1-10.21 10.1zm5.6-7.56c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.69.15-.2.3-.79.99-.97 1.19-.18.2-.36.22-.66.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.65-.94-2.26-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.8-.74 2.05-1.45.25-.71.25-1.32.18-1.45-.08-.13-.28-.2-.58-.35z" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-elevated px-3 py-1.5 text-xs font-semibold tracking-wide text-foreground opacity-0 shadow-[var(--shadow-soft)] transition-opacity group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
