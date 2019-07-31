<template>
    <div id="vdetail">
        <nav class="navbar">
        <span @click="back">&#xe512;</span>
        <span>菜谱详情</span>
    </nav>
        <div id="detail">
            <img class="firstpic" :src="this.smallImg" alt="">
            <div class="item">
                <p class="cpName">{{this.cpName}}</p>
                <div class="enshrine" @click="collet">收藏菜谱</div>
                <P class="des">{{this.des}}</P>
                <P class="food">材料</P>
                <div>
                    <ul class="foods" v-for="(yl,key) in yl" :key="key">
                        <li class="yl">
                            <span class="ylName">{{yl.ylName}}</span>
                            <span class="ylUnit">{{yl.ylUnit}}</span>
                        </li>
                    </ul>
                </div>
                <p class="food">做法</p>
                <div class="way" v-for="(step,key1) in steps" :key="key1">
                    <p>{{step.orderNum+'.'+step.content}}</p>
                    <img :src="step.imgUrl" alt="">
                </div>
                <p class="food">小贴士</p>
                <p class="des">{{this.tip}}</p>
            </div>
            <div class="collect" @click="collet">收藏菜谱</div>
        </div>
    </div>
</template>

<script>
    import http from '@/axios/Api.js'

export default {
    name:"Vdetail",
    data(){
        return{
            steps:[],
            yl:[],
            des:'',
            tip:'',
            cpName:"",
            smallImg:'',
            id:'',
            type:''
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        collet(){
        this.$store.state.lisha.arr.push({type:this.type,id:this.id})
            console.log(this.$store.state.lisha.arr)

        },
        getData(){
            // console.log(this.$store.state.type);
            // console.log(this.$store.state.id);
            // var a = this.$store.state.liux.right;
            // console.log(a)
            // var b = this.$store.state.liux.id;
            // console.log(b)
            http.getVdetail(this,this.$store.state.type,this.$store.state.id)
                .then((res)=>{
                // console.log(res);
                    this.steps=res.data.showapi_res_body.datas[0].steps;
                    this.yl = res.data.showapi_res_body.datas[0].yl;
                    this.des = res.data.showapi_res_body.datas[0].des;
                    this.tip = res.data.showapi_res_body.datas[0].tip;
                    this.cpName = res.data.showapi_res_body.datas[0].cpName;
                    this.smallImg= res.data.showapi_res_body.datas[0].smallImg;
                    this.id= res.data.showapi_res_body.datas[0].id;
                    this.type= res.data.showapi_res_body.datas[0].type_v2;

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
#vdetail{
    margin-top:50px;
  
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
   }
#detail{
                width:100%;
                height:200px;

            .firstpic{
                        width:100%;
                        height:200px;
                }
                .item{
                    padding: 0 20px;
                    .enshrine{
                        width: 60%;
                        margin: 0 auto;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        background-color: tomato;
                        border-radius: 5px;
                        font-size: 20px;
                        color: #ffffff;
                        margin-bottom: 20px;
                    }
                    .cpName{
                        font-size: 20px;
                        padding-top:20px;
                        padding-bottom:20px;
                        letter-spacing:15px;
                        font-weight:800;
                    }
                    .des{
                        text-indent:20px;
                        font-size: 18px;
                        color: #aaaaaa;
                    }
                    .food{
                        font-size: 20px;
                        font-weight: 800;
                        letter-spacing: 15px;
                        margin-top: 20px;
                        margin-bottom: 20px;
                    }
                    .foods{
                        width: 100%;
                        .yl{
                            border-top: 1px solid #bbbbbb;
                            border-bottom: 1px solid #bbbbbb;
                            font-size: 18px;
                            padding: 10px 25px;
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                    .way {
                          p{
                              font-size:18px;
                          }
                          img{
                              width: 100%;
                              margin-bottom: 20px;
                          }
                    }

                }
                .collect{
                  
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    margin: 0 auto;
                    border-radius: 5px;
                    background-color: tomato;
                    margin-bottom: 65px;
                    margin-top: 20px;
                    font-size: 20px;
                    color: #ffffff;
                }

   }
</style>