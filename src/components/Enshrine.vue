<template>
    <div id="cmenu">
        <nav class="navbar">
            <span @click="back"> &#xe512; </span>
            <span> 我的收藏 </span>
        </nav>
        <router-link tag=ul to="/vdetail">
            <li>
                <div id="imgk">
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151775155_smallImg.jpg" alt="">
                </div>
                <div id="des">
                    "生活里真的是创意无限,虽然都是一样的柴米油盐,有些家吃的欢,有些家吃的愁。"
                </div>
            </li>
        </router-link>
    </div>
</template>

<script>
    export default {
        name:"Enshrine",
        methods:{
            back(){
                this.$router.go(-1);
            }
        }

    }
</script>

<style lang='less' scoped>
    @import url(../maincolor/maincolor.less);
    #cmenu{
        width: 100%;


        .navbar{

            font-family: 'myFont';
            font-size: 24px;
            width: 100%;
            height: 50px;
            // line-height: 50px;
            text-align: center;
            background-color:@mainColor;
            position:fixed;
            top:0;
            color:white;
            z-index: 11;
        }
        ul{
            width:90%;
            margin:0 auto;
            margin-top: 54px;

            li{
                display: flex;

                div{
                    margin:5px;
                }
            }
        }

        margin-bottom:62px;
    }
</style>
