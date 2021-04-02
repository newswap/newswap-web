const withImages = require("next-images");
module.exports = withImages({
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    config.node = {
      fs: "empty",
    };
    return config;
  },
});
