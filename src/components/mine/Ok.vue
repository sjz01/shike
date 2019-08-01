<template>
    <div id="ok">

        <div class="name">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564372650338&di=f104c5cf61488894af37ef07d12adb43&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D5c86b7c327738bd4c421b03191b0f6eb%2Fe61190ef76c6a7ef48296038f4faaf51f3de66a5.jpg" alt="">
            <p>{{name}}</p>
        </div>
        <router-link to="/enshrine">
           <div class="enshrine" @click="getshou">
               <span>我的收藏</span>
               <span>&#xe644;</span>
           </div>
        </router-link>
        <div class="tui" @click="clear">退出登录</div>

<!--        <router-link tag=ul to="/vdetail">-->

<!--        </router-link>-->
    </div>
</template>

<script>
    import http from '@/axios/Api.js'
export default {
    name:"Ok",
    data(){
        return{
            name:''
        }
    },
    methods:{
      clear(){
          localStorage.clear();
          location.href='/login';
      },
        getshou(){
            http.getshou(this)
                .then((res)=>{
                    // console.log(res);
                    this.$store.state.lisha.favorite = res.data.user[4];
                    console.log(this.$store.state.lisha.favorite);
                })

        }
    },
    created() {

        this.name=localStorage.userName;
    }

}
</script>

<style lang='less' scoped>
    @import url(../../maincolor/maincolor.less);
#ok {
    margin-top: 50px;
    background-color: #F8F8F8;
    padding: 20px 10px 0 ;
    .tui{
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        background-color: @mainColor;
        text-align: center;
        color: #ffffff;
        margin-top: 20px;

    }
    .name {
        margin-top: 20px;
        width: 100%;
        height: 100px;
        background-color: white;
        font-size: 26px;
        line-height: 100px;
        margin-bottom: 20px;
        img,p{
            display: inline-block;

        }
        img{
            width: 70px;

        }
    }

    .enshrine {
        font-family: 'myFont';
        font-size: 20px;
        height: 50px;
        line-height: 50px;
        background-color: white;
        color: @mainColor;
        span:nth-of-type(2) {
            float: right;
        }

    }

    ul {
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;

        li {
            display: flex;
            background-color: white;
            margin-bottom: 15px;
            div {
                margin: 5px;
            }
        }
    }
}
</style>