module.exports = {
  trailingSlash: true,
  ...(process.env.NEXT_STATIC_EXPORT === "1"
    ? { output: "export", distDir: "html" }
    : {}),
  images: { disableStaticImages: true },
  webpack: (config) => {
    config.module.rules.push(
      { test: /\.md$/, type: "asset/source" },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset/resource",
        generator: { filename: "static/media/[name].[contenthash][ext]" },
      },
    );
    return config;
  },
};
