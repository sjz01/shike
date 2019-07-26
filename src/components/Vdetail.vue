<template>
    <div id="vdetail">
        <nav class="navbar">
            <span>&#xe512;</span>
            <span>菜谱详情</span>
        </nav>

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
    margin-top:100px;
    background: aqua;
        .navbar{
            font-family: 'myFont';
            font-size: 24px;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color:@mainColor;
            position:fixed;
            top:0;
            color:white;
            display:flex;
            justify-content: space-around;
        }
    
   }
</style>