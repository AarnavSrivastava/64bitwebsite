/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.youtube.com'],
    formats: ['image/webp'],
  },
  swcMinify: true,
}

module.exports = nextConfig
