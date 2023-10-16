/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
};

module.exports = nextConfig;
