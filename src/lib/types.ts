// For Next.js 15, we need special types that work with dynamic params
export interface PageParams {
  locale: string;
  [key: string]: string;
}

export interface PageProps {
  params: Promise<PageParams>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface LayoutProps {
  children: React.ReactNode;
  params: Promise<PageParams>;
}

export interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<Partial<PageParams>>;
} 