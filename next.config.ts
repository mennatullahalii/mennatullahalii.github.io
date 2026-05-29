import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Forces Next.js to build a static HTML/CSS/JS site
  output: "export",

  // Disables the Next.js image optimization server so GitHub Pages doesn't crash
  images: {
    unoptimized: true,
  },
};

export default nextConfig;