import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Forces Next.js to build a static HTML/CSS/JS site
  output: "export",

  // Disables the Next.js image optimization server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;