import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // أي طلب يبدأ بـ /api
        destination: "http://localhost:5500/api/:path*", // يذهب للbackend
      },
    ];
  },
};

export default nextConfig;
