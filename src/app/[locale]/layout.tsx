import { SiteLayout } from "@/components/layout/site-layout";
import { getMessages } from "@/lib/i18n";
import { type LayoutProps } from "@/lib/types";

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps) {
  // Need to await params completely before using them in Next.js 15
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const messages = await getMessages(locale);
  
  return (
    <SiteLayout translations={messages} currentLocale={locale}>
      {children}
    </SiteLayout>
  );
} 