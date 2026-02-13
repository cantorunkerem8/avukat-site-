import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar, Footer } from '@/components/layout';
import { siteContent } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://guvenhukuk.com'),
  title: {
    default: siteContent.seo.default.title,
    template: `%s | ${siteContent.office.name}`,
  },
  description: siteContent.seo.default.description,
  keywords: siteContent.seo.default.keywords,
  authors: [{ name: siteContent.office.name }],
  creator: siteContent.office.name,
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://guvenhukuk.com',
    siteName: siteContent.office.name,
    title: siteContent.seo.default.title,
    description: siteContent.seo.default.description,
    images: siteContent.seo.default.ogImage ? [{ url: siteContent.seo.default.ogImage }] : [],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.seo.default.title,
    description: siteContent.seo.default.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
