import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'

//引入jq
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

//引入reset.css
import '../public/reset.css'
import '../public/myFont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')
