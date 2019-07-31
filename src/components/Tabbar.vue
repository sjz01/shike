<template>
    <div id="tab-bar">
        <router-link to="/" class="item" exact>
           <p>&#xe60c;</p>
           <p>首页</p>
        </router-link>
        <router-link to="/menu" class="item">
           <p>&#xe621;</p>
           <p>菜谱</p>
        </router-link>
        <router-link to="/classify" class="item">
           <p>&#xe503;</p>
           <p>分类</p>
        </router-link>
        <router-link to="/mine" v-if="this.$store.state.lisha.isshow" class="item">
           <p>&#xe644;</p>
           <p>我的</p>
        </router-link>
        <router-link to="/ok" v-else class="item">
            <p>&#xe644;</p>
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>
export default {
    name:"Tabbar",
    created() {
        if(localStorage.userName==null){
            this.$store.state.lisha.isshow=true;
        }
    }
}
</script>

<style lang='less' scoped>
@import url(../maincolor/maincolor.less);
#tab-bar{
    width:100%;
    height:60px;
    background: white;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    color: @mainColor;
    border-top:1px solid  @mainColor;
    

    
     .item{
        height: 50px;
        text-align: center;
        font-size: 14px;

         p:nth-of-type(1) {
        font-family: 'myFont';
        font-size: 22px;
        height: 22px;
        line-height: 22px;
        margin: 8px 0 4px;
    }
     }

//      router-link-active{
//        color:turquoise;
//    }
  

}

</style>