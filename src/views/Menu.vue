<template>
    <div id="menu">
        <p>menu</p>

        <router-link to="/vdetail">
             <p>点击这里跳转vdetail</p>
        </router-link>
    </div>


</template>

<script>
export default {
    name:"Menu"
}
</script>

<style lang='less' scoped>
   #menu{

       
       margin-top:100px;
   }
</style>