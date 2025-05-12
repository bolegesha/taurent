# TauRent - Ski and Tourist Equipment Rental Website

A bilingual (Russian/English) website for TauRent, a mobile application for ski and tourist equipment rental in Almaty.

## Features

- **Bilingual Support**: Fully implemented Russian and English language support
- **Modern UI**: Built with Next.js, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach for all devices
- **SEO Optimized**: Server-side rendering for better search engine visibility
- **Performance Optimized**: Uses Next.js App Router for optimal performance

## Website Sections

- **Home**: Introduction to TauRent application
- **About Us**: Information about the company
- **About Project**: Detailed information about the TauRent application features
- **Contact**: Contact form and information
- **News**: Latest news and updates
- **Gallery**: Image gallery of equipment and app screenshots

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: Custom implementation with next-intl
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Typography**: Tailwind Typography plugin

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/taurent.git
cd taurent
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

## Project Structure

```
taurent/
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js App Router
│   │   ├── (site)/  # Site pages group
│   │   ├── [locale] # Locale-specific routes
│   │   └── ui/      # UI components
│   ├── components/  # React components
│   │   ├── layout/  # Layout components
│   │   ├── sections/# Page-specific sections
│   │   └── ui/      # UI components
│   ├── lib/         # Utility functions
│   │   └── i18n.ts  # Internationalization configuration
│   └── messages/    # Translation files
│       ├── en.json  # English translations
│       └── ru.json  # Russian translations
├── next.config.ts   # Next.js configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## Deployment

The site is ready to be deployed on platforms like Vercel or Netlify.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)
