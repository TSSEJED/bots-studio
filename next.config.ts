import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com', 'i.imgur.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable static exports for full static site generation
  output: 'export',
  // Optional: Add a trailing slash for better compatibility
  trailingSlash: true,
  // Enable React DevTools in production
  productionBrowserSourceMaps: false,
  // Enable server actions if needed
  experimental: {
    serverActions: {},
  },
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://botsstudio.vercel.app',
  },
  // Enable CORS
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
