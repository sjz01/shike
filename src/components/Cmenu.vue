<template>
    <div id="cmenu">
         <nav id="navbar">
             <span @click='back'> &#xe512; </span>
             <span> 食客 </span>
         </nav>
         <router-link tag=ul to="/vdetail">
             <li>
                 <div id="imgk">
                     <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151775155_smallImg.jpg" alt="">
                 </div>
                   <div id="des">
                 "生活里真的是创意无限,虽然都是一样的柴米油盐,有些家吃的欢,有些家吃的愁。"
                  </div>
             </li>
         
         </router-link>
    </div>
</template>

<script>

//按需引入
import http from '@/axios/Api.js'

export default {
   
  name:"Cmenu",
  data(){
      return{
        //  showapi_appid: showapi_appid,
        //  showapi_sign:showapi_sign
      }
  },
  methods: {
      back(){
          this.$router.go(-1)
      },
      getdata(){
           http.getDetail(this,this.$store.liux.right[0])
           .then((res) => {
               console.log(res);
            })
     
     },
  
    },
    created() {
        this.getdata()
    },
}
</script>

<style lang='less' scoped>
@import url(../maincolor/maincolor.less);
#cmenu{
   width: 100%;


    #navbar{
         font-family: 'myFont';
        width:80%;
         height:50px;
        background: @mainColor;
         position: fixed;
         top: 0;
         color:white;
         text-align: center;
         line-height: 50px;
        font-size: 24px;
        margin-left: 20px;
        z-index: 12;

         span:nth-of-type(1){
           float: left;
         }
    }

    ul{
        width:90%;
        margin:0 auto;
        margin-top: 54px;

        li{
            display: flex;

            div{
                margin:5px;
            }
        }
    }

    margin-bottom:62px; 
   }
</style>
