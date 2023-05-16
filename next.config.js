/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API: process.env.CONTENTFUL_CONTENT_DELIVERY_API
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.ctfassets.net",
        protocol: "https"
      }
    ]
  }
}

module.exports = nextConfig
