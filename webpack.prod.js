const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
      filename: "main.[contentHash].js",
      path: path.resolve(__dirname, "dist")
    },
    optimization: {
      minimizer: [
        new OptimizeCssAssetsPlugin(),
        new TerserPlugin(),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          favicon: "./src/assets/icons/favicon.ico",
          minify: {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true
          }
        })
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
      new CleanWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, //2. Extract css into files
            "css-loader", //1. Turns css into commonjs
          ]
        }
      ]
    }
});