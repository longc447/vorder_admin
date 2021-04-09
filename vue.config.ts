console.log("webpack config run!")
module.exports = {
    devServer: {
        port:8080,
        host:"localhost",
        hot: true, // 它是热更新：只更新改变的组件或者模块，不会整体刷新页面
        open: true, // 是否自动打开浏览器
        proxy: { // 配置代理（只在本地开发有效，上线无效）
            "/api": { // 代理接口前缀为/apis的请求
                "target": 'https://localhost:5000/', // 对应的代理地址
                "secure": false, // 接受运行在https上，默认不接受
                "changeOrigin": true, // 如果设置为true,那么本地会虚拟一个服务器接收你的请求并代你发送该请求，这样就不会有跨域问题（只适合开发环境）
                "pathRewrite": { //重写路径 比如'/apis/aaa/ccc'重写为'/aaa/ccc'
                 '^/api': ''
                 }
                },
        }
    }
}