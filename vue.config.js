module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://asia.52asia.asia:4040',
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        }
      }
     }
  }
}