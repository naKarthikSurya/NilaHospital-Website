/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },
      {
        source: "/why-we-are-best-hospital-in-namakkal",
        destination: "/why-choose-nila-hospital-namakkal",
        permanent: true,
      },
      {
        source: "/why-we-are-best-hospital-in-namakkal/",
        destination: "/why-choose-nila-hospital-namakkal",
        permanent: true,
      },
      {
        source: "/best-women-hospital-in-namakkal",
        destination: "/womens-hospital-namakkal",
        permanent: true,
      },
      {
        source: "/best-women-hospital-in-namakkal/",
        destination: "/womens-hospital-namakkal",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
    ];
  },
};

export default nextConfig;
