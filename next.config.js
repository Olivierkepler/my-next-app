/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Optimize for AWS deployment
  output: 'standalone',
  // Configure image domains if you're using next/image
  images: {
    domains: ['your-s3-bucket.s3.amazonaws.com'],
  },
  // Add any environment variables you need
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig 