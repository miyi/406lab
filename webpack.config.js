const webpack = require('webpack');
const IS_DEV =  require('isdev');
const Dotenv = require('dotenv-webpack');


const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const root    = resolve(__dirname);
const src     = join(root, 'src');
const entry   = join(src, 'index.js');
const modules = join(root, 'node_modules');
const dest    = join(root, 'public');

const config = {
	devtool: IS_DEV ? "inline-sourcemap" : null,

  entry: ['babel-polyfill', entry],
  output: {
    filename: 'bundle.js',
    path: dest,
    publicPath: '/',
  },
  module: {
	  rules: [
	    {
	      test: /\.jsx?$/,
	      include: src,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env'],
            plugins: [require('babel-plugin-transform-class-properties')],
	        }
	      }
			},
			{
				test: /\.(graphql|gql)$/,
				exclude: /node_modules/,
				loader: 'graphql-tag/loader'
			},
			{
        test: /\.css$/,
        use: [
          {
          	loader: "style-loader",
          	options: {
          		sourceMap: true,
          	},
          },
          { loader: "css-loader",
          	options: {
          		sourceMap: true,
          		importLoaders: 1,
          		modules: true,
          		localIdentName: '[path][name]__[local]--[hash:base64:5]',
          	},
          },
          { loader: "postcss-loader"},
        ]
      },
      {
        test: /\.svg/,
        use: {
        	loader: 'url-loader',
          loader: 'svg-url-loader',
					loader: 'file-loader',
          options: {},
        },
			},
			{
				test: /\.s[ac]ss$/,
					use: [{
						loader: 'style-loader',
						options: { sourceMap: IS_DEV }
					}, {
						loader: 'css-loader',
						options: {
							localIdentName: '[path][name]__[local]--[hash:base64:5]',
							modules: true,
							sourceMap: IS_DEV
						}
					}, {
						loader: 'postcss-loader',
						options: { sourceMap: IS_DEV }
					}, {
						loader: 'sass-loader',
						options: {
							sourceMap: IS_DEV,
						}
					}]
			}
	  ],
	},
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
    }),
    new webpack.NamedModulesPlugin(),
  ],
	devServer: {
    historyApiFallback: true,
		hot: true,
  	contentBase: dest,
  	compress: true,
  	port: 9000,
  	publicPath: '/',
	},
};

module.exports = config;
