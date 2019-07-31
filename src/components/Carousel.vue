<template>
    <div id="carousel">
        <swiper :options="swiperOption" ref="mySwiper" class="swiper">
            <!-- slides -->
            <swiper-slide class="swiper-slide">
                <img class="slide_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564588629660&di=3d5bab7e3c5074a9b1590d9247fd1fc2&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151211%2Fmp47814565_1449763510414_4.gif" alt="">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img class="slide_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564588788386&di=fd2b0dd9eed028173ffd489e3db143ef&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F10%2F20170310165828_Av4GE.thumb.700_0.gif" alt="">
                </swiper-slide>
            <swiper-slide class="swiper-slide">
                <img class="slide_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564588709317&di=2b761ddfc45c15ea652267794f774758&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2Ffeed%2Fpic%2Fitem%2F359b033b5bb5c9eafa106db9d839b6003bf3b38d.jpg" alt="">
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
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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
    this.swiper.slideTo(1, 500, false);
  }
};
</script>

<style lang="less" scoped>
    .swiper {
        width: 100%;
        height: 204px;

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

