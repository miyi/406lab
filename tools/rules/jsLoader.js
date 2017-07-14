import IS_DEV from 'isdev';
const reStyle = /\.(css|less|scss|sss)$/;

export default {
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
	  { loader: "postcss-loader"},
	]
};

