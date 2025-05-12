import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { locales } from "@/lib/i18n";
import { type RootLayoutProps } from "@/lib/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TauRent - Аренда горнолыжного и туристического снаряжения",
  description: "TauRent — мобильное приложение для аренды горнолыжного и туристического снаряжения у проверенных прокатных магазинов в городе Алматы.",
  keywords: ["горнолыжное снаряжение", "аренда снаряжения", "Алматы", "туристическое снаряжение", "TauRent"],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  // Need to await params completely in Next.js 15
  const resolvedParams = await params;
  // Destructure the locale from params to avoid hydration issues
  const { locale = "ru" } = resolvedParams || {};
  
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
