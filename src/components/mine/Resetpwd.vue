<template>
   <div id="resetpwd">
       <nav class="navbar">
           <span @click="back">&#xe512;</span>
           <span>重置密码</span>
       </nav>
       <div class="user">
            <input type="text" placeholder="请输入用户名">
       </div>
       <div class="user">
           <input type="text" placeholder="显示问题" disabled>
       </div>
       <div class="user">
           <input type="text" placeholder="请输入答案">
       </div>
       <router-link to="/login">
             <div class="commit">提交</div>
       </router-link>
   </div>
</template>

<script>
    export default {
        name: "resetpwd",
        methods:{
            back(){
                this.$router.go(-1);
            }
    }

    }
</script>

<style lang="less" scoped>
    @import url(../../maincolor/maincolor.less);
#resetpwd{
    margin-top: 100px;
    .navbar{
        font-family: 'myFont';
        font-size: 24px;
        width: 100%;
        height: 50px;
        // line-height: 50px;
        text-align: center;
        background-color:@mainColor;
        position:fixed;
        top:0;
        color:white;
        z-index: 11;
    }
    .user{
        width: 80%;
        margin: 0 auto;
        input{
            width: 100%;
            height: 40px;
            margin-bottom: 20px;
            outline: 1px solid @mainColor;
        }
    }
    .commit{
        width: 80%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: @mainColor;
        color: #ffffff;
        margin: 0 auto;
        margin-top: 40px;
        font-size: 20px;
    }
}
</style>