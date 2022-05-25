const webpack = require('webpack');
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  process.env.NODE_ENV = (webpackConfigEnv && webpackConfigEnv.node_env) || 'production';

  const paths = require('./buildConfig/paths');
  const getClientEnvironment = require('./buildConfig/env');
  const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

  const orgName = "ringit";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  defaultConfig.plugins = defaultConfig.plugins.filter(pl => !(pl instanceof SystemJSPublicPathWebpackPlugin)); // remove SystemJSPublicPathWebpackPlugin, use static public path
  defaultConfig.externals = defaultConfig.externals.filter(ext => ext !== 'single-spa'); // remove single-spa from externals, we don't use CDNs
  console.log(defaultConfig.plugins)

  let config = merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: process.env.NODE_ENV === 'development',
          orgName,
        },
      }),
      new webpack.DefinePlugin(env.stringified),
      new CopyPlugin({
        patterns: [
          'node_modules/systemjs/dist/system.min.js',
          'node_modules/systemjs/dist/system.min.js.map',
          { from: 'node_modules/systemjs/dist/extras/amd.min.js', to: path.resolve(__dirname, "dist/system-amd.min.js") },
          'node_modules/systemjs/dist/extras/amd.min.js.map',
          'static/regenerator-runtime.min.js' // we don't get it from node_modules since it's not minimized there
      ]}),
    ],
    // setting public path, inspired by ejected create-react-app
    output: {
      publicPath: '/private/' // only affects generated files
    },
    devServer: {
      static: {
        directory: path.resolve(process.cwd(), "dist"),
        publicPath: '/private/',
      },
      historyApiFallback: {
        disableDotRule: true,
        index: '/private/',
      },
      devMiddleware: { writeToDisk: true } // make copies by CopyPlugin accessible during development 
    },
  });
  console.log(config)
  return config;
};
