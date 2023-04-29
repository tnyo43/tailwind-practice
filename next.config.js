/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  domains: ["www.pakutaso.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pakutaso.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
