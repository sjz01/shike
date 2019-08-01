<template>
  <div id="app">
     <navbar></navbar>
     <router-view></router-view>
    <tabbar></tabbar>
    <router-view name="Cmenu"></router-view>
  </div>
</template>

<script>

import Tabbar from '@/components/Tabbar'
import Navbar from '@/components/Navbar'

//按需引入
import http from '@/axios/Api.js'
   
export default {
  name: "App",
  components: {
    Tabbar,Navbar
  },
 
}
</script>
<style lang="less">
#app{
  width: 100%;
}

</style>
