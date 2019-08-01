
<template>
    <div id="first-page">
        <router-link to="/menu">
           <carousel/>
        </router-link>
        <p class="hots_zt"></p>
        <div class="zt_card">
           <p class="hots_gx"></p>
            
           <div class="hots">
            
               <router-link to="/hots1">
               <div class="hots_card">
                   <img  class="hots_card_img shadow bg-white rounded" src="http://img3.imgtn.bdimg.com/it/u=2365659156,1217198181&fm=26&gp=0.jpg" alt="">
                   <p class="hots_card_text">减肥</p>
                </div>
                </router-link>
                <router-link to="/hots2">
                <div class="hots_card">
                   <img class="hots_card_img shadow bg-white rounded" src="http://img5.imgtn.bdimg.com/it/u=396815354,2668923717&fm=11&gp=0.jpg" alt="">
                   <p class="hots_card_text">美容</p>
                </div>
                </router-link>
                <router-link to="/hots3">
                <div class="hots_card">
                   <img class="hots_card_img shadow bg-white rounded" src="http://img5.imgtn.bdimg.com/it/u=2287053303,1433954522&fm=11&gp=0.jpg" alt="">
                   <p class="hots_card_text">清热祛火</p>
                </div>
                </router-link>
            </div>
            <div id="remen">—— — - 本周热门 - — ——</div>
            <p class="hots_gx">特色食品</p>
           <div class="hots">
            <router-link to="/hots4">
               <div class="hots_card">
                   <img class="hots_card_img shadow bg-white rounded" src="http://img4.imgtn.bdimg.com/it/u=2625310784,1611056942&fm=15&gp=0.jpg" alt="">
                   <p class="hots_card_text ">小吃</p>
                </div>
            </router-link>
            <router-link to="/hots5">
                <div class="hots_card">
                   <img class="hots_card_img shadow bg-white rounded" src="http://img5.imgtn.bdimg.com/it/u=1264998808,2146663255&fm=15&gp=0.jpg" alt="">
                   <p class="hots_card_text">甜品</p>
                </div>
              </router-link>
              <router-link to="/hots6">
                <div class="hots_card">
                   <img class="hots_card_img shadow bg-white rounded" src="http://img1.imgtn.bdimg.com/it/u=1373821997,480324908&fm=26&gp=0.jpg" alt="">
                   <p class="hots_card_text">家常菜</p>
                </div>
                </router-link>
                
            </div>
            
            <p class="hots_gx ">特殊场合</p>
           <div class="hots hots_ch">
           <router-link to="/hots7">
               <div class="hots_card ">
                   <img class="hots_card_img shadow bg-white rounded" src="http://img1.imgtn.bdimg.com/it/u=1046240986,4273255993&fm=11&gp=0.jpg" alt="">
                   <p class="hots_card_text">便当</p>
                </div>
            </router-link>
            <router-link to="/hots8">
               <div class="hots_card ">
                   <img class="hots_card_img shadow bg-white rounded" src="http://img3.imgtn.bdimg.com/it/u=1421160164,106276891&fm=15&gp=0.jpg" alt="">
                   <p class="hots_card_text">宵夜</p>
                </div>
                </router-link>
                <router-link to="/hots9">
               <div class="hots_card ">
                   <img class="hots_card_img shadow bg-white rounded" src="http://img2.imgtn.bdimg.com/it/u=3500860379,617899449&fm=15&gp=0.jpg" alt="">
                   <p class="hots_card_text">情人节</p>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import Hots1 from "@/components/Hots1";
import Host2 from "@/components/Hots2";
import Host3 from "@/components/Hots3";
import Hots4 from "@/components/Hots4";
import Host5 from "@/components/Hots5";
import Host6 from "@/components/Hots6";
import Hots7 from "@/components/Hots7";
import Host8 from "@/components/Hots8";
import Host9 from "@/components/Hots9";

export default {
  name: "Firstpage",
  components: {
    Carousel,
    Hots1,
    Host2,
    Host3,
    Hots4,
    Host5,
    Host6,
    Hots7,
    Host8,
    Host9
  }
};
</script>

<style lang='less' scoped>
#first-page {
  margin-top: 50px;
  width:100%;

  .hots_zt {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  #remen{
    width:100%;
    text-align: center;
    font-size: 20px;
    margin: 10px 0 16px;
  }
  .zt_card {
    width: 100%;
    margin: 0 auto;

    .hots_gx {
      // text-align: center;
      padding-left: 22px;
      color: black;
      font-size: 19px;
      font-weight: 600;
    }
    .hots {
      width: 90%;
      margin: 0 auto;
      display: flex;
      margin-top: 10px;
      justify-content: space-around;
      a{
        width:30%;
      }
    }
    .hots_ch {
      margin-bottom: 60px;
    }
    .hots_card {
      width: 100%;
      height: 100px;
      margin: 10px 0;
      padding: 0;
      justify-content: space-between;
      text-align: center;

      .hots_card_img {
        width: 100%;
        height: 75px;
      }
      .hots_card_text {
        color: black;
        text-align: center;
        font-size: 16px;
        margin-top: 2px;
        text-decoration: none;
      }
    }
  }
}
</style>
