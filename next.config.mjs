/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.wixstatic.com", // Wix static domain for tech stack images
      "cdn-icons-png.flaticon.com", // External GitHub icon source
      "cdn3.iconfinder.com",
      "cdn-icons-png.flaticon.com",
    ],
  },
};

export default nextConfig;
