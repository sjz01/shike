import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      component:()=>import("./views/Firstpage"),
    },
    {
      path:"/menu",
      component:()=>import("./views/Menu")
    },
    {
      path:"/classify",
      component:()=>import("./views/Classify")
    },
    {
      path:"/mine",
      component:()=>import("./views/Mine")
    },
    {
      path:"/cmenu",
      component:()=>import("./components/Cmenu")
    },
    {
      path:"/vdetail",
      component:()=>import("./components/Vdetail")
    },
    {
      path:"/login",
      component:()=>import("./components/mine/Login")
    },
    {
      path:"/register",
      component:()=>import("./components/mine/Register")
    },
    {
      path:"/ok",
      component:()=>import("./components/mine/Ok")
    },
    {
      path:"/enshrine",
      component:()=>import("./components/Enshrine")
    },
    {
      path:"/resetpwd",
      component:()=>import("./components/mine/Resetpwd")
    },
    {
      path:"/hots1",
      component:()=>import("./components/Hots1")
    },
    {
      path:"/hots2",
      component:()=>import("./components/Hots2")
    },
    {
      path:"/hots3",
      component:()=>import("./components/Hots3")
    }
  ]
})
