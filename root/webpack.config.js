const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "ringit";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  defaultConfig.plugins.splice(1, 1); // remove SystemJSPublicPathWebpackPlugin, use static public path
  console.log(defaultConfig.plugins)

  let config = merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
    // setting public path, inspired by ejected create-react-app
    output: {
      publicPath: '/private/' // only affects generated files
    },
    devServer: {
      static: {
        directory: path.resolve(process.cwd(), "public"),
        publicPath: '/private/',
      },
      historyApiFallback: {
        disableDotRule: true,
        index: '/private/',
      },
    },
  });
  console.log(config)
  return config;
};
