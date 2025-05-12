import Link from "next/link";
import { formatDateLocalized } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { type PageProps } from "@/lib/types";
import { SkierImage } from "@/components/ui/skier-image";
import { locales } from "@/lib/i18n";

// Generate static params for all supported locales and news IDs
export function generateStaticParams() {
  // Generate combinations of locales and news IDs
  const params = [];
  for (const locale of locales) {
    for (let id = 1; id <= 7; id++) {
      params.push({ locale, id: id.toString() });
    }
  }
  return params;
}

// Define news item type
interface NewsItem {
  id: number;
  date: string;
  image: string;
  titleEN: string;
  titleRU: string;
  excerptEN: string;
  excerptRU: string;
  contentEN: string;
  contentRU: string;
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
    contentEN: `
      <p>We're thrilled to announce the upcoming launch of TauRent, a revolutionary mobile application designed to transform the ski and tourist equipment rental experience in Almaty.</p>
      <p>TauRent will serve as a comprehensive platform connecting users with verified rental shops throughout the city, making it easier than ever to find and book the gear you need for your next adventure.</p>
      <p>The app will feature:</p>
      <ul>
        <li>A curated list of verified rental shops</li>
        <li>Detailed equipment categorization</li>
        <li>User reviews and ratings</li>
        <li>Convenient booking system</li>
        <li>Flexible payment options</li>
      </ul>
      <p>Stay tuned for more updates as we approach the official launch date. We can't wait to help you gear up for your next outdoor experience!</p>
    `,
    contentRU: `
      <p>Мы рады анонсировать предстоящий запуск TauRent, революционная мобильного приложения, призванного трансформировать опыт аренды горнолыжного и туристического снаряжения в Алматы.</p>
      <p>TauRent будет служить комплексной платформой, связывающей пользователей с проверенными пунктами проката по всему городу, делая процесс поиска и бронирования необходимого снаряжения для вашего следующего приключения проще, чем когда-либо.</p>
      <p>Приложение будет включать:</p>
      <ul>
        <li>Тщательно отобранный список проверенных пунктов проката</li>
        <li>Детальную категоризацию снаряжения</li>
        <li>Отзывы и рейтинги пользователей</li>
        <li>Удобную систему бронирования</li>
        <li>Гибкие варианты оплаты</li>
      </ul>
      <p>Следите за обновлениями по мере приближения официальной даты запуска. Мы с нетерпением ждем возможности помочь вам подготовиться к следующему отдыху на природе!</p>
    `,
  },
  {
    id: 2,
    date: "2023-12-20",
    image: "/images/news-2.jpg",
    titleEN: "Partnership with Top Rental Shops",
    titleRU: "Партнерство с ведущими пунктами проката",
    excerptEN: "TauRent has established partnerships with the best rental shops in Almaty, including Skadi, Tobe, Shangy, and ShymbulakRent.",
    excerptRU: "TauRent заключил партнерские отношения с лучшими пунктами проката в Алматы, включая Skadi, Tobe, Shangy и ShymbulakRent.",
    contentEN: `
      <p>We're proud to announce that TauRent has established strategic partnerships with the leading rental shops in Almaty, providing our users with access to high-quality equipment from trusted providers.</p>
      <p>Our current partners include:</p>
      <ul>
        <li><strong>Skadi</strong> - Known for premium ski and snowboard equipment</li>
        <li><strong>Tobe</strong> - Specializes in winter sports gear</li>
        <li><strong>Shangy</strong> - Offers a wide range of outdoor equipment</li>
        <li><strong>ShymbulakRent</strong> - Located near the popular ski resort</li>
      </ul>
      <p>These partnerships ensure that TauRent users will have access to the best equipment available in Almaty, with verified quality and competitive pricing.</p>
      <p>We're continuing to expand our network of partners to provide even more options for our users. Stay tuned for more partnership announcements in the coming weeks!</p>
    `,
    contentRU: `
      <p>Мы рады сообщить, что TauRent установил стратегические партнерские отношения с ведущими пунктами проката в Алматы, предоставляя нашим пользователям доступ к высококачественному снаряжению от проверенных поставщиков.</p>
      <p>Наши текущие партнеры включают:</p>
      <ul>
        <li><strong>Skadi</strong> - Известен премиальным лыжным и сноубордическим снаряжением</li>
        <li><strong>Tobe</strong> - Специализируется на снаряжении для зимних видов спорта</li>
        <li><strong>Shangy</strong> - Предлагает широкий спектр туристического снаряжения</li>
        <li><strong>ShymbulakRent</strong> - Расположен рядом с популярным горнолыжным курортом</li>
      </ul>
      <p>Эти партнерства гарантируют, что пользователи TauRent будут иметь доступ к лучшему снаряжению, доступному в Алматы, с проверенным качеством и конкурентоспособными ценами.</p>
      <p>Мы продолжаем расширять нашу сеть партнеров, чтобы предоставить еще больше вариантов для наших пользователей. Следите за новыми объявлениями о партнерстве в ближайшие недели!</p>
    `,
  },
  {
    id: 3,
    date: "2023-12-28",
    image: "/images/news-3.jpg",
    titleEN: "Beta Testing Program Announced",
    titleRU: "Анонс программы бета-тестирования",
    excerptEN: "Join our beta testing program to be among the first to try the TauRent app before the official release.",
    excerptRU: "Присоединяйтесь к нашей программе бета-тестирования, чтобы стать одним из первых, кто попробует приложение TauRent перед официальным выпуском.",
    contentEN: `
      <p>We're excited to announce the launch of our beta testing program for the TauRent mobile application!</p>
      <p>This is your opportunity to get an exclusive early look at the app and help shape its development before the official release.</p>
      <p>As a beta tester, you'll:</p>
      <ul>
        <li>Get early access to all app features</li>
        <li>Provide valuable feedback directly to our development team</li>
        <li>Help identify and fix issues before the public launch</li>
        <li>Receive exclusive benefits when the app officially launches</li>
      </ul>
      <p>Our beta program will be limited to 100 participants, so sign up quickly to secure your spot. The program will begin on January 15th and run for approximately 4 weeks.</p>
      <p>To join, simply fill out the form on our website or contact us directly at beta@taurent.kz.</p>
    `,
    contentRU: `
      <p>Мы рады объявить о запуске нашей программы бета-тестирования для мобильного приложения TauRent!</p>
      <p>Это ваша возможность получить эксклюзивный ранний доступ к приложению и помочь сформировать его развитие перед официальным выпуском.</p>
      <p>Как бета-тестер, вы сможете:</p>
      <ul>
        <li>Получить ранний доступ ко всем функциям приложения</li>
        <li>Предоставлять ценные отзывы непосредственно нашей команде разработчиков</li>
        <li>Помочь выявить и исправить проблемы перед публичным запуском</li>
        <li>Получить эксклюзивные преимущества при официальном запуске приложения</li>
      </ul>
      <p>Наша бета-программа будет ограничена 100 участниками, поэтому регистрируйтесь быстрее, чтобы обеспечить себе место. Программа начнется 15 января и продлится примерно 4 недели.</p>
      <p>Чтобы присоединиться, просто заполните форму на нашем сайте или свяжитесь с нами напрямую по адресу beta@taurent.kz.</p>
    `,
  },
  {
    id: 4,
    date: "2024-01-10",
    image: "/images/news-4.jpg",
    titleEN: "New Equipment Categories Added",
    titleRU: "Добавлены новые категории снаряжения",
    excerptEN: "TauRent now offers an expanded range of equipment categories, including hiking gear and camping equipment.",
    excerptRU: "TauRent теперь предлагает расширенный спектр категорий снаряжения, включая туристическое снаряжение и кемпинговое оборудование.",
    contentEN: `<p>Placeholder content for news 4</p>`,
    contentRU: `<p>Текст-заполнитель для новости 4</p>`,
  },
  {
    id: 5,
    date: "2024-01-20",
    image: "/images/news-5.jpg",
    titleEN: "Exclusive Discount for Early Adopters",
    titleRU: "Эксклюзивная скидка для ранних пользователей",
    excerptEN: "Sign up for TauRent before the official launch and receive a special discount on your first rental.",
    excerptRU: "Зарегистрируйтесь в TauRent до официального запуска и получите специальную скидку на первую аренду.",
    contentEN: `<p>Placeholder content for news 5</p>`,
    contentRU: `<p>Текст-заполнитель для новости 5</p>`,
  },
  {
    id: 6,
    date: "2024-02-05",
    image: "/images/news-6.jpg",
    titleEN: "TauRent Mobile App Now Available for iOS and Android",
    titleRU: "Мобильное приложение TauRent теперь доступно для iOS и Android",
    excerptEN: "The TauRent mobile app is now available for download on iOS and Android platforms.",
    excerptRU: "Мобильное приложение TauRent теперь доступно для скачивания на платформах iOS и Android.",
    contentEN: `<p>Placeholder content for news 6</p>`,
    contentRU: `<p>Текст-заполнитель для новости 6</p>`,
  },
  {
    id: 7,
    date: "2024-02-15",
    image: "/images/news-7.jpg",
    titleEN: "TauRent Reaches 1,000 Users Milestone",
    titleRU: "TauRent достигает отметки в 1000 пользователей",
    excerptEN: "We're thrilled to announce that TauRent has reached its first major milestone of 1,000 registered users.",
    excerptRU: "Мы рады сообщить, что TauRent достиг своего первого важного рубежа в 1000 зарегистрированных пользователей.",
    contentEN: `<p>Placeholder content for news 7</p>`,
    contentRU: `<p>Текст-заполнитель для новости 7</p>`,
  }
];

