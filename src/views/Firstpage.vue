<template>
    <div id="first-page">
        <p>first</p>
       
        <router-link to="/cmenu">
           <div>点击跳转Cmenu</div>
        </router-link>

    </div>
</template>

<script>
export default {
    name:"Firstpage"
}
</script>

<style lang='less' scoped>
  #first-page{
    margin-top:100px;
   }
   
</style>
