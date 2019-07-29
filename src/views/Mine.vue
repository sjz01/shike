<template>
    <div id="mine">
        <img class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564372650338&di=f104c5cf61488894af37ef07d12adb43&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D5c86b7c327738bd4c421b03191b0f6eb%2Fe61190ef76c6a7ef48296038f4faaf51f3de66a5.jpg" alt="">
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
       margin-top:120px;
       .img{
           display: block;
           width: 50%;
           margin: 0 auto;
       }
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
    p:nth-of-type(1){
        margin-top: 40px;
    }
   }
</style>