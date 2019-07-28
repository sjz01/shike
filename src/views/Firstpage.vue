<template>
    <div id="first-page">
        <router-link to="/cmenu">
           <carousel/>
        </router-link>
        <p class="hots_zt">热门专题</p>
        <router-link to="/menu" class="zt_card">
           <p class="hots_gx">功效</p>
           <div class="hots">
               <div class="hots_card">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">减肥</p>
                </div>
                <div class="hots_card">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">美容</p>
                </div>
                <div class="hots_card">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">润肺抗燥</p>
                </div>
                <div class="hots_card">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">清热祛火</p>
                </div>
            </div>
            <p class="hots_gx">特色食品</p>
           <div class="hots">
               <div class="hots_card">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">小吃</p>
                </div>
                <div class="hots_card">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">凉菜</p>
                </div>
                <div class="hots_card">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">零食</p>
                </div>
                <div class="hots_card">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">三明治</p>
                </div>
            </div>
            <p class="hots_gx ">特殊场合</p>
           <div class="hots hots_ch">
               <div class="hots_card col-2">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">早餐</p>
                </div>
                <div class="hots_card col-2">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">下午茶</p>
                </div>
                <div class="hots_card col-2">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">便当</p>
                </div>
                <div class="hots_card col-2">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">圣诞节</p>
                </div>
                <div class="hots_card col-2">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">年夜饭</p>
                </div>
                <div class="hots_card col-2">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">深夜食堂</p>
                </div>
                <div class="hots_card col-2">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">情人节</p>
                </div>
                <div class="hots_card col-2">
                   <img class="hots_card_img" src="http://www.talkimages.cn/images/medium/20133071/tkf003_525873.jpg" alt="">
                   <p class="hots_card_text">宵夜</p>
                </div>
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
          display: flex;
          justify-content: space-between;
      }
      .hots_ch {
          flex-wrap: wrap;
          margin-bottom: 50px;
      }
      .hots_card {
          width: 100px;
          height: 100px;
          margin: 10px 10px;
          padding: 0;

          .hots_card_img {
              width: 100%;
          }
          .hots_card_text {
              color: black;
              text-align: center;
          }
      }
      
      
  }

}
</style>
