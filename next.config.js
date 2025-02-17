/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true // karena Anda menggunakan next export
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/c0rz.github.io' : '', // Sesuaikan dengan nama repo Anda
  basePath: process.env.NODE_ENV === 'production' ? '/c0rz.github.io' : '', // Sesuaikan dengan nama repo Anda
}

module.exports = nextConfig