const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for GitHub Pages static deployment
  },
  ...(isProd ? { basePath: '/tokenly' } : {}),
};

export default nextConfig;
