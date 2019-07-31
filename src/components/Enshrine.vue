<template>
    <div id="cmenu">
        <nav class="navbar">
            <span @click="back"> &#xe512; </span>
            <span> 我的收藏 </span>
        </nav>
        <router-link tag=ul to="/vdetail">
            <li v-for="(item,key) in yiqi" :key="key">
                <div id="imgk">
                    <img :src="item.smallImg" alt="">
                </div>
                <div id="des">
                    <p class="title">{{item.cpName}}</p>
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
                smallImg:'',
                yidui:[],
                yiqi:{}
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            getData(){
                console.log(this.$store.state.lisha.collet);
                // console.log(this.$store.state.lisha.collet[0]);
                // console.log(this.$store.state.lisha.collet[0].id);
                this.$store.state.lisha.collet.forEach((item)=>{
                    console.log(item.cpName);
                    // http.getVde(this,)
                    //     .then((res)=>{
                    //         // console.log(res);
                    //         // this.des = res.data.showapi_res_body.datas[0].des;
                    //         var yiqi = new Object();
                    //         this.yiqi.cpName = res.data.showapi_res_body.datas[0].cpName;
                    //         this.yiqi.smallImg = res.data.showapi_res_body.datas[0].smallImg;
                    //         this.yidui.push(this.yiqi);
                    //     })

                })
                // var a = this.$store.state.lisha.collet.type;
                // var b = this.$store.state.lisha.collet.id;


            }
        },
        created() {
            this.getData();
            // http.getV(this).then((res)=>{
            //     console.log(res);
            //     http.getVdetail(this,).then((res)=>{})
            //     console.log(res)
            // })
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
