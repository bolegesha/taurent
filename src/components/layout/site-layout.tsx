"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

interface SiteLayoutProps {
  children: React.ReactNode;
  translations: {
    nav: {
      home: string;
      about: string;
      project: string;
      contact: string;
      news: string;
      gallery: string;
    };
    common: {
      languageSwitcher: string;
      languageEN: string;
      languageRU: string;
    };
  };
  currentLocale: string;
}

export function SiteLayout({ children, translations, currentLocale }: SiteLayoutProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Helper to get the translated path for the current route
  const getLocalizedPath = (targetLocale: string) => {
    // Remove the current locale from the path
    const segments = pathname.split('/');
    if (segments[1] === currentLocale) {
      segments[1] = targetLocale;
    }
    return segments.join('/');
  };

  // Generate navigation links
  const navLinks = [
    { label: translations.nav.home, href: `/${currentLocale}` },
    { label: translations.nav.about, href: `/${currentLocale}/about` },
    { label: translations.nav.project, href: `/${currentLocale}/project` },
    { label: translations.nav.contact, href: `/${currentLocale}/contact` },
    { label: translations.nav.news, href: `/${currentLocale}/news` },
    { label: translations.nav.gallery, href: `/${currentLocale}/gallery` },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2 font-bold">
            <span className="text-xl">TauRent</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary/90",
                  pathname === link.href
                    ? "text-primary font-semibold"
                    : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-4 flex items-center">
              <Globe className="mr-1 h-4 w-4" />
              <span className="text-sm font-medium">{translations.common.languageSwitcher}</span>
              <div className="ml-2 flex space-x-2">
                {locales.map((locale) => (
                  <Link
                    key={locale}
                    href={getLocalizedPath(locale)}
                    className={cn(
                      "text-sm font-medium px-2 py-1 rounded-md transition-colors",
                      currentLocale === locale
                        ? "bg-gray-100 text-primary"
                        : "hover:bg-gray-50"
                    )}
                  >
                    {locale === "en" ? translations.common.languageEN : translations.common.languageRU}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-md p-2 text-foreground/60 md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="container mx-auto px-4 pb-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary/90 py-2",
                    pathname === link.href
                      ? "text-primary font-semibold"
                      : "text-foreground/60"
                  )}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}

              {/* Language Switcher */}
              <div className="flex flex-col space-y-2 border-t pt-4 mt-2">
                <span className="flex items-center text-sm font-medium">
                  <Globe className="mr-2 h-4 w-4" />
                  {translations.common.languageSwitcher}
                </span>
                <div className="flex space-x-2">
                  {locales.map((locale) => (
                    <Link
                      key={locale}
                      href={getLocalizedPath(locale)}
                      className={cn(
                        "text-sm font-medium px-3 py-2 rounded-md transition-colors",
                        currentLocale === locale
                          ? "bg-gray-100 text-primary"
                          : "hover:bg-gray-50"
                      )}
                      onClick={closeMenu}
                    >
                      {locale === "en" ? translations.common.languageEN : translations.common.languageRU}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="w-full border-t bg-white py-6">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} TauRent</p>
            </div>
            <div className="flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={`footer-${link.href}`}
                  href={link.href}
                  className="text-xs text-gray-500 hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 