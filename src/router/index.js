/* 导入创建路由管理器的相关指令 */
import { createRouter, createWebHistory } from "vue-router"
/* 导出路由数组 */
export  const routes = [
  {
    path: "/",
    redirect: "/home"   /* 路由重定向 */
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/HomePage.vue")   /* 主页 */
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("../views/Details.vue")   /* 商品详情页 */
  },
  {
    path: "/ReturnandExchange",
    name: "ReturnandExchange",
    component: () => import("../views/ReturnandExchange.vue")   /* 商品详情页 */
  },
  {
    path:"/FreeShip",
    name: "FreeShip",
    component: () => import("../views/FreeShip.vue")
  },
  {
    path: '/mycart',
    name: 'Mycart',
    component: () => import('../views/Mycart.vue')   /* 购物车页面 */
  },
  {
    path:"/Service",
    name: "Service",
    component: () => import('../views/Service.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')  /* 登录页面 */
  }

]
/* 创建路由管理器 */
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

/* 导出路由管理器供外界使用 */
//使用默认导出
export default router;
