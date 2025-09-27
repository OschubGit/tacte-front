import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deshabilitar completamente ESLint y TypeScript durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Deshabilitar optimización de imágenes para evitar warnings
  images: {
    unoptimized: true,
  },
  /* async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8888/tacte/public/api/:path*",
      },
      {
        source: "/web/:path*",
        destination: "http://localhost:8888/tacte/public/web/:path*",
      },
    ];
  }, */
};

export default nextConfig;
