/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  styledComponents: true,
  images: {
    domains: ['ipfs.io'],
  },
};

module.exports = nextConfig;
