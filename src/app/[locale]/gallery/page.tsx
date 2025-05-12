import { getMessages } from "@/lib/i18n";
import { type PageProps } from "@/lib/types";
import { SkierImage } from "@/components/ui/skier-image";
import { locales } from "@/lib/i18n";

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Mock gallery data
const galleryItems = [
  {
    id: 1,
    category: "ski",
    titleEN: "Ski Equipment",
    titleRU: "Лыжное снаряжение",
    imageSrc: "/images/gallery/ski-1.jpg", // Placeholder path
  },
  {
    id: 2,
    category: "ski",
    titleEN: "Premium Skis",
    titleRU: "Премиальные лыжи",
    imageSrc: "/images/gallery/ski-2.jpg", // Placeholder path
  },
  {
    id: 3,
    category: "snowboard",
    titleEN: "Snowboard Setup",
    titleRU: "Комплект для сноуборда",
    imageSrc: "/images/gallery/snowboard-1.jpg", // Placeholder path
  },
  {
    id: 4,
    category: "snowboard",
    titleEN: "Professional Snowboards",
    titleRU: "Профессиональные сноуборды",
    imageSrc: "/images/gallery/snowboard-2.jpg", // Placeholder path
  },
  {
    id: 5,
    category: "camping",
    titleEN: "Camping Tents",
    titleRU: "Кемпинговые палатки",
    imageSrc: "/images/gallery/camping-1.jpg", // Placeholder path
  },
  {
    id: 6,
    category: "camping",
    titleEN: "Backpacking Equipment",
    titleRU: "Снаряжение для походов",
    imageSrc: "/images/gallery/camping-2.jpg", // Placeholder path
  },
  {
    id: 7,
    category: "biking",
    titleEN: "Mountain Bikes",
    titleRU: "Горные велосипеды",
    imageSrc: "/images/gallery/biking-1.jpg", // Placeholder path
  },
  {
    id: 8,
    category: "biking",
    titleEN: "Road Bikes",
    titleRU: "Шоссейные велосипеды",
    imageSrc: "/images/gallery/biking-2.jpg", // Placeholder path
  },
  {
    id: 9,
    category: "app",
    titleEN: "TauRent App Interface",
    titleRU: "Интерфейс приложения TauRent",
    imageSrc: "/images/gallery/app-1.jpg", // Placeholder path
  },
  {
    id: 10,
    category: "app",
    titleEN: "Booking Process Demo",
    titleRU: "Демонстрация процесса бронирования",
    imageSrc: "/images/gallery/app-2.jpg", // Placeholder path
  },
  {
    id: 11,
    category: "store",
    titleEN: "Partner Store - Skadi",
    titleRU: "Магазин-партнер - Skadi",
    imageSrc: "/images/gallery/store-1.jpg", // Placeholder path
  },
  {
    id: 12,
    category: "store",
    titleEN: "Partner Store - Tobe",
    titleRU: "Магазин-партнер - Tobe",
    imageSrc: "/images/gallery/store-2.jpg", // Placeholder path
  },
];

// Content component that takes locale as a string prop
async function GalleryContent({ 
  locale, 
  category 
}: { 
  locale: string;
  category?: string;
}) {
  const messages = await getMessages(locale);
  
  // Filter gallery items by category if specified
  const filteredItems = category
    ? galleryItems.filter(item => item.category === category)
    : galleryItems;
  
  // Get unique categories for the filter
  const categories = Array.from(new Set(galleryItems.map(item => item.category)));
  
  return (
    <div className="container mx-auto px-4 py-12 sm:px-8">
      <h1 className="mb-8 text-4xl font-bold">{messages.gallery.title}</h1>
      
      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        <a
          href={`/${locale}/gallery`}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            !category ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {locale === 'en' ? 'All' : 'Все'}
        </a>
        {categories.map((cat) => (
          <a
            key={cat}
            href={`/${locale}/gallery?category=${cat}`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              category === cat ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {locale === 'en' ? getCategoryNameEN(cat) : getCategoryNameRU(cat)}
          </a>
        ))}
      </div>
      
      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="group overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-md">
            <div className="relative h-48 overflow-hidden">
              {/* Replace placeholder with skier image */}
              <SkierImage 
                alt={locale === 'en' ? item.titleEN : item.titleRU}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">
                {locale === 'en' ? item.titleEN : item.titleRU}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {locale === 'en' ? getCategoryNameEN(item.category) : getCategoryNameRU(item.category)}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="mt-12 flex flex-col items-center justify-center rounded-lg bg-gray-50 py-12 text-center">
          <svg className="mb-4 h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900">
            {locale === 'en' ? 'No images found' : 'Изображений не найдено'}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {locale === 'en' 
              ? 'Try selecting a different category or check back later.' 
              : 'Попробуйте выбрать другую категорию или проверьте позже.'}
          </p>
          <a
            href={`/${locale}/gallery`}
            className="mt-4 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
          >
            {locale === 'en' ? 'Show all images' : 'Показать все изображения'}
          </a>
        </div>
      )}
    </div>
  );
}

// Main page component adheres to PageProps interface
export default async function GalleryPage({
  params,
  searchParams,
}: PageProps) {
  // Await the params Promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  // Get category from search params
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category as string | undefined;
  
  // Use the content component to render with the resolved locale
  return <GalleryContent locale={locale} category={category} />;
}

// Helper functions to get category names in different languages
function getCategoryNameEN(category: string): string {
  switch (category) {
    case "ski":
      return "Skiing";
    case "snowboard":
      return "Snowboarding";
    case "camping":
      return "Camping";
    case "biking":
      return "Biking";
    case "app":
      return "App Interface";
    case "store":
      return "Partner Stores";
    default:
      return category;
  }
}

function getCategoryNameRU(category: string): string {
  switch (category) {
    case "ski":
      return "Лыжи";
    case "snowboard":
      return "Сноуборд";
    case "camping":
      return "Кемпинг";
    case "biking":
      return "Велосипеды";
    case "app":
      return "Интерфейс приложения";
    case "store":
      return "Магазины-партнеры";
    default:
      return category;
  }
} 