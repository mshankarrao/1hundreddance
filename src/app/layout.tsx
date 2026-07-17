import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { withBase } from "@/lib/paths";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "1 HUNDRED DANCE STUDIO",
  description:
    "1 HUNDRED Dance Studio — Move your feet, feel united. Classes, choreographers, and community.",
  icons: {
    icon: withBase("/logo.png"),
    apple: withBase("/logo.png"),
  },
};

const themeInitScript = `
(function () {
  try {
    var key = '1hundred-theme';
    var stored = localStorage.getItem(key);
    var theme = stored === 'day' || stored === 'night'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day');
    var root = document.documentElement;
    if (theme === 'night') root.classList.add('dark');
    else root.classList.remove('dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme === 'night' ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bebas.variable} ${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="theme-surface min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
