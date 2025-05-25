import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Additional fonts mirroring reference design
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mateo Arcos – Portfolio",
  description: "Single-page portfolio inspired by Designlines layout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebas.variable} ${inter.variable} antialiased bg-[#F2EFE8] text-black`}
      >
        {children}
      </body>
    </html>
  );
}
