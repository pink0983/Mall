const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭vue组件名字检查
  lintOnSave: false,
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'https://www.imooc.com',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
})