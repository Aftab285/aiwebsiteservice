import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://aiwebsiteservice.com'),
  title: {
    default: 'AI Website Developer | Professional AI Website Development Services — aiwebsiteservice.com',
    template: '%s | AI Website Service',
  },
  description:
    'I create professional, SEO-optimized, lightning-fast websites using the world\'s most advanced AI coding tools. Get a FREE custom homepage design before you hire me. Trusted AI Website Expert serving clients worldwide.',
  keywords: [
    'AI Website Developer',
    'AI Website Designer',
    'AI Website Expert',
    'AI Website Freelancer',
    'AI Web Developer',
    'Professional AI Website Developer',
    'Hire AI Website Developer',
    'Website Developer',
    'Website Designer',
    'Freelance Website Developer',
    'Website Development Services',
    'Website Design Services',
    'Business Website Developer',
    'Landing Page Developer',
    'SEO Website Developer',
    'Next.js Website Developer',
    'React Website Developer',
    'Modern Website Designer',
    'Responsive Website Developer',
    'Custom Website Developer',
    'AI Powered Website Developer',
    'Lovable AI Developer',
    'Claude AI Website Developer',
    'Gemini AI Website Developer',
    'AI Coding Expert',
    'AI Web Coder',
    'Website Built with AI',
    'Build Website Using AI',
  ],
  authors: [{ name: 'AI Website Service', url: 'https://aiwebsiteservice.com' }],
  creator: 'AI Website Service',
  publisher: 'AI Website Service',
  alternates: {
    canonical: 'https://aiwebsiteservice.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiwebsiteservice.com',
    siteName: 'AI Website Service',
    title: 'AI Website Developer — Professional AI Website Development Services',
    description:
      'I create professional, SEO-optimized, lightning-fast websites using the world\'s most advanced AI coding tools. Get a FREE custom homepage design before you hire me.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Website Service — Professional AI Website Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Website Developer — Professional AI Website Development Services',
    description:
      'I create professional, SEO-optimized, lightning-fast websites using AI. Get a FREE custom homepage design.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

/* JSON-LD Structured Data */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AI Website Service',
  url: 'https://aiwebsiteservice.com',
  logo: 'https://aiwebsiteservice.com/logo.png',
  description:
    'Professional AI website development services. We create stunning, SEO-optimized, lightning-fast websites using advanced AI coding tools.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+92-340-6187831',
    contactType: 'customer service',
    availableLanguage: ['English'],
  },
  sameAs: [],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'AI Website Service Expert',
  url: 'https://aiwebsiteservice.com',
  jobTitle: 'AI Website Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'AI Website Service',
  },
  knowsAbout: [
    'AI Website Development',
    'Next.js',
    'React',
    'SEO Optimization',
    'Web Design',
    'UI/UX Design',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Website Development Services',
  provider: {
    '@type': 'Organization',
    name: 'AI Website Service',
  },
  description:
    'Professional website development using AI-powered tools. Get a free homepage design before you hire.',
  areaServed: 'Worldwide',
  serviceType: 'Website Development',
  offers: {
    '@type': 'Offer',
    description: 'FREE custom homepage design',
    price: '0',
    priceCurrency: 'USD',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AI Website Service',
  url: 'https://aiwebsiteservice.com',
  description: 'Professional AI Website Development Services',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://aiwebsiteservice.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://aiwebsiteservice.com" />
        <meta name="theme-color" content="#0a0e27" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-9ZPJVNZJVX" />
      </body>
    </html>
  );
}
