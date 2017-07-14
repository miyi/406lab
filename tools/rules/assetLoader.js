const reImage = /\.(bmp|gif|jpe?g|png|svg)$/;

export default {
  test: reImage,
  use: {
  	loader: 'url-loader',
    loader: 'svg-url-loader',
		loader: 'file-loader',
    options: {},
  }
}
