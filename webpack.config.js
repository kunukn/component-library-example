// webpack 4+
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const package = require("./package.json");

const IsWebpackDevServer = /webpack-dev-server/.test(
  process.env.npm_lifecycle_script
);

module.exports = (env = {}, argv = {}) => {
  const isProd = argv.mode === "production";

  console.log("***", isProd ? "prod" : "dev", "***");

  let prodEntry = "./src/production-entry";
  let devEntry = "./src/index.js";

  let config = {
    devtool: "source-map",
    optimization: {
      //minimize: false, // is default true in prod mode

      minimizer: [
        isProd &&
          new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            extractComments: true
          }),
        isProd && new OptimizeCSSAssetsPlugin({})
      ].filter(Boolean)

      /*
      code splitting
      https://github.com/webpack/webpack/tree/master/examples
      */
    },
    entry: {
      //      vendor: Object.keys(package.dependencies),
      ComponentLibraryExample: isProd ? [prodEntry] : [devEntry]
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      chunkFilename: "[name].js",
      filename: "[name].js",
      library: "ComponentLibraryExample",
      libraryTarget: "umd",
      publicPath: "/"
    },
    devServer: {
      port: 9009,
      contentBase: path.join(__dirname, ""),
      open: true
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: isProd
              }
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          include: path.join(__dirname, "src"),
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          include: path.join(__dirname, "src"),
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : "style-loader",
              options: isProd ? {publicPath: './'} : {}
            },
            {
              loader: "css-loader",
              options: {
                minimize:
                  isProd ||
                  {
                    /* CSSNano Options */
                  }
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                data: '@import "_helpers.scss";', /* data and includePaths are setup used to make global vars and mixins work */
                includePaths: [path.join(__dirname, "src/components/base")], /* provide the path for _helpers.scss file */
                sourceMap: true
              }
            }
          ]
        },
        /*{
          test: /\.(png|woff(2)?|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000,
                mimetype: 'application/font-woff'
              }
            }
          ]
        },*/
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          include: path.resolve(__dirname, ""),
          use: [
            {
              loader: "file-loader",
              options: {
                name: "fonts/[name].[ext]",
                mimetype: "application/font-woff"
                // outputPath: 'fonts/', publicPath: '../', useRelativePath: isProd
              }
            }
          ]
        },
        {
          test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
          include: path.resolve(__dirname, "src/icon-system"),
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                mimetype: "image/svg+xml"
              }
            }
          ]
        }
      ].filter(Boolean)
    },
    plugins: [
      isProd && new CleanWebpackPlugin("dist", {}),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
        compile: false,
        inject: true,
        hash: true,
        template: "src/index.html",
        filename: "index.html"
      }),
      new WebpackMd5Hash(),
      isProd &&
        new CopyWebpackPlugin(
          [
            {
              from: "fonts/font.css",
              to: "fonts/font.css"
            },
            {
              from: "src/icon-system/icons.min.svg",
              to: "icons.min.svg"
            },
            {
              from: "src/icon-system/icons.svg",
              to: "icons.svg"
            }
          ],
          {}
        )
    ].filter(Boolean),
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
      alias: {
        root: __dirname,
        src: path.resolve(__dirname, "src"),
        components: path.resolve(__dirname, "src/components"),
        styles: path.resolve(__dirname, "src/styles")
      }
    },
    externals: {}
  };

  if (isProd) {
    config.externals["react"] = {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
      umd: "react"
    };
    config.externals["react-dom"] = {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
      umd: "react-dom"
    };
  }

  return config;
};
