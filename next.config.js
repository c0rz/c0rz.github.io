/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true // karena Anda menggunakan next export
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{repo-name}' : '', // Ganti {repo-name} dengan nama repository Anda
  basePath: process.env.NODE_ENV === 'production' ? '/{repo-name}' : '', // Ganti {repo-name} dengan nama repository Anda
}

module.exports = nextConfig