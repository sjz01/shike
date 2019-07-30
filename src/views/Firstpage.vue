<template>
    <div id="first-page">
        <router-link to="/cmenu">
           <carousel/>
        </router-link>
        <p class="hots_zt">美食大赏</p>
        <router-link to="/vdetail">
            <div class="vtl_d" v-for="(item,key) in $store.state.mingyu.food" :key = "key" @click="chuan(item)">
                <img class="pic" :src="item.smallImg" alt="图片加载异常">
                <p class="pic_font">{{item.cpName}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
import Carousel from "@/components/Carousel";
export default {
  name: "Firstpage",
  components: {
    Carousel
  },
  data() {
    return {
      cpName: "",
      smallImg: "",
      food: []
    };
  },
  methods: {
    getdata() {
        
      http.getDetail(this,'肉类').then(res => {
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
#first-page {
  margin-top: 50px;

  .hots_zt {
      font-size: 20px;
      font-weight: 600;
      margin-top: 20px;
      margin-bottom: 10px;
      text-align: center;
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
      font-size: 18px;
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
