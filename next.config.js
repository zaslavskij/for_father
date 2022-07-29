module.exports = {
	reactStrictMode: true,
	webpack5: true,
	webpack: (config) => {
		config.resolve.fallback = {
			fs: false,
			path: false,
		};

		return config;
	},
	async rewrites() {
		return [
			{
				source: "/files",
				destination: "http://localhost:8090",
			},
		];
	},
};
