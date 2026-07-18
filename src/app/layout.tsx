/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Tokenly | Minimal Wallet for Team AI Tokens',
  description: 'Stop exposing raw API keys or sharing corporate credit cards. Allocate scoped credit budgets, track individual usage, and control your team\'s AI expenses from one clean interface.',
  keywords: ['AI wallet', 'AI budget control', 'LLM cost tracking', 'team API key security', 'developer credit manager'],
  authors: [{ name: 'Tokenly Team' }],
  metadataBase: new URL('https://thenameisvicky.github.io/tokenly'),
  openGraph: {
    title: 'Tokenly — Minimal Wallet for Team AI Tokens',
    description: 'Stop exposing raw API keys or sharing credit cards. Allocate, split, and monitor AI budgets across developers instantly.',
    url: 'https://thenameisvicky.github.io/tokenly',
    siteName: 'Tokenly',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tokenly Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenly | Minimal Wallet for Team AI Tokens',
    description: 'Stop bleeding LLM costs. Securely allocate and track AI budgets across developers.',
    images: ['/og-image.png'],
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
  operatingSystem: 'Any (Web, API)',
  applicationCategory: 'DeveloperApplication',
  description: 'A minimal credit allocation wallet for team-based AI token budgeting and expense monitoring.',
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
