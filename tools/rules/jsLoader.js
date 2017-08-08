export default {
  include: /node_modules/,
  test: /\.jsx?$/,
  use: {
	loader: 'babel-loader',
	options: {
		presets: ['env'],
	},
  },
}
