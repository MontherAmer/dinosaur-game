module.exports = {
  entry: "./scripts/index.js",
  mode: "development",
  module: {
      rules: [
          {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
          },
          {
              test: /\.png$/,
              use: ["url-loader"],
          },
          {
              test: /\.gif$/,
              use: ["url-loader"],
          },
          {
              test: /\.ttf$/,
              use: ["url-loader"],
          },
      ],
  },
  output: {
      path: `${__dirname}/dist`,
      filename: "bundle.js",
  },
};
