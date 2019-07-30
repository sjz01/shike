<template>
    <div id="register">
        <nav class="navbar">
            <span @click="back">&#xe512;</span>
            <span>注册</span>
        </nav>
        <p class="title">食客请注册</p>
        <div class="info">
            <div class="inputinfo">
                <input id="userName" type="text" placeholder="请输入用户名" v-model="userName" required>
            </div>
            <div class="inputinfo">
                <input id="password" type="password" placeholder="请输入密码" v-model="password" required>
            </div>
            <div class="inputinfo">
                <select id="question" v-model="question" required>
                    <option style="display: none;text-align: center; text-align-last: center">请选择一个问题</option>
                    <option>你最崇拜的人是谁？</option>
                    <option>你最喜欢的食物是什么？</option>
                    <option>你父亲的名字是？</option>
                    <option>你母亲的名字是？</option>
                    <option>给你留下印象最深的人是谁？</option>
                </select>
            </div>
            <div class="inputinfo">
                <input id="answer" type="text" v-model="answer" placeholder="请输入答案" required>
            </div>
<!--            <router-link to="/login">-->
                    <p class="register" v-model="answer" @click="zhuce(userName,password,question,answer,1)">注册</p>
<!--            </router-link>-->
        </div>
    </div>
</template>

<script>
    import http from '@/axios/Api.js'
    export default {
    name:"Register",
    data(){
        return{
            userName:'',
            password:"",
            question:'请选择一个问题',
            answer:"",
            favorite:""
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        zhuce(userName,password,question,answer,favorite){
            console.log(userName);
            console.log(password);
            console.log(question);
            console.log(answer);
            console.log(favorite);

            http.register(this,userName,password,question,answer,favorite)
                .then((res)=>{
                    console.log(res);
                })

        }
    }
}
</script>

<style lang='less' scoped>
    @import url(../../maincolor/maincolor.less);
#register{
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

        margin: 0 auto;

        .inputinfo{
            width: 100%;
            height: 50px;
            font-size: 18px;
            /*border: 1px solid firebrick;*/
            overflow: hidden;
            margin-bottom: 20px;
            input{
                outline: 1px solid @mainColor;
                width: 100%;
                height: 45px;
                text-align: center;
                line-height: 45px;
            }
            select{
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
    .register{
        width: 100%;
        height: 40px;
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        background-color: @mainColor;
        color: #ffffff;
    }
   }
</style>