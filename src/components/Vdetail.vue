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
                <P>生活里真的是创意无限,虽然都是一样的柴米油盐,有些家吃的欢,有些家吃的愁。所以要吃的好，不在于你买了什么，而是你即使用简单的材料也能做出让家人有惊喜的美食。今天这道美食就是这样，简单的食材，只用到了一个鸡蛋和一张海苔就能让你尝到从没吃过的味道，不用加一点调料，不用盐，不用味精！</P>
                <P>材料</P>
                <ul>
                    <li>鸡蛋</li>
                    <li>海苔</li>
                </ul>
                <p>做法</p>
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
                <p>小贴士</p>
                <p>1. 海苔四周抹水是因为放入鸡蛋后可以把海苔包拢，鸡蛋不会流出； 2. 如果有的海苔太薄，建议用两张比较安全； 3. 煎之前油要烧热再放入才会炸的快，大约炸一分钟左右就可以了。 4. 用平底锅也可以少放油，就是把平底锅倾斜一下油就集中到一边了。</p>
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
    margin-bottom: 60px;
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