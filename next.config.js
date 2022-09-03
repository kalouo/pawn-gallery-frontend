/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['ipfs.io', 'https://source.unsplash.com'],
  },
};

module.exports = nextConfig;
