const path = require('path');

module.exports = {
  mode:    'production',
  entry:   {
    'ts-http-statuses':     path.resolve(__dirname, 'src/index.ts'),
    'ts-http-statuses.min': path.resolve(__dirname, 'src/index.ts'),
  },
  output:  {
    path:           path.resolve(__dirname, '_bundles'),
    filename:       '[name].js',
    library:        'TSHTTPStatuses',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module:  {
    rules: [
      {
        test:    /\.tsx?$/,
        loader:  'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};