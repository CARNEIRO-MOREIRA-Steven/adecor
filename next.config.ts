import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // applique la règle à toutes les pages
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com;
              script-src 'self' 'unsafe-inline';
              frame-src 'self' https://www.google.com https://maps.google.com;
              connect-src 'self';
              img-src 'self' data: https:;
            `.replace(/\s{2,}/g, " ").trim(), // compactage de l'en-tête
          },
        ],
      },
    ];
  },
};

export default nextConfig;
