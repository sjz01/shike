<template>
   <div id="resetpwd">
       <nav class="navbar">
           <span @click="back">&#xe512;</span>
           <span>重置密码</span>
       </nav>
       <div class="user">
            <input id="userName" v-model="userName" type="text" placeholder="请输入用户名" required>
       </div>
       <div class="user">
           <input id="question" type="text" placeholder="显示问题" disabled>
       </div>
       <div class="user">
           <input type="text" v-model="answer" placeholder="请输入答案" required>
       </div>
       <div class="user">
           <input type="text" v-model="password" placeholder="请输入新的密码" required>
       </div>
       <router-link to="/login">
             <div class="commit" @click="commit">提交</div>
       </router-link>
   </div>
</template>

<script>
    export default {
        name: "resetpwd",
        data(){
            return{
                userName:'',
                answer:'',
                password:''
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            commit(){
                http.resetpwd(this,this.userName)
                    .then(()=>{

                    })
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