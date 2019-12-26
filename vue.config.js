const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
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
  // 开启gzip压缩，需要服务端也开启gzip压缩，目前服务端未开启
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据进行压缩
          deleteOriginalAssets: false // 是否删除原文件
        })]
      }
    }
  },
  // 设置别名
  chainWebpack: (config) => {
    config.resolve.alias
      .set('src', resolve('src'))
  }
}
