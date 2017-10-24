import Vue from 'vue'
import Router from 'vue-router'

import Home from 'components/Home/home'
import Login from "components/Login/login"
import Customer from "template/customer/customer"
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
        path:"/customer",
        name:"customer",
        component:Customer
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ]
})

//对将要进入的路由进行权限判断
router.beforeEach((to, from, next) => {
  if(to.path.indexOf("login") < 0 && !window.localStorage.getItem("access_token")){
    router.replace("login");
    next();
  }
  next()
})

export default router