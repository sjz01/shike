<template>
    <div id="mine">
        <router-link to="/login">
             <p>点击登录</p>
        </router-link>
       
        <router-link to="/register">
                <p>点击注册</p>
        </router-link>
     
    </div>
</template>

<script>
export default {
    name:"Mine"
}
</script>

<style lang='less' scoped>
#mine{

       
       margin-top:100px;
   }
</style>