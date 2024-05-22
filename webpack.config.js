const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "development",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // Matches .css files
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Turns CSS into JS modules
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|jpeg)$/i, // Matches image files
        use: [
          {
            loader: "file-loader", // Resolves import/require() on a file into a url and emits the file into the output directory
            options: {
              name: "[path][name].[ext]", // Keeps the original file name and path
            },
          },
        ],
      },
    ],
  },
};
