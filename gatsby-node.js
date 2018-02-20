const path = require('path');

const pathResolve = dir => path.join(__dirname, dir);

exports.modifyWebpackConfig = ({ config }) => {
  // console.log(JSON.stringify(config.resolve(), null, 4));

  config.loader('eslint', {
    test: /\.js$/,
    exclude: /node_modules/,
  });

  config.merge({
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss'],
      alias: {
        '@': pathResolve('src')
      }
    }
  });

  return config;
};
