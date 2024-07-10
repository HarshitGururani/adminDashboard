/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images4.alphacoders.com",
      },
    ],
  },
};

module.exports = nextConfig;
