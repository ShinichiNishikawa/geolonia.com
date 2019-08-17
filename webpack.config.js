/**
 * Webpack Configuration
 * @type {file}
 */

const path = require('path')
const webpack = require('webpack')

const { NODE_ENV } = process.env
const IS_PROD = NODE_ENV === 'production'

const ENV = {
  NODE_ENV: NODE_ENV === 'production' ? '"production"' : '"development"',
  USER_KEYS_API_URL: process.env.USER_KEYS_API_URL,
  AWS_REGION: process.env.AWS_REGION,
  AWS_COGNITO_USER_POOL_ID: process.env.AWS_COGNITO_USER_POOL_ID,
  AWS_COGNITO_USER_POOL_CLIENT_ID: process.env.AWS_COGNITO_USER_POOL_CLIENT_ID
}

module.exports = {
  mode: IS_PROD ? 'production' : 'development',
  entry: {
    auth: 'src/index.js',
  },

  output: {
    path: path.join(__dirname, '/js/'),
    publicPath: '/',
    filename: '[name].js'
  },

  devtool: IS_PROD ? void 0 : 'source-map',

  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /.jsx?$/,
        use: [{ loader: 'babel-loader' }]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(ENV)
    })
  ]
}
