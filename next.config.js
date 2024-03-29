/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // eslint: {
  // //   Warning: This allows production builds to successfully complete even if
  // //   your project has ESLint errors.
  //   ignoreDuringBuilds: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'rqcoa3ubmzn9qpsj.public.blob.vercel-storage.com',
      },
    ],
  },
}

module.exports = nextConfig
