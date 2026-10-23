/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
    // FIX: default deviceSizes go up to 3840px — nothing on this site is ever rendered
    // that wide, so the responsive-image algorithm could pick a needlessly huge (and
    // slow-to-fetch) variant for a small tile. Capping at 1920 keeps full-bleed heroes
    // sharp while removing the oversized buckets that only wasted bandwidth.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
