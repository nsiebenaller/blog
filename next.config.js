const isProd = process.env.NODE_ENV === "production";

const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
	reactStrictMode: true,
	output: "export",
	images: { unoptimized: true },
	pageExtensions: ["ts", "tsx", "mdx"],
	basePath: isProd ? "/blog" : undefined,
	assetPrefix: isProd ? "/blog" : undefined,
});
