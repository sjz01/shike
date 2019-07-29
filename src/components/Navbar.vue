<template>
    <div id="nav-bar">
        <p>食客</p>
    </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style lang='less' scoped>
@import url(../maincolor/maincolor.less);
#nav-bar{
   width:100%;
    height:50px;
    background: @mainColor;
    position: fixed;
    top: 0;
    color:white;
    text-align: center;
    line-height: 50px;
    font-size: 24px;
    z-index: 999;
}
</style>