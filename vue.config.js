module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://asia.52asia.asia:4040',
        // target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        pathRewrite: {
          "^/api/":''
        }
      }
     }
  }
}