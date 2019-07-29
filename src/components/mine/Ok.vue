<template>
    <div id="ok">

        <div class="name">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564372650338&di=f104c5cf61488894af37ef07d12adb43&imgtype=0&src=http%3A%2F%2Fztd00.photos.bdimg.com%2Fztd%2Fw%3D700%3Bq%3D50%2Fsign%3D5c86b7c327738bd4c421b03191b0f6eb%2Fe61190ef76c6a7ef48296038f4faaf51f3de66a5.jpg" alt="">
            <p>用户名</p>
        </div>
        <router-link to="/enshrine">
           <div class="enshrine">
               <span>我的收藏&#xe644;</span>
               <span>more</span>
           </div>
        </router-link>
        <router-link tag=ul to="/vdetail">
            <li>
                <div id="imgk">
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151775155_smallImg.jpg" alt="">
                </div>
                <div id="des">
                    "生活里真的是创意无限,虽然都是一样的柴米油盐,有些家吃的欢,有些家吃的愁。"
                </div>
            </li>
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
    name:"Ok"
}
</script>

<style lang='less' scoped>
#ok {
    margin-top: 50px;
    background-color: #F8F8F8;
    height: 590px;
    padding-top: 20px;

    .name {
        margin-top: 20px;
        width: 100%;
        height: 100px;
        background-color: white;
        font-size: 26px;
        line-height: 100px;
        margin-bottom: 20px;
        img,p{
            display: inline-block;

        }
        img{
            width: 70px;

        }
    }

    .enshrine {
        font-family: 'myFont';
        font-size: 20px;
        height: 50px;
        line-height: 50px;
        background-color: white;

        span:nth-of-type(2) {
            float: right;
        }

    }

    ul {
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;

        li {
            display: flex;
            background-color: white;
            margin-bottom: 15px;
            div {
                margin: 5px;
            }
        }
    }
}
</style>