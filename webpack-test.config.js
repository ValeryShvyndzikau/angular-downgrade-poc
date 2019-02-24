const path = require("path");

const ROOT = path.resolve(__dirname, "src");
const DESTINATION = path.resolve(__dirname, "dist");

const webpack = require("webpack");

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
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
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

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]
};
