import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Jaysplace | A considered Next.js starter",
    template: "%s | Jaysplace",
  },
  description:
    "A fast, accessible Next.js foundation with TypeScript, Tailwind CSS, and thoughtful production defaults.",
  openGraph: {
    title: "Jaysplace | A considered Next.js starter",
    description:
      "A fast, accessible Next.js foundation with thoughtful production defaults.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaysplace | A considered Next.js starter",
    description:
      "A fast, accessible Next.js foundation with thoughtful production defaults.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
