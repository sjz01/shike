<template>
    <div id="menu">
        <router-link to="/vdetail">
            <div class="vtl_d">
                <img class="pic" src="http://www.talkimages.cn/images/medium/20133071/tkf003_535296.jpg" alt="">
                <p class="pic_font">减肥餐</p>
            </div>
            <div class="vtl_d">
                <img class="pic" src="http://www.talkimages.cn/images/medium/20133071/tkf003_535296.jpg" alt="">
                <p class="pic_font">减肥餐</p>
            </div>
            <div class="vtl_d">
                <img class="pic" src="http://www.talkimages.cn/images/medium/20133071/tkf003_535296.jpg" alt="">
                <p class="pic_font">减肥餐</p>
            </div>
            <div class="vtl_d">
                <img class="pic" src="http://www.talkimages.cn/images/medium/20133071/tkf003_535296.jpg" alt="">
                <p class="pic_font">减肥餐</p>
            </div>
            <div class="vtl_d">
                <img class="pic" src="http://www.talkimages.cn/images/medium/20133071/tkf003_535296.jpg" alt="">
                <p class="pic_font">减肥餐</p>
            </div>
            <div class="vtl_d">
                <img class="pic" src="http://www.talkimages.cn/images/medium/20133071/tkf003_535296.jpg" alt="">
                <p class="pic_font">减肥餐</p>
            </div>
            <div class="vtl_d">
                <img class="pic" src="http://www.talkimages.cn/images/medium/20133071/tkf003_535296.jpg" alt="">
                <p class="pic_font">减肥餐</p>
            </div>
            <p class="vtl_p">亲，到底啦~</p>
        </router-link>
    </div>


</template>

<script>
export default {
    name:"Menu"
}
</script>

<style lang='less' scoped>
   #menu{
       margin-top: 50px;
       color: black;

       .vtl_d {
           width: 94%;
           height: 280px;
           margin: 0 auto;
           margin-top: 10px;
           border-bottom:1px solid #ccc;
           

           .pic {
               width: 100%;
               margin-top: 6px;
           }
           .pic_font{
                   margin: 4px 0;
                   font-size: 18px;
                   font-weight: 600;
                   color: black ;
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