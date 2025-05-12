import { notFound } from "next/navigation";

export const locales = ["en", "ru"];
export const defaultLocale = "ru";

export async function getMessages(locale: string) {
  if (!locales.includes(locale)) notFound();
  return (await import(`../messages/${locale}.json`)).default;
} 