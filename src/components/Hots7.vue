<template>
    <div id="menu">
        <span class="left" @click="back">&#xe512;</span>
        <router-link to="/vdetail">
            <div class="vtl_d" v-for="(item,key) in $store.state.mingyu.food" :key = "key" @click="chuan(item)">
                <img class="pic" :src="item.smallImg" alt="图片加载异常">
                <p class="pic_font">{{item.cpName}}</p>
            </div>
        </router-link>
            <p class="vtl_p">亲，到底啦~</p>
    </div>


</template>

<script>
import http from "@/axios/Api.js";
export default {
  name: "Menu",
  data() {
    return {
      cpName: "",
      smallImg: "",
      food: []
    };
  },
  methods: {
     back(){
      this.$router.go(-1);
    },
    getdata() {
        
      http.getDetail(this,'便当').then(res => {
        // res.data.showapi_res_body.datas.forEach((item)=>{
        // this.$store.state.mingyu.cpName.push(item.cpName);
        // this.$store.state.mingyu.smallImg.push(item.smallImg);
        // });
        this.$store.state.mingyu.food = res.data.showapi_res_body.datas;
        // console.log(this.$store.state.mingyu.food)
      });
      // console.log(this.$store.state.mingyu.smallImg)
    },
    chuan(item) {
        //  console.log(item)
        //  console.log(item.id)
        this.$store.state.id = item.id;
        this.$store.state.type = item.type_v2;
        // console.log(  this.$store.state.id)
        // console.log( this.$store.state.type)
    }
  },
  created() {
    this.getdata();
  }
};
</script>

<style lang='less' scoped>
@import url(../maincolor/maincolor.less);

#menu {
  margin-top: 50px;
  color: black;

  .left {
    font-family: "myFont";
    font-size: 24px;
    width: 14%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: @mainColor;
    position:fixed;
    top:0;
    color: white;
    z-index: 11;
  }

  .vtl_d {
    width: 94%;
    height: 280px;
    margin: 0 auto;
    margin-top: 10px;
    border-bottom: 1px solid #ccc;

    .pic {
      width: 100%;
      margin-top: 6px;
    }
    .pic_font {
      margin: 4px 0;
     font-size: 16px;
    height: 22px;
    line-height: 22px;
     font-weight: 600;
     color: black;
     text-decoration: none;
    }
  }
  .vtl_p {
    height: 30;
    line-height: 30px;
    text-align: center;
    color: black;
    margin-bottom: 70px;
  }
}
</style>