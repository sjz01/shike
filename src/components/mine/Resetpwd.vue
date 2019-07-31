<template>
   <div id="resetpwd">
       <nav class="navbar">
           <span @click="back">&#xe512;</span>
           <span>重置密码</span>
       </nav>
       <div class="user">
            <input id="userName" v-model="userName" type="text" placeholder="请输入用户名" @change="chan" required>
       </div>
       <div class="user">
           <input id="question" v-model="question" type="text" placeholder="显示问题" disabled>
       </div>
       <div class="user">
           <input type="text" v-model="answer" @change="chane"  placeholder="请输入答案" required>
       </div>
       <router-link to="/Rewrite">
             <div class="commit" @click="commit">提交</div>
       </router-link>
   </div>
</template>

<script>
    import http from '@/axios/Api.js'
    export default {
        name: "resetpwd",
        data(){
            return{
                userName:'',
                answer:'',
                password:'',
                question:''
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            chan(e){
                http.resetpwd(this,this.userName)
                    .then((res)=>{
                        // console.log(res);
                        if(res.data.result){
                            console.log(this.userName);


                            http.question(this,this.userName)
                                .then((res)=>{
                                console.log(res);
                                    this.question = res.data.user[2].question;
                                    if(this.password==res.data.user[3].answer){
                                        
                                    }
                            })
                        }
                    })
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