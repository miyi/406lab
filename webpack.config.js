const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
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

  entry: entry,
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
        }
      }
	  ],
	},
	//unnecessary and expensive plguin
	// plugins: [
 //    new BundleAnalyzerPlugin({
 //        analyzerMode: 'static'
 //    }),
 //  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],
	devServer: {
		hot: true, 
  	contentBase: dest,
  	compress: true,
  	port: 9000,
  	publicPath: '/',
	},
};

module.exports = config;