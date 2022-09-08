/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://www.istockphoto.com",
      "picsum.photos",
      "api.ktmkart.com",
    ],
  },
};

module.exports = nextConfig;
