const path = require("path");
const ROOT = path.resolve(__dirname, "src");

/**
 * Webpack Plugins
 */

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: ROOT,

  entry: "./index.js",

  resolve: {
    extensions: [".js"],
    alias: {
      "~": ROOT
    }
  },

  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "tslint-loader",
      //     options: {
      //       emitErrors: true
      //     }
      //   },
      //   enforce: "pre"
      // },

      // {
      //   test: /\.js$/,
      //   exclude: [/node_modules/],
      //   use: ["ng-annotate-loader", "awesome-typescript-loader"]
      // },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: "../"
        })
      },

      {
        test: /\.(jpg|png|gif)$/,
        use: "file-loader"
      },

      {
        test: /\.(svg|woff|woff2|eot|ttf)$/,
        use: "file-loader?outputPath=fonts/"
      },

      {
        test: /.html$/,
        exclude: /index.html$/,
        use: "html-loader"
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    }),
    new HtmlWebpackPlugin({
      title: "AngularJS - Webpack",
      template: "index.html",
      inject: true
    }),
    // new LoaderOptionsPlugin({
    //   debug: true,
    //   options: {
    //     tslint: {
    //       configuration: require("./tslint.json"),
    //       typeCheck: true
    //     }
    //   }
    // }),
    new ExtractTextPlugin("css/style.css")
  ]
};
