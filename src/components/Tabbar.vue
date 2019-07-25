<template>
    <div id="tab-bar">
        <router-link to="/" class="item">
           <p>字体</p>
           <p>首页</p>
        </router-link>
        <router-link to="/menu" class="item">
           <p>字体</p>
           <p>菜谱</p>
        </router-link>
        <router-link to="/classify" class="item">
           <p>字体</p>
           <p>分类</p>
        </router-link>
        <router-link to="/mine" class="item">
           <p>字体</p>
           <p>我的</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Tabbar"
}
</script>

<style lang='less' scoped>
#tab-bar{
    width:100%;
    height:50px;
    background: #07103e;
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    color:white;
     .item{
        height: 50px;
        text-align: center;
     }
}
</style>