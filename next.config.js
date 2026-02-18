/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/stape-website',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/stape-website',
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
