/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "scontent.fdac41-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "scontent.fdac155-1.fna.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
  // distDir: "build-directory",
};

module.exports = nextConfig;
