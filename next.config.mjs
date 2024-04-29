// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ru', 'eng', 'uz',],
    defaultLocale: 'ru'
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "standalone"
};

export default nextConfig;
  