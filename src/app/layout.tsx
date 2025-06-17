import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Bots Studio — Discord Bots & Automation",
  description: "Get powerful Discord bots, moderation, community tools, and more. Join our Discord for instant setup and support.",
  keywords: [
    'Discord bots',
    'Discord bot packs',
    'Discord moderation',
    'Discord server management',
    'Discord automation',
    'Discord custom commands',
    'Discord bot hosting',
    'Discord community tools',
    'Discord server setup',
    'Discord bot development'
  ],
  authors: [{ name: 'Bots Studio Team' }],
  openGraph: {
    title: "Bots Studio — Discord Bots & Automation",
    description: "Get powerful Discord bots, moderation, community tools, and more. Join our Discord for instant setup and support.",
    url: "https://botsstudio.vercel.app/",
    siteName: "Bots Studio",
    images: [
      {
        url: "https://botsstudio.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Bots Studio Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bots Studio — Discord Bots & Automation",
    description: "Get powerful Discord bots, moderation, community tools, and more. Join our Discord for instant setup and support.",
    images: ["https://botsstudio.vercel.app/logo.png"],
  },
  other: {
    "google-site-verification": "myklUNkJYUZCRVKSZyg9SX97yPeqRrb8efs1FVnvDyI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">

      <body className={`${inter.className} h-full bg-white`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
