/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for GitHub Pages static deployment
  },
  basePath: '/tokenly',
};

export default nextConfig;
