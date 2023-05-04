/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ...other configuration options...
  node: {
    fs: "empty",
  },
};

module.exports = nextConfig;
