import { getMessages } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { type PageProps } from "@/lib/types";
import { SkierImage } from "@/components/ui/skier-image";

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Content component that takes locale as a string prop
async function AboutContent({ locale }: { locale: string }) {
  const messages = await getMessages(locale);
  
  return (
    <div className="container mx-auto px-4 py-12 sm:px-8">
      <h1 className="mb-8 text-4xl font-bold">{messages.about.title}</h1>
      
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-lg text-gray-700">{messages.about.description}</p>
          
          <div className="rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === 'en' ? 'Our Mission' : 'Наша миссия'}
            </h2>
            <p className="text-gray-700">
              {locale === 'en' 
                ? 'To make high-quality sports equipment accessible to everyone, simplifying the rental process and providing a wide selection to our users.'
                : 'Сделать качественное спортивное снаряжение доступным для каждого, упрощая процесс аренды и предоставляя широкий выбор нашим пользователям.'}
            </p>
          </div>
          
          <div className="rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === 'en' ? 'Our Values' : 'Наши ценности'}
            </h2>
            <ul className="list-inside list-disc text-gray-700">
              <li>
                {locale === 'en' 
                  ? 'Quality: We partner only with verified stores offering quality equipment'
                  : 'Качество: Мы сотрудничаем только с проверенными магазинами, предлагающими качественное снаряжение'}
              </li>
              <li>
                {locale === 'en' 
                  ? 'Simplicity: We aim to make the rental process as smooth as possible'
                  : 'Простота: Мы стремимся сделать процесс аренды максимально гладким'}
              </li>
              <li>
                {locale === 'en' 
                  ? 'Accessibility: We believe good equipment should be accessible to everyone'
                  : 'Доступность: Мы верим, что хорошее снаряжение должно быть доступно каждому'}
              </li>
              <li>
                {locale === 'en' 
                  ? 'Community: We support the active sports community in Almaty'
                  : 'Сообщество: Мы поддерживаем активное спортивное сообщество Алматы'}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-80">
            <SkierImage 
              alt={locale === 'en' ? 'Skier in the mountains' : 'Лыжник в горах'}
              priority
            />
          </div>
          
          <div className="rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              {locale === 'en' ? 'Our Team' : 'Наша команда'}
            </h2>
            <p className="mb-4 text-gray-700">
              {locale === 'en' 
                ? 'Our team consists of outdoor enthusiasts who are passionate about making sports equipment rental accessible and convenient.'
                : 'Наша команда состоит из энтузиастов активного отдыха, увлеченных идеей сделать аренду спортивного снаряжения доступной и удобной.'}
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex flex-col items-center gap-2">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full">
                    <SkierImage 
                      alt={locale === 'en' ? `Team member ${item}` : `Член команды ${item}`}
                    />
                  </div>
                  <p className="font-medium">
                    {locale === 'en' ? `Team Member ${item}` : `Член команды ${item}`}
                  </p>
                  <p className="text-xs text-gray-500">
                    {locale === 'en' ? 'Position' : 'Должность'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component adheres to PageProps interface
export default async function AboutPage({
  params,
}: PageProps) {
  // Await the params Promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  // Use the content component to render with the resolved locale
  return <AboutContent locale={locale} />;
} 