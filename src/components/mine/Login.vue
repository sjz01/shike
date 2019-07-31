<template>
    <div id="login">
        <nav class="navbar">
            <span @click="back">&#xe512;</span>
            <span>登录</span>
        </nav>
        <p class="title">食客请登录</p>
        <div class="info">
            <div class="inputinfo">
                <input type="text" v-model="userName" placeholder="请输入用户名" id="username">

            </div>
            <div class="inputinfo">
                <input type="password" v-model="password" placeholder="请输入密码" id="paw">
            </div>
<!--            <router-link to="/ok">-->
                <p class="login" @click="login">登录</p>
<!--            </router-link>-->
            <div class="re">
                <router-link to="/resetpwd">
                    <span class="reset">重置密码</span>
                </router-link>
                <router-link to="register">
                    <span class="forget">注册</span>
                </router-link>
                <router-link to="resetpwd">
                    <span class="forget">忘记密码</span>
                </router-link>
            </div>
        </div>


    </div>
</template>

<script>
    import http from '@/axios/Api.js'
export default {
    name:"Login",
    data(){
        return{
            userName:'',
            password:""
        }
    },
   methods:{
       back(){
           if(localStorage.userName==null){
               location.href='/mine';
           }
           this.$router.go(-1);
       },
       login(){
           console.log(this.userName);
           http.login(this,this.userName,this.password)
               .then((res)=>{
                   console.log(res);
                   console.log(this.userName)
                   if(res.data.result){
                       alert(res.data.msg);
                       localStorage.userName=this.userName;
                       location.href='/ok';
                   }else{
                       alert(res.data.msg+'，请重新登录');
                   }
           })
       },


}
}
</script>

<style lang='less' scoped>
    @import url(../../maincolor/maincolor.less);
#login{
       margin-top:70px;
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
        .title{
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 20px;
        }
       .info{
           width: 80%;
           /*border: 1px solid darkblue;*/
           height: 200px;
           margin: 0 auto;

           .inputinfo{
               width: 100%;
               height: 50px;
               font-size: 18px;
               /*border: 1px solid firebrick;*/
               overflow: hidden;
               margin-bottom: 40px;
               input{
                   /*display: block;*/
                   /*border: 1px solid #bbbbbb;*/
                   outline: 1px solid @mainColor;
                   width: 100%;
                   height: 45px;
                   text-align: center;
                   line-height: 45px;
               }

           }
            .login{
                width: 100%;
                height: 40px;
                font-size: 20px;
                text-align: center;
                line-height: 40px;
                background-color: @mainColor;
                color: #ffffff;
            }
       }
        .re{
            width: 100%;
            margin: 0 auto;
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            color:@mainColor;
        }
   }
</style>