<template>
    <div id="first-page">
        <router-link to="/menu">
           <carousel/>
        </router-link>
        <p class="hots_zt">热门专题</p>
        <router-link to="/cmenu" class="zt_card">
           <p class="hots_gx">功效</p>
           <div class="hots">
               <router-link to="/hots1">
               <div class="hots_card">
                   <img class="hots_card_img" src="http://cp1.douguo.net/upload/caiku/7/3/d/yuan_73a82e6aa2c5dcdcda814c9eeba3491d.jpg" alt="">
                   <p class="hots_card_text">减肥、美容、润肺抗燥、清热祛火</p>
                </div>
                </router-link>
               
            </div>
            <p class="hots_gx">特色食品</p>
           <div class="hots">
                   <router-link to="/hots2">
               <div class="hots_card">
                   <img class="hots_card_img" src="http://www.csxdf.com/uploads/allimg/160604/1_160604175315_1.jpg" alt="">
                   <p class="hots_card_text">小吃、凉菜、零食、三明治</p>
                </div>
                   </router-link>
               
            </div>
            <p class="hots_gx ">特殊场合</p>
           <div class="hots hots_ch">
               <router-link to="/hots3">
               <div class="hots_card ">
                   <img class="hots_card_img" src="https://b3-q.mafengwo.net/s9/M00/63/B2/wKgBs1hXlGSAG470AAYSCPhEUdg97.jpeg?imageMogr2%2Fthumbnail%2F%21300x190r%2Fgravity%2FCenter%2Fcrop%2F%21300x190%2Fquality%2F90" alt="">
                   <p class="hots_card_text">便当、宵夜、年夜饭</p>
                   <p class="vtl_p">亲，到底啦~</p>
                </div>
                </router-link>
               
            </div>
        </router-link>
    </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import Hots1 from "@/components/Hots1";
import Host2 from "@/components/Hots2";
import Host3 from "@/components/Hots3";

export default {
  name: "Firstpage",
  components: {
    Carousel,
    Hots1,
    Host2,
    Host3
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
  }

  .zt_card {
    width: 100px;

    .hots_gx {
      text-align: center;
      color: black;
      font-size: 18px;
      font-weight: 600;
    }
    .hots {
      //   display: flex;
      //   justify-content: space-between;
    }
    .hots_ch {
      //   flex-wrap: wrap;
      //   margin-bottom: 50px;
    }
    .hots_card {
      //   width: 100px;
      //   height: 100px;
      margin: 10px 10px;
      padding: 0;

      .hots_card_img {
        width: 100%;
      }
      .hots_card_text {
        color: black;
        text-align: center;
        font-size: 16px;
        margin-top: 2px;
      }
      .vtl_p {
        height: 30;
        line-height: 30px;
        text-align: center;
        color: black;
        margin-top: 10px;
        margin-bottom: 70px;
        border-top: 1px solid rgb(59, 58, 58);
      }
    }
  }
}
</style>
