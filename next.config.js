/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh'],
    },
    images: {
        domains: ['nazukinan.s3.ap-southeast-2.amazonaws.com', 'images.unsplash.com'],
    },
};

module.exports = nextConfig;
