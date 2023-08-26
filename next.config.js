/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Corresponds to all routes
        headers: [
          {
            key: "Cache-Control",
            value: "public", // Example : cache for one hour (3600 seconds)
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
