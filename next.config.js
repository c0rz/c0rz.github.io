/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true // karena Anda menggunakan next export
  },
  // Karena ini adalah user/organization page, tidak perlu basePath dan assetPrefix
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: process.env.NODE_ENV === 'production' ? '' : ''
}

module.exports = nextConfig