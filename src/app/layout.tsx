/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import '../index.css';

export const metadata: Metadata = {
  title: 'Tokenly | The Emergency AI Token Air-Drop for Bootstrapped Devs',
  description: 'Stop sharing raw master keys or risking account bans. Allocate secure, hard-capped compute budgets to your teammates profiles instantly.',
  keywords: ['AI tokens', 'air-drop', 'cost control', 'CLI rate limit', 'team token manager', 'developer tool'],
  authors: [{ name: 'Tokenly Team' }],
  metadataBase: new URL('https://thenameisvicky.github.io/tokenly'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Tokenly | The Emergency AI Token Air-Drop',
    description: 'Stop sharing raw keys or risking account bans. Allocate secure, hard-capped compute budgets to your teammates profiles.',
    url: 'https://thenameisvicky.github.io/tokenly',
    siteName: 'Tokenly',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Tokenly Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenly | The Emergency AI Token Air-Drop',
    description: 'Allocate secure, hard-capped compute budgets to your teammates profiles instantly.',
    images: ['/logo.png'],
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
  operatingSystem: 'Any (CLI, Web, Node.js, Python, Go API)',
  applicationCategory: 'DeveloperApplication',
  description: 'An emergency AI token air-drop gateway to safely allocate scoped credit limits to developers.',
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
