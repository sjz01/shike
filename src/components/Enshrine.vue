<template>
    <div id="cmenu">
        <nav class="navbar">
            <span @click="back"> &#xe512; </span>
            <span> 我的收藏 </span>
        </nav>
        <router-link tag=ul to="/vdetail">
            <li>
                <div id="imgk">
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151775155_smallImg.jpg" alt="">
                </div>
                <div id="des">
                    <p class="title">name</p>
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
                cpName:'',
                des:''
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            getData(){
                var a = this.$store.state.lisha.collet.type;
                var b = this.$store.state.lisha.collet.id;
                
                http.getVdetail(this,a,b)
                    .then((res)=>{
                        // console.log(res);
                        // this.des = res.data.showapi_res_body.datas[0].des;
                        this.cpName = res.data.showapi_res_body.datas[0].cpName;
                        this.smallImg= res.data.showapi_res_body.datas[0].smallImg;
                    })
            }
        },
        created() {
            this.getData();
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
                    .des{
                        height: 70px;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
        margin-bottom:62px;
    }
</style>
