<template>
    <div id="register">
        <p class="title">食客请注册</p>
        <div class="info">
            <div class="inputinfo">
                <label for="username">用户名：</label>
                <input type="text" placeholder="请输入用户名" id="username">
            </div>
            <div class="inputinfo">
                <label for="username">昵称：</label>
                <input type="text" placeholder="请输入昵称" id="username">
            </div>
            <div class="inputinfo">
                <label for="paw">密码： </label>
                <input type="text" placeholder="请输入密码" id="paw">
            </div>
            <router-link to="/login">
                    <p class="register">注册</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:"Register"
}
</script>

<style lang='less' scoped>
    @import url(../../maincolor/maincolor.less);
#register{
       margin-top:70px;
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
            margin-bottom: 40px;
            label{
                display: block;
                float: left;
            }
            input{
                display: block;
                float: right;
                /*border: 1px solid #bbbbbb;*/
                outline: 1px solid @mainColor;
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