const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const outputPath = path.join(__dirname, "dist");
const mode = "development";
const enableSourceMap = mode === "development";

const mainConfig = {
  mode: mode,
  target: "electron-main",
  entry: "./src/main/index.js",
  output: {
    path: outputPath,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}

const rendererConfig = {
  mode: mode,
  target: "electron-renderer",
  entry: "./src/renderer/index.js",
  output: {
    path: outputPath,
    filename: "renderer.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enableSourceMap,
              importLoaders: 2 // Sass + PostCSS
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: enableSourceMap,
              plugins: () => [require("autoprefixer")] // add vender prefix
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enableSourceMap,
            }
          }
        ]),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
  ],
  devtool: "source-map"
}

module.exports = [mainConfig, rendererConfig]
