/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Tambahkan ini untuk Next.js 13+
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true // karena Anda menggunakan next export
  },
  // Hapus assetPrefix dan basePath karena ini adalah user page
}

module.exports = nextConfig