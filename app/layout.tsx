import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./qart-static.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://qart.co"),
  title: {
    default: "QART | Curated Luxury Living in Bangkok",
    template: "%s | Qart",
  },
  description:
    "Curated luxury residences and personalized property consultation in Bangkok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
