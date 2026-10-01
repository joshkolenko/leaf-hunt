import type { Metadata } from "next";
import { Figtree, Gloock, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const gloock = Gloock({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grand Rapids Leaf Hunt",
  description:
    "A scavenger hunt for tracking down real leaves at parks and trails around Grand Rapids, Michigan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${gloock.variable} ${figtree.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
