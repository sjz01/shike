/*
*Vue-CLI项目的核心配置文件
*/
const webpack = require("webpack");

module.exports = {
 configureWebpack: {
   plugins: [
     new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery",
       "window.jQuery": "jquery",
       Popper: ["popper.js", "default"]
     })
   ]
 }
};

// module.exports = {
//   devServer: {
//       proxy: {
//           '/api': {
//               target: 'http://123.56.195.82:9999',
//               changeOrigin: true
//           }
//       }
//   }
// }
module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://123.56.195.82:9999',
                changeOrigin:true,
                pathRewrite: {
                    '^/api' : ""
                }
            }
        }
    }
}
