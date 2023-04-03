const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
	reactStrictMode: true,
	pageExtensions: ["ts", "tsx", "mdx"],
	basePath: "/blog",
	assetPrefix: "/blog",
});
