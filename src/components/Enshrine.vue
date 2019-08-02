<template>
    <div id="cmenu">
        <nav class="navbar">
            <span @click="back"> &#xe512; </span>
            <span> 我的收藏 </span>
        </nav>
        <router-link tag=ul to="/vdetail">
            <li v-for="(item,key) in $store.state.lisha.favorite" :key="key" @click="fainfo(item.id,item.type)">
                <div id="imgk">
                    <img class="rounded" :src="item.img" alt="">
                </div>
                <div id="des">
                    <p class="title">{{item.title}}</p>
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
                type:[],
                id:[],
                arr:[]
            }
        },
        methods:{
                back(){
                    this.$router.go(-1);
                },
            fainfo(id,type){
                this.$store.state.id = id;
                this.$store.state.type = type;
            }
        },
        created() {
            // console.log(this.$store.state.lisha.favorite,'我的收藏页面创建完成');
            // this.$store.state.lisha.favorite.favorite.forEach((item)=>{
            //     // console.log(item.id);
            //     http.getVdetail(this,item.type,item.id)
            //         .then((res)=>{
            //             console.log(res);
            //             console.log(res.data.showapi_res_body.datas[0]);
            //             this.arr.push(res.data.showapi_res_body.datas[0]);
            //             // console.log(this.arr);

            //         })
            //     this.$store.state.type=item.type;
            //     this.$store.state.id=item.id;

            // })

        },

    }
</script>

<style lang='less' scoped>
    @import url(../maincolor/maincolor.less);
    #cmenu{
        width: 100%;
        .navbar{
            font-family: 'myFont';
            font-size: 22px;
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
            margin-top: 62px;

            li{
                display: flex;
                margin-top:14px;
               #imgk{
                   width: 60%;

                   margin-right:22px
               }
                #des{
                    width:50%;
                    height:50px;
                    padding-top:14px;
                    font-weight: 600;
                    color: @mainColor;
                }
            }
        }
        margin-bottom:62px;
    }
</style>
