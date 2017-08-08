const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV;
// const dotenv = require('dotenv');
const Dotenv = require('dotenv-webpack');
const IS_DEV = require('isdev');


const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const root    = resolve(__dirname);
const src     = join(root, 'src');
const entry   = join(src, 'index.js');
const modules = join(root, 'node_modules');
const dest    = join(root, 'public');

// const isDev = NODE_ENV === 'development';
// const staticAssetName = '[path][name].[ext]?[hash:8]';

const config = {
	devtool: "cheap-eval-source-map",

  entry: ['babel-polyfill', entry],
  output: {
    filename: 'bundle.js',
    path: dest,
    publicPath: '/',
  },
  module: {
	  rules: [
	    {
	      test: /\.js$/,
	      include: src,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env'],
	        }
	      }
	    },
			{
        test: /\.css$/,
        use: [
          {
          	loader: "style-loader",
          	options: {
          		sourceMap: IS_DEV,
          	},
          },
          { loader: "css-loader",
          	options: {
          		sourceMap: IS_DEV,
          		importLoaders: 1,
          		modules: true,
          		localIdentName: '[path][name]__[local]--[hash:base64:5]',
          	},
					},
					{ loader: 'resolve-url-loader' },
          { loader: 'postcss-loader'},
        ]
      },
			{
				test: /\.s[ac]ss$/,
					use: [{
						loader: 'style-loader',
						// options: { sourceMap: IS_DEV }
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
					},
					{
						loader: 'resolve-url-loader',
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: IS_DEV,}
					}]
			},
      {
        test: /\.(svg|png|jpg)$/,
        use: {
        	loader: 'url-loader',
					loader: 'file-loader',
        },
			},
	  ],
	},
	//unnecessary and expensive plguin
	// plugins: [
 //    new BundleAnalyzerPlugin({
 //        analyzerMode: 'static'
 //    }),
 //  ],
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
