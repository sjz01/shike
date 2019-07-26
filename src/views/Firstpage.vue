<template>
    <div id="first-page">
        <router-link to="/cmenu">
           <carousel/>
        </router-link>
        <router-link to="/vdetail">
           
        </router-link>

    </div>
</template>

<script>
import Carousel from '@/components/Carousel'
export default {
    name:"Firstpage",
    components: {
        Carousel
    }
}
</script>

<style lang='less' scoped>
  #first-page{
    margin-top:50px;
   }
   
</style>
