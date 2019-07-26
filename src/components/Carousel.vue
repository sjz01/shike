<template>
    <div id="carousel">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper">
            <!-- slides -->
            <swiper-slide class="swiper-slide">
                <img class="slide_img" src="http://www.talkimages.cn/images/medium/20152236/tkf002_129357.jpg" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img class="slide_img" src="http://www.talkimages.cn/images/medium/20152236/tkf002_123037.jpg" alt="">
                </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img class="slide_img" src="http://www.talkimages.cn/images/medium/20152236/tkf002_121830.jpg" alt="">
                </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination" ></div>
        </swiper>
    </div>
</template>

<script>
// require styles
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Carousel",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

<style lang="less" scoped>
    .swiper {
        width: 100%;
        height: 200px;

        .swiper-slide {
            width: 100%;
            height: 200px;

            .slide_img {
                width: 100%;
                height: 200px;
            }
        }
    }
</style>

