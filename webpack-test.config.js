const path = require("path");
const webpack = require("webpack");
const ROOT = path.resolve(__dirname, "src");
const DESTINATION = path.resolve(__dirname, "dist");

/**
 * Webpack Plugins
 */
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");

module.exports = {
  context: ROOT,

  resolve: {
    extensions: [".js"],
    alias: {
      "~": ROOT
    }
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },

      {
        test: /\.(jpg|png|gif|svg|woff|woff2|eot|ttf)$/,
        use: "file-loader"
      },

      {
        test: /.html$/,
        use: "html-loader"
      }
    ]
  },

  plugins: []
};
