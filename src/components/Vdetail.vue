<template>
    <div id="vdetail">
        <nav class="navbar">
        <span @click="back">&#xe512;</span>
        <span>菜谱详情</span>
    </nav>
        <div id="detail">
            <img class="firstpic" src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151775155_smallImg.jpg" alt="">
            <div class="item">
                <p class="cpName">爆浆鸡蛋</p>
                <div class="enshrine" @click="collet">收藏菜谱</div>
                <P class="des">生活里真的是创意无限,虽然都是一样的柴米油盐,有些家吃的欢,有些家吃的愁。所以要吃的好，不在于你买了什么，而是你即使用简单的材料也能做出让家人有惊喜的美食。今天这道美食就是这样，简单的食材，只用到了一个鸡蛋和一张海苔就能让你尝到从没吃过的味道，不用加一点调料，不用盐，不用味精！</P>
                <P class="food">材料</P>
                <ul class="foods">
                    <li class="yl">
                        <span class="ylName">鸡蛋</span>
                        <span class="ylUnit">100g</span>
                    </li>
                    <li class="yl">
                        <span>海苔</span>
                        <span>100g</span>
                    </li>
                    <li class="yl">
                        <span>海苔</span>
                        <span>100g</span>
                    </li>
                    <li class="yl">
                        <span>海苔</span>
                        <span>100g</span>
                    </li>
                </ul>
                <p class="food">做法</p>
                <div class="way">
                    <p>1.准备好一张海苔</p>
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801150911864_1.jpg" alt="">
                    <p>2."把海苔放在一制盘子里</p>
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151018866_2.jpg" alt="">
                    <p>3.准备好一点温水</p>
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/147880115109369_3.jpg" alt="">
                    <p>4.在海苔的四周抹上温水</p>
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151135287_4.jpg" alt="">
                    <p>5.打入一个鸡蛋</p>
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151293194_5.jpg" alt="">
                    <p>6.把海苔包起，捏紧</p>
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151375757_6.jpg" alt="">
                    <p>7.锅里放入适量的油，烧热后放入油炸</p>
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151439629_7.jpg" alt="">
                    <p>8.炸到外面有点松脆的感觉就可以了</p>
                    <img src="http://app2.showapi.com/img/caipuImg3/201611110205/1478801151541259_8.jpg" alt="">
                   
                </div>
                <p class="food">小贴士</p>
                <p class="des">1. 海苔四周抹水是因为放入鸡蛋后可以把海苔包拢，鸡蛋不会流出； 2. 如果有的海苔太薄，建议用两张比较安全； 3. 煎之前油要烧热再放入才会炸的快，大约炸一分钟左右就可以了。 4. 用平底锅也可以少放油，就是把平底锅倾斜一下油就集中到一边了。</p>
            </div>
            <div class="collect" @click="collet">收藏菜谱</div>
        </div>
    </div>
</template>

<script>
    import http from '@/axios/Api.js'
export default {
    name:"Vdetail",
    methods:{
        back(){
            this.$router.go(-1);
        },
        collet(){
            alert('收藏成功');
        },
        getData(){
            http.getDetail(this,{

                // "id":"5c3dfddfe9b6cc65afc9427e",
                // "cpName":"黄金鸡蛋盅",
                // "maxResults":"20",
                // "page":"1"
            }).then((res)=>{
                console.log(res);
            })
        }
    },
    created() {
        this.getData();
    }
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
            // line-height: 50px;
            text-align: center;
            background-color:@mainColor;
            position:fixed;
            top:0;
            color:white;
            z-index: 11;
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
                    padding: 0 20px;
                    .enshrine{
                        width: 60%;
                        margin: 0 auto;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        background-color: tomato;
                        border-radius: 5px;
                        font-size: 20px;
                        color: #ffffff;
                        margin-bottom: 20px;
                    }
                    .cpName{
                        font-size: 20px;
                        padding-top:20px;
                        padding-bottom:20px;
                        letter-spacing:15px;
                        font-weight:800;
                    }
                    .des{
                        text-indent:20px;
                        font-size: 18px;
                        color: #aaaaaa;
                    }
                    .food{
                        font-size: 20px;
                        font-weight: 800;
                        letter-spacing: 15px;
                        margin-top: 20px;
                        margin-bottom: 20px;
                    }
                    .foods{
                        width: 100%;
                        .yl{
                            border-top: 1px solid #bbbbbb;
                            border-bottom: 1px solid #bbbbbb;
                            font-size: 18px;
                            padding: 10px 25px;
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                    .way {
                          p{
                              font-size:18px;
                          }
                          img{
                              width: 100%;
                              margin-bottom: 20px;
                          }
                    }

                }
                .collect{
                  
                    width: 100%;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    margin: 0 auto;
                    border-radius: 5px;
                    background-color: tomato;
                    margin-bottom: 65px;
                    margin-top: 20px;
                    font-size: 20px;
                    color: #ffffff;
                }

   }
</style>