import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https:; img-src 'self' data:; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
