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
}

module.exports = nextConfig 