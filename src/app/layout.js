import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Lovi Labs — Digital Solutions | Web, Design, Marketing & AI',
  description: 'Lovi Labs is a digital solutions company transforming ideas into impactful digital experiences through modern websites, UI/UX design, social media marketing, and AI-powered solutions.',
  keywords: ['web development', 'UI/UX design', 'digital marketing', 'AI solutions', 'web applications', 'digital strategy', 'Lovi Labs'],
  icons: {
    icon: '/assets/ICON - FULL COLOR.png',
    apple: '/assets/ICON - FULL COLOR.png',
  },
  openGraph: {
    title: 'Lovi Labs — Digital Solutions',
    description: 'Building digital experiences through Web, Marketing, Design & AI',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lovi Labs',
    images: ['/assets/lovilabs-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lovi Labs — Digital Solutions',
    description: 'Building digital experiences through Web, Marketing, Design & AI',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        <Navbar />
        <main style={{ paddingTop: 'var(--nav-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
