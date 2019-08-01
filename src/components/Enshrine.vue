<template>
    <div id="cmenu">
        <nav class="navbar">
            <span @click="back"> &#xe512; </span>
            <span> 我的收藏 </span>
        </nav>
        <router-link tag=ul to="/vdetail">
            <li >
                <div id="imgk">
                    <img src="" alt="">
                </div>
                <div id="des">
                    <p class="title"></p>
                </div>
            </li>
        </router-link>
    </div>
</template>

<script>
    import http from '@/axios/Api.js'
    export default {
        name:"Enshrine",
        data(){
            return{
               favorite: [],
            }
        },
        methods:{
                back(){
                    this.$router.go(-1);
                }

        },
        created() {
            var that  = this;
           http.getshou(this)
               .then((res)=>{
                   // console.log(res);
                   this.favorite = res.data.user[4];
                   console.log(this.favorite);
               })
            console.log(that.favorite);//拿不到
        },
        //毁掉函数
        // created() {
        //     console.log(this.favorite);//拿不到
        //     for(var item of this.favorite){
        //         // http.getVdetail(this,item.type,item.id)
        //         //     .then((res)=>{
        //         //         console.log(res);
        //         //     })
        //     }
        // }
        mounted() {
            console.log(this.favorite);
        }
    }
</script>

<style lang='less' scoped>
    @import url(../maincolor/maincolor.less);
    #cmenu{
        width: 100%;
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
        ul{
            width:90%;
            margin:0 auto;
            margin-top: 54px;

            li{
                display: flex;
               #imgk{
                   margin-right: 5px;
               }
                #des{
                    .title{
                        font-size: 24px;
                    }
                }
            }
        }
        margin-bottom:62px;
    }
</style>
