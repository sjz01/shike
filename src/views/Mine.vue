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
    @import url(../maincolor/maincolor.less);
#mine{
       margin-top:140px;
       p{
           width: 80%;
           height: 40px;
           font-size: 20px;
           background-color: @mainColor;
           margin: 0 auto;
           margin-bottom: 40px;
           text-align: center;
           line-height: 40px;
           color: #ffffff;
       }
   }
</style>