const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/app', createProxyMiddleware({
    target: 'http://10.221.128.209:8080',
    changeOrigin: true,
    pathRewrite:{
      '/app': ''
    }
  }))
}