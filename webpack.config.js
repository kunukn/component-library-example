/*
 * webpack 4+
 * */

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const package = require('./package.json');

const IsWebpackDevServer = /webpack-dev-server/.test(process.env.npm_lifecycle_script);

module.exports = (env = {}, argv = {}) => {
  const isProd = argv.mode === 'production';

  console.log('***', isProd
    ? 'prod'
    : 'dev', '***');

  let prodEntry = './src/production-entry';
  let devEntry = './src/Bootstrapper';

  let config = {
    devtool: isProd
      ? 'source-map'
      : 'cheap-module-source-map',
    mode: isProd
      ? 'production'
      : 'development',
    optimization: {
      // minimize: false, // is default true in prod mode splitChunks: {   cacheGroups:
      // {     commons: {       test: /[\\/]node_modules[\\/]/,       name: 'vendors',
      //       chunks: 'all'     }   } }, // Keep the runtime chunk seperated to
      // enable long term caching //
      // https://twitter.com/wSokra/status/969679223278505985 runtimeChunk: true,

      minimizer: [
        isProd && new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true
            },
            output: {
              comments: false
            }
          },
          cache: true,
          parallel: true,
          sourceMap: true,
          extractComments: true
        }),
        isProd && new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            sourcemap: true
          }
        })
      ].filter(Boolean),

      /*
      code splitting
      https://github.com/webpack/webpack/tree/master/examples
      */
    },
    entry: {
      //vendor: Object.keys(package.dependencies), // not used
      ComponentLibraryExample: isProd
        ? [prodEntry]
        : [devEntry],
      ThirdPartyStylings: ['./src/third-party-stylings/example-of-third-party-styling.scss']
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].js',
      filename: '[name].js',
      library: 'ComponentLibraryExample',
      libraryTarget: 'umd',
      publicPath: '/'
    },
    devServer: {
      //https: true,
      port: 6007,
      contentBase: path.join(__dirname, ''),
      publicPath: '/',
      open: true,
      hot: true,
      disableHostCheck: true,
      watchContentBase: true,
      historyApiFallback: true, // react-router
      proxy: {
        '/api': {
          target: 'http://localhost:5555',
          secure: false,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: isProd
              }
            }
          ]
        }, {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          include: path.join(__dirname, 'src'),
          use: {
            loader: 'babel-loader'
          }
        }, {
          test: /\.scss$/,
          exclude: /node_modules/,
          include: path.join(__dirname, 'src'),
          use: [
            {
              loader: isProd
                ? MiniCssExtractPlugin.loader
                : 'style-loader',
              options: isProd
                ? {
                  publicPath: './'
                }
                : {}
            }, {
              loader: 'css-loader',
              options: {
                minimize: isProd || {
                  /* CSSNano Options */
                },
                sourceMap: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                data: '@import "_helpers.scss";',
                /* data and includePaths are setup used to make global vars and mixins work */
                includePaths: [path.join(__dirname, 'src/components/quarks')],
                /* provide the path for _helpers.scss file */
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
          include: [path.resolve(__dirname, '')],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
                mimetype: 'application/font-woff',
                // outputPath: 'fonts/', publicPath: '../', useRelativePath: isProd
              }
            }
          ]
        }, {
          test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
          include: [path.resolve(__dirname, 'src/icon-system')],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                mimetype: 'image/svg+xml'
              }
            }
          ]
        }
      ].filter(Boolean)
    },
    plugins: [
      isProd && new CleanWebpackPlugin('dist', {}),
      new MiniCssExtractPlugin({filename: '[name].css', chunkFilename: '[name]-[id].css'}),
      new HtmlWebpackPlugin({compile: false, inject: true, hash: true, template: 'src/index.html', filename: 'index.html'}),
      // This is necessary to emit hot updates (currently CSS only):
      !isProd && new webpack.HotModuleReplacementPlugin(),
      new WebpackMd5Hash(),
      isProd && new CopyWebpackPlugin([
        {
          from: 'fonts/font.css',
          to: 'fonts/font.css'
        }, {
          from: 'src/icon-system/icons.min.svg',
          to: 'icons.min.svg'
        }, {
          from: 'src/icon-system/icons.svg',
          to: 'icons.svg'
        }
      ], {}),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ].filter(Boolean),
    resolve: {
      //modules: [path.resolve(__dirname), 'node_modules'],
      extensions: [
        '.js', '.jsx', '.scss'
      ],
      alias: {
        root: __dirname,
        src: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components')
      }
    },
    externals: {}
  };

  if (isProd) {
    config.externals['react'] = {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    };
    config.externals['react-dom'] = {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    };
  }

  return config;
};
