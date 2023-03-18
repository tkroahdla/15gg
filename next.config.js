/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ddragon.leagueoflegends.com", "ddragon.canisback.com"],
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "next/font/google", options: { subsets: ["latin"] } },
    ],
  },
};

module.exports = nextConfig;
