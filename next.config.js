/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '',
    assetPrefix: '',
    distDir: 'out',
    trailingSlash: true,
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif)$/i,
            type: 'asset/resource',
        });
        return config;
    },
}

module.exports = nextConfig 