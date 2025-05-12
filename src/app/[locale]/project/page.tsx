import { getMessages } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { type PageProps } from "@/lib/types";

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Content component that takes locale as a string prop
async function ProjectContent({ locale }: { locale: string }) {
  const messages = await getMessages(locale);
  
  return (
    <div className="container mx-auto px-4 py-12 sm:px-8">
      <h1 className="mb-8 text-4xl font-bold">{messages.project.title}</h1>
      
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="flex flex-col gap-6 md:col-span-8">
          <section>
            <h2 className="mb-6 text-2xl font-semibold">{messages.project.functionality}</h2>
            <div className="flex flex-col gap-6">
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {messages.project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start rounded-lg border p-4">
                    <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                      {index + 1}
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          <section className="border-t pt-6">
            <h2 className="mb-6 text-2xl font-semibold">{messages.project.navigation}</h2>
            <div className="flex flex-col gap-6">
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-1">
                {messages.project.nav_items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start rounded-lg border p-4">
                    <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          <section className="border-t pt-6">
            <h2 className="mb-6 text-2xl font-semibold">{messages.project.future}</h2>
            <div className="flex flex-col gap-6">
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-1">
                {messages.project.future_plans.map((plan: string, index: number) => (
                  <li key={index} className="flex items-start rounded-lg border p-4">
                    <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                      {index + 1}
                    </span>
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        
        <div className="flex flex-col gap-6 md:col-span-4">
          <div className="sticky top-24 rounded-lg border bg-white p-6 shadow">
            <h3 className="mb-4 border-b pb-2 text-xl font-semibold">
              {locale === 'en' ? 'Available on' : 'Доступно на'}
            </h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0477 7.83765C17.0195 7.86343 14.7028 9.21994 14.7028 11.9989C14.7422 15.1149 17.4622 16.3309 17.5 16.3309C17.5 16.3624 17.0761 18.0033 15.8835 19.6708C14.8725 21.0893 13.8049 22.5 12.2422 22.5C10.7362 22.5 10.1625 21.5633 8.43082 21.5633C6.77384 21.5633 5.98932 22.5 4.62864 22.5C3.09648 22.5 1.9261 20.9945 0.883233 19.5915C-0.42584 17.8262 -1.02978 14.37 -1.02978 11.0686C-1.02978 5.56774 2.71507 2.62302 6.37386 2.62302C7.84705 2.62302 9.08366 3.65248 10.0021 3.65248C10.8659 3.65248 12.2427 2.56048 13.9219 2.56048C14.5787 2.56048 16.8955 2.62302 18.3656 4.71828C18.2791 4.77145 17.0849 5.48503 17.0477 7.83765Z" fill="currentColor" />
                    <path d="M12.2531 2.26991C12.594 1.74493 13.1678 1.03134 13.9175 0.5C14.8152 0.594183 15.5286 1.12916 15.9991 1.82333C16.4695 2.51749 16.7537 3.39926 16.7537 4.28103C16.7537 4.34357 16.7537 4.40611 16.7159 4.46865C16.6781 4.46865 15.0633 4.98426 15.0633 7.02697C15.0633 9.44505 17.1193 10.1166 17.1949 10.1166C17.1949 10.179 17.0517 11.397 16.3751 12.5994C15.8291 13.5989 15.2365 14.5984 14.2822 14.5984C13.3845 14.5984 13.0436 13.9667 12.0137 13.9667C11.0971 13.9667 10.5133 14.5984 9.7146 14.5984C8.79163 14.5984 8.13658 13.5365 7.51256 12.5369C6.80648 11.3658 6.24195 9.56076 6.24195 7.85047C6.24195 5.01574 8.29794 3.55266 10.2873 3.55266C11.2039 3.55266 12.0515 4.12582 12.65 4.12582C13.2173 4.12582 14.1339 3.49042 15.2759 3.49042C15.6167 3.52167 15.9196 3.52167 16.2226 3.58421C15.1183 5.07787 14.9195 7.08951 14.9195 7.08951C14.9195 7.08951 12.6122 7.49138 12.6122 10.0228C12.6122 13.0301 15.5664 13.4945 15.6043 13.4945C15.6043 13.5258 15.2759 14.6343 14.3783 15.5712C13.8134 16.165 13.1963 16.6386 12.3187 16.6386C11.441 16.6386 11.0056 16.1338 10.0324 16.1338C9.15471 16.1338 8.57172 16.6386 7.69404 16.6386C6.81637 16.6386 6.14279 16.0967 5.60779 15.4924" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">
                    {locale === 'en' ? 'Download on the' : 'Загрузите в'}
                  </p>
                  <p className="font-semibold">App Store</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 rounded-lg border p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600">
                  <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.93781 20.5763C3.72639 20.5763 3.51855 20.5113 3.32418 20.3791C2.88361 20.0805 2.66434 19.5731 2.66434 18.931V5.07923C2.66434 4.4372 2.88718 3.92615 3.32418 3.62756C3.58639 3.45898 3.87608 3.44329 4.12898 3.51113C4.38187 3.5811 4.61461 3.73757 4.83746 3.98108L14.5632 12.0042L4.83746 20.0262C4.61461 20.2698 4.38187 20.4262 4.12898 20.494C4.00671 20.5499 3.97322 20.5763 3.93781 20.5763Z" />
                    <path d="M17.2929 12L20.8326 9.21399C21.3503 8.79785 21.6356 8.31294 21.6356 7.79235C21.6356 7.27177 21.3503 6.78686 20.8326 6.37071L14.604 1.2761C14.088 0.851618 13.5737 0.74446 13.1419 0.955806C12.7101 1.16937 12.4999 1.65428 12.4999 2.38125V21.6198C12.4999 22.3457 12.7101 22.8306 13.1419 23.0442C13.5737 23.2556 14.088 23.1484 14.604 22.7239L17.2929 20.5769" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">
                    {locale === 'en' ? 'GET IT ON' : 'ДОСТУПНО В'}
                  </p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </div>
              
              <div className="mt-4 rounded-lg bg-gray-50 p-4">
                <h4 className="font-medium">
                  {locale === 'en' ? 'Launch Date' : 'Дата запуска'}
                </h4>
                <p className="text-gray-600">
                  {locale === 'en' ? 'Coming Soon' : 'Скоро'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component adheres to PageProps interface
export default async function ProjectPage({
  params,
}: PageProps) {
  // Await the params Promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  
  // Use the content component to render with the resolved locale
  return <ProjectContent locale={locale} />;
} 