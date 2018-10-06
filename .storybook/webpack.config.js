// you can use this file to add your custom webpack plugins, loaders and
// anything you like. This is just the basic way to add additional webpack
// configurations. For more information refer the docs:
// https://storybook.js.org/configurations/custom-webpack-config IMPORTANT When
// you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const log = console.log;
const root = path.resolve(__dirname, '../');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.
  defaultConfig
    .module
    .rules
    .push({
      test: /\.scss$/,
      include: root,
      use: [
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            data: '@import "_helpers.scss";',
            includePaths: [path.join(root, 'src/components/quarks')],
            sourceMap: true
          }
        }
      ]
    });

  /*{
          test: /\.(png|woff(2)?|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
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

  /*
        defaultConfig.module.rules.push({
          test: /\.svg$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000,
                mimetype: 'image/svg+xml'
              }
            }
          ]
        });
*/
  defaultConfig
    .module
    .rules
    .push({
      test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
      exclude: [/node_modules/],
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            mimetype: 'image/svg+xml'
          }
        }
      ]
    });

    // defaultConfig
    // .module
    // .rules
    // .push({
    //   test: /^icons.min.svg$/,
    //   exclude: /node_modules/,
    //   use: [
    //     {
    //       loader: 'raw-loader',
    //       //options: {}
    //     }
    //   ]
    // });


  defaultConfig
    .resolve
    .extensions
    .push('.scss');
  defaultConfig.resolve.alias.root = root;
  defaultConfig.resolve.alias.src = path.resolve(root, 'src');
  defaultConfig.resolve.alias.components = path.resolve(root, 'src/components');

  // fix: enable static assets defaultConfig.output.publicPath =
  // 'http://localhost:6006/';

  return defaultConfig;
};
