const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'boss' // page title

module.exports={
  publicPath: '/',
  outputDir: 'dist',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer:{
    proxy: {
      '/api': {
        target: "http://api.abo.com:8090/public/api", // API服务所在IP及端口号
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
        ws:true,
        pathRewrite: {
          '^/api': '' // 重写路径
        }
      }
    },
  }
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set("@", resolve("src"))
  //     .set("assets", resolve("src/assets"))
  //     .set("components", resolve("src/components"))
  //     .set("base", resolve("baseConfig"))
  //     .set("public", resolve("public"));
  // },
}