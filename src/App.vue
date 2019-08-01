<template>
  <div id="app">
     <navbar></navbar>
     <router-view></router-view>
    <tabbar></tabbar>
    <router-view name="Cmenu"></router-view>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import Navbar from "@/components/Navbar";

//按需引入
import http from "@/axios/Api.js";

export default {
  name: "App",
  components: {
    Tabbar,
    Navbar
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android)/i
      );
      return flag;
    }
  },
  mounted() {
    if (this._isMobile()) {
       return;
    }else{
      alert("请在移动端打开");
      this.$router.replace('');
    }
  }
};
</script>
<style lang="less">
#app {
  width: 100%;
}
</style>
