<template>
    <div id="classify" >
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"  v-for="(item,key) in $store.state.liux.leftList" :key="key">{{item}}</a>
       
    </div>
   
        <router-link to="/cmenu" id="a">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
               <div id="smallk"  v-for="(item,key) in $store.state.liux.leftList" :key="key">{{item}}</div> 
            </div>
       
        </div>
        </router-link>
    </div>
</template>

<script>
//按需引入
import http from "@/axios/Api.js";
export default {
  name: "Classify",
  data() {
    return {
      arr: [],
      meate: []
    };
  },
  methods: {
    getdata() {
      http.getcmenu(this, {}).then(res => {
        this.meat = res.data.showapi_res_body;
        // console.log(res.data.showapi_res_body);
      });
    }
  },
  computed: {
    // cid: function() {
    //     return this.$store.state.cityId
    // },

    // getNewArr: function() {

    //   for(var key in this.meat){
    //     // console.log(key)
    //     this.$store.state.liux.leftList.push(key);
    //   }
    //     this.$store.state.liux.leftList.splice(0,2);
    //     console.log(this.$store.state.liux.leftList);

    //     return this.meat
    //     // console.log(this.meat)

    // },
    getLeft: function() {
      //  console.log(this.meate)
      return this.meate;
    }
  },
  created() {
    // this.getdata();
    // for(var key in this.meat){
    //     // console.log(key)
    //     this.$store.state.liux.leftList.push(key);
    //   }
    //     this.$store.state.liux.leftList.splice(0,2);
    //     console.log(this.$store.state.liux.leftList);

    http.getcmenu(this, {}).then(res => {
      this.arr = res.data.showapi_res_body;

      for (var key in this.arr) {
        console.log(key);
        this.$store.state.liux.leftList.push(key);
        
      }
      this.$store.state.liux.leftList.splice(0, 2);
      console.log(this.$store.state.liux.leftList);
      // console.log(this.$store.state.liux.leftList);
    });

    // console.log(this.$store.state.liux.leftList)
  }
};
</script>

<style lang='less' scoped>
#classify {
  margin-top: 50px;
  display: flex;
  background: rgb(241, 248, 203);

  #v-pills-tab {
    width: 25%;
    background: rgb(241, 248, 203);
    font-size: 14px;
    text-align: center;

    .nav-link {
      color: black;
    }
    .active {
      background: white;
      color: rgb(243, 38, 38);
    }
  }
  #a {
    width: 74%;
    background: white;
    font-family: "myFont";

    #v-pills-home {
      width: 90%;
      display: flex;
      flex-wrap: wrap;

      #smallk {
        width: 63px;
        height: 30px;
        font-size: 14px;
        border: 1px solid grey;
        border-radius: 40%;
        text-align: center;
        line-height: 30px;
        margin: 10px 8px;
        color: black;
      }
    }
  }
  margin-bottom: 62px;
}
</style>