// Content component that takes locale and newsItem as props
async function NewsArticleContent({ 
  locale,
  newsItem
}: { 
  locale: string;
  newsItem: NewsItem;
}) {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-8">
      <Link
        href={`/${locale}/news`}
        className="mb-6 inline-flex items-center text-primary hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        {locale === 'en' ? 'Back to News' : 'Назад к новостям'}
      </Link>
      
      <article className="mx-auto max-w-3xl">
        <header className="mb-8">
          <time dateTime={newsItem.date} className="text-sm text-gray-500">
            {formatDateLocalized(newsItem.date, locale)}
          </time>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">
            {locale === 'en' ? newsItem.titleEN : newsItem.titleRU}
          </h1>
        </header>
        
        <div className="relative mb-8 h-64 w-full overflow-hidden rounded-lg md:h-96">
          {/* Replace placeholder with skier image */}
          <SkierImage 
            alt={locale === 'en' ? 'News Feature Image' : 'Изображение новости'}
            priority
          />
        </div>
        
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ 
            __html: locale === 'en' ? newsItem.contentEN : newsItem.contentRU 
          }}
        />
        
        <div className="mt-12 flex justify-between border-t pt-6">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {locale === 'en' ? 'Back to News' : 'Назад к новостям'}
          </Link>
          
          <div className="flex gap-4">
            <button className="inline-flex items-center text-gray-500 hover:text-primary">
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-6-8V7h8v2h-8z"/>
              </svg>
              {locale === 'en' ? 'Share' : 'Поделиться'}
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

// Main page component adheres to PageProps interface
export default async function NewsArticlePage({
  params,
}: PageProps) {
  // Await the params Promise
  const resolvedParams = await params;
  const { locale, id } = resolvedParams;
  const newsId = parseInt(id);
  
  const newsItem = newsItems.find(item => item.id === newsId);
  
  if (!newsItem) {
    notFound();
  }
  
  // Use the content component to render with the resolved locale
  return <NewsArticleContent locale={locale} newsItem={newsItem} />;
} 