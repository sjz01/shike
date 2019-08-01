<template>
    <div id="cmenu">
         <nav id="navbar">
             <span @click='back'> &#xe512; </span>
             <span> 食客 </span>
         </nav>
         <router-link tag=ul to="/vdetail">
             <li v-for="(item,key) in $store.state.liux.des" :key='key' @click="chuan(item)">
                 <div id="imgk">
                     <img class="rounded shadow-lg p-1 bg-white" :src="item.smallImg" alt="">
                 </div>
                   <div id="des">
                    <p>{{item.cpName}}</p>
                    <!-- <p>{{item.des}}</p> -->
                  </div>
             </li>
         
         </router-link>
    </div>
</template>

<script>
//按需引入
import http from "@/axios/Api.js";

export default {
  name: "Cmenu",
  data() {
    return {
      cpname: "",
      des: "",
      img: ""
    };
  },
  methods: {
    
    getdata() {
      var a = this.$store.state.righttype[0];
      // var a = this.$store.state.liux.right[0];
      // console.log(this.$store.state.liux.right[0]);
      console.log(this.$store.state.righttype[0]);
      http.getDetail(this, a).then(res => {
        // console.log(res.data.showapi_res_body.datas);
        //    this.$store.state.liux.type.push(res.data.showapi_res_body.datas[0].id)

        this.$store.state.liux.des = res.data.showapi_res_body.datas;
       
      });
    },

   chuan(item){
       // console.log(item)
       this.$store.state.type = item.type_v2
       this.$store.state.id = item.id
       // console.log( this.$store.state.type)
       //  console.log(  this.$store.state.id )
   },
   back() {
      this.$router.go(-1);
    },

  },
  created() {
    this.getdata();
  }
};
</script>

<style lang='less' scoped>
@import url(../maincolor/maincolor.less);
#cmenu {
  width: 100%;

  #navbar {
    font-family: "myFont";
    width: 80%;
    height: 50px;
    background: @mainColor;
    position: fixed;
    top: 0;
    color: white;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    margin-left: 20px;
    z-index: 12;

    span:nth-of-type(1) {
      float: left;
    }
  }

  ul {
    width: 90%;
    margin: 0 auto;
    margin-top: 62px;

    li {
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

  margin-bottom: 70px;
}
</style>
