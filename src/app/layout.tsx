import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Tokenly | Peer-to-Peer AI Token Proxy & Team Wallet',
  description: 'Stop exposing raw API keys or sharing credit cards. Allocate, group-split, and route OpenAI, Anthropic, and DeepSeek tokens instantly with a lightweight <5ms proxy gateway.',
  keywords: ['AI proxy', 'OpenAI gateway', 'LLM cost control', 'AI token wallet', 'team API key management', 'developer tools', 'micro-SaaS'],
  authors: [{ name: 'Tokenly Team' }],
  metadataBase: new URL('https://thenameisvicky.github.io/tokenly'),
  openGraph: {
    title: 'Tokenly — The GPay for AI Tokens',
    description: 'Allocate, split, and route AI tokens across your team instantly via secure, lightweight proxy links.',
    url: 'https://thenameisvicky.github.io/tokenly',
    siteName: 'Tokenly',
    images: [
      {
        url: '/tokenly/og-image.png', // Corrected path with basePath for GitHub Pages
        width: 1200,
        height: 630,
        alt: 'Tokenly Dashboard Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenly | P2P AI Token Gateway',
    description: 'Stop bleeding LLM API costs. Route and split AI tokens across developers instantly.',
    images: ['/tokenly/og-image.png'], // Corrected path with basePath for GitHub Pages
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tokenly',
  operatingSystem: 'Any (Web, Node.js, Python, Go API)',
  applicationCategory: 'DeveloperApplication',
  description: 'A lightweight peer-to-peer proxy gateway for team-based AI token allocation and cost splitting.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
