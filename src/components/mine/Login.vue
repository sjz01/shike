<template>
    <div id="login">
        <p class="title">食客请登录</p>
        <div class="info">
            <div class="inputinfo">
                <label for="username">用户名：
                    <input type="text" placeholder="请输入用户名" id="username">
                </label>
            </div>
            <div class="inputinfo">
                <label for="paw">密码：
                    <input type="text" placeholde="请输入密码" id="paw">
                </label>

            </div>
        </div>

        <router-link to="/ok">
            <p>登录</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Login"
}
</script>

<style lang='less' scoped>
#login{
       margin-top:70px;
        .title{
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            margin-bottom: 20px;
        }
       .info{
         width: 80%;
           border: 1px solid darkblue;
           height: 200px;
           margin: 0 auto;


       }
   }
</style>