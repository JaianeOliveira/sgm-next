/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		JWT_SECRET: process.env.NEXT_PUBLIC_JWT_SECRET,
	},
};

module.exports = nextConfig;
