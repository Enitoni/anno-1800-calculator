// @ts-check
const path = require("path")
const webpackMerge = require("webpack-merge")
const webpack = require("webpack")

const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin")

/** @type {import("webpack").Configuration} */
const baseConfig = {
  mode: "none",
  entry: ["core-js/stable", "regenerator-runtime/runtime", "./src/index.tsx"],
  plugins: [
    new webpack.DefinePlugin({
      "process.env.__SERVER__": JSON.stringify(false),
    }),
    new HtmlPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: path.resolve(__dirname, "build/public/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { legacy: true }],
              ["@babel/plugin-proposal-class-properties", { loose: true }],
              "@babel/plugin-proposal-nullish-coalescing-operator",
              "@babel/plugin-proposal-optional-chaining",
              "@babel/plugin-syntax-dynamic-import",
              "babel-plugin-styled-components",
            ],
          },
        },
      },
      {
        enforce: "pre",
        test: /\.[jt]sx?$/,
        use: "eslint-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    filename: "[name].js?q=[chunkhash]",
    chunkFilename: "[name].js?q=[chunkhash]",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/",
  },
}

/** @type {import("webpack").Configuration} */
const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    compress: true,
    port: 9000,
  },
}

/** @type {import("webpack").Configuration} */
const prodConfig = {
  mode: "production",
  plugins: [
    new CopyPlugin([
      {
        from: "./public",
        ignore: ["./public/index.html"],
      },
    ]),
  ],
  optimization: {
    minimize: true,
    nodeEnv: "production",
  },
  output: {
    publicPath: "/anno-1800-calculator",
  },
}

module.exports = (() => {
  if (process.env.NODE_ENV === "production") {
    console.info("Running production config")
    return webpackMerge(baseConfig, prodConfig)
  }

  console.info("Running development config")
  return webpackMerge(baseConfig, devConfig)
})()
