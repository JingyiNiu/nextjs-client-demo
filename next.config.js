/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
    },
};

module.exports = nextConfig;
