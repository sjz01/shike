<template>
    <div id="vdetail">
        <nav class="navbar">
            <span>&#xe512;</span>
            <span>菜谱详情</span>
        </nav>
        <div id="detail">
            <img class="firstpic" src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151775155_smallImg.jpg" alt="">
            <div class="item">
                <p class="title">爆浆鸡蛋</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:"Vdetail"
}
</script>

<style lang='less' scoped>
@import url(../maincolor/maincolor.less);
#vdetail{
    margin-top:50px;
  
        .navbar{
            font-family: 'myFont';
            font-size: 24px;
            width: 100%;
            height: 50px;
            line-height: 50px;
            // text-align: center;
            background-color:@mainColor;
            position:fixed;
            top:0;
            color:white;
            span:nth-of-type(1){
                margin-right: 100px;
                margin-left: 10px;
            }
        }
       
    
   }
    #detail{
                width:100%;
                height:200px;
                background-color: darkcyan;
            .firstpic{
                        width:100%;
                        height:200px;
                }
                .item{
                    padding: 0 10px;
                    .title{
                        font-size: 20px;
                    }
                }
        }
</style>