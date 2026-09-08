/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "lamonarealtors.com" }],
        destination: "https://www.lamonarealtors.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
