const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

// const publicPath= '/personnelmanagement-web-pc/'

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    port: 9001,
    host: '0.0.0.0',
    open: false, // 不自动打开浏览器
    // 代理配置
    // 使用“/api/posts/1” 代理到：http://59.215.222.175:8181/posts/1
    proxy: {
      '/api': {
        target: 'https://inside-pdtmp.gzstv.com', // 设置你调用的接口域名和端口号 别忘了加http
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  // 设置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('src', resolve('src'))
  }
}
