/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Tambahkan ini untuk Next.js 13+
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true // karena Anda menggunakan next export
  },
  // Tambahkan ini untuk menangani error prerender
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

module.exports = nextConfig