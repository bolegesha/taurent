import { getMessages } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import Link from "next/link";
import { formatDateLocalized } from "@/lib/utils";
import { type PageProps } from "@/lib/types";
import { SkierImage } from "@/components/ui/skier-image";

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Mock news data - in a real application, this would come from a database or API
const newsItems = [
  {
    id: 1,
    date: "2023-12-15",
    image: "/images/news-1.jpg",
    titleEN: "TauRent App Launch Announcement",
    titleRU: "Анонс запуска приложения TauRent",
    excerptEN: "We're excited to announce the upcoming launch of TauRent, a mobile application for ski and tourist equipment rental in Almaty.",
    excerptRU: "Мы рады анонсировать предстоящий запуск TauRent, мобильного приложения для аренды горнолыжного и туристического снаряжения в Алматы.",
  },
  {
    id: 2,
    date: "2023-12-20",
    image: "/images/news-2.jpg",
    titleEN: "Partnership with Top Rental Shops",
    titleRU: "Партнерство с ведущими пунктами проката",
    excerptEN: "TauRent has established partnerships with the best rental shops in Almaty, including Skadi, Tobe, Shangy, and ShymbulakRent.",
    excerptRU: "TauRent заключил партнерские отношения с лучшими пунктами проката в Алматы, включая Skadi, Tobe, Shangy и ShymbulakRent.",
  },
  {
    id: 3,
    date: "2023-12-28",
    image: "/images/news-3.jpg",
    titleEN: "Beta Testing Program Announced",
    titleRU: "Анонс программы бета-тестирования",
    excerptEN: "Join our beta testing program to be among the first to try the TauRent app before the official release.",
    excerptRU: "Присоединяйтесь к нашей программе бета-тестирования, чтобы стать одним из первых, кто попробует приложение TauRent перед официальным выпуском.",
  },
  {
    id: 4,
    date: "2024-01-10",
    image: "/images/news-4.jpg",
    titleEN: "New Equipment Categories Added",
    titleRU: "Добавлены новые категории снаряжения",
    excerptEN: "TauRent now offers an expanded range of equipment categories, including hiking gear and camping equipment.",
    excerptRU: "TauRent теперь предлагает расширенный спектр категорий снаряжения, включая туристическое снаряжение и кемпинговое оборудование.",
  },
  {
    id: 5,
    date: "2024-01-20",
    image: "/images/news-5.jpg",
    titleEN: "Exclusive Discount for Early Adopters",
    titleRU: "Эксклюзивная скидка для ранних пользователей",
    excerptEN: "Sign up for TauRent before the official launch and receive a special discount on your first rental.",
    excerptRU: "Зарегистрируйтесь в TauRent до официального запуска и получите специальную скидку на первую аренду.",
  },
  {
    id: 6,
    date: "2024-02-05",
    image: "/images/news-6.jpg",
    titleEN: "TauRent Mobile App Now Available for iOS and Android",
    titleRU: "Мобильное приложение TauRent теперь доступно для iOS и Android",
    excerptEN: "The TauRent mobile app is now available for download on iOS and Android platforms.",
    excerptRU: "Мобильное приложение TauRent теперь доступно для скачивания на платформах iOS и Android.",
  },
  {
    id: 7,
    date: "2024-02-15",
    image: "/images/news-7.jpg",
    titleEN: "TauRent Reaches 1,000 Users Milestone",
    titleRU: "TauRent достигает отметки в 1000 пользователей",
    excerptEN: "We're thrilled to announce that TauRent has reached its first major milestone of 1,000 registered users.",
    excerptRU: "Мы рады сообщить, что TauRent достиг своего первого важного рубежа в 1000 зарегистрированных пользователей.",
  }
];

// Content component that takes locale as a string prop
async function NewsContent({ locale }: { locale: string }) {
  const messages = await getMessages(locale);
  
  return (
    <div className="container mx-auto px-4 py-12 sm:px-8">
      <h1 className="mb-8 text-4xl font-bold">{messages.news.title}</h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((news) => (
          <article key={news.id} className="flex flex-col overflow-hidden rounded-lg shadow transition-all hover:shadow-md">
            <div className="relative h-48 w-full overflow-hidden">
              <SkierImage 
                alt={locale === 'en' ? `${news.titleEN} thumbnail` : `${news.titleRU} миниатюра`}
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <time dateTime={news.date} className="text-sm text-gray-500">
                {formatDateLocalized(news.date, locale)}
              </time>
              <h2 className="mt-2 text-xl font-semibold">
                {locale === 'en' ? news.titleEN : news.titleRU}
              </h2>
              <p className="mt-2 flex-1 text-gray-500">
                {locale === 'en' ? news.excerptEN : news.excerptRU}
              </p>
              <Link
                href={`/${locale}/news/${news.id}`}
                className="mt-4 inline-flex items-center text-primary hover:underline"
              >
                {messages.news.readMore}
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// Main page component adheres to PageProps interface
export default async function NewsPage({
  params,
}: PageProps) {
  // Await the params Promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  // Use the content component to render with the resolved locale
  return <NewsContent locale={locale} />;
} 