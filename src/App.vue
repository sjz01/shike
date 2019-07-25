<template>
  <div id="app">
     <navbar></navbar>
    <tabbar></tabbar>
  </div>
</template>

<script>

import Tabbar from '@/components/Tabbar'
import Navbar from '@/components/Navbar'
   
export default {
  name: "App",
  components: {
    Tabbar,Navbar
  },
 
}
</script>
<style lang="less">


</style>
