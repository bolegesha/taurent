import { getMessages } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import Link from "next/link";
import { type PageProps } from "@/lib/types";
import { SkierImage } from "@/components/ui/skier-image";

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Content component that takes locale as a string prop
async function HomeContent({ locale }: { locale: string }) {
  const messages = await getMessages(locale);
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="flex flex-col gap-6 md:w-1/2">
              <h1 className="text-4xl font-bold md:text-6xl">{messages.home.title}</h1>
              <p className="text-xl font-medium text-gray-600">{messages.home.subtitle}</p>
              <p className="text-gray-500">{messages.home.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/${locale}/project`}
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90"
                >
                  {messages.nav.project}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10"
                >
                  {messages.nav.contact}
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl md:h-96">
                <SkierImage 
                  alt="TauRent - Ski Equipment Rental"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">{messages.project.functionality}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {messages.project.features.slice(0, 6).map((feature: string, index: number) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/project`}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90"
            >
              {messages.nav.project}
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold">{messages.news.title}</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for news articles - replace with actual data */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <SkierImage 
                    alt={locale === 'en' ? `News image ${item}` : `Изображение новости ${item}`}
                  />
                </div>
                <h3 className="text-xl font-semibold">
                  {locale === 'en' ? `News Title ${item}` : `Заголовок новости ${item}`}
                </h3>
                <p className="text-gray-500">
                  {locale === 'en' 
                    ? `This is a placeholder for news article ${item}. Click to read more.`
                    : `Это место для новости ${item}. Нажмите, чтобы узнать больше.`}
                </p>
                <Link
                  href={`/${locale}/news/${item}`}
                  className="text-primary hover:underline"
                >
                  {messages.news.readMore}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/news`}
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/10"
            >
              {locale === 'en' ? 'View all news' : 'Все новости'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Main page component adheres to PageProps interface
export default async function HomePage({
  params,
}: PageProps) {
  // Await the params Promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  // Use the content component to render with the resolved locale
  return <HomeContent locale={locale} />;
} 