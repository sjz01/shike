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
//               target: 'http://route.showapi.com',
//               changeOrigin: true
//           }
//       }
//   }
// }