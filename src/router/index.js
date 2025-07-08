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
    component: () => import("../views/HomePage.vue")  
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("../views/Details.vue")   
  },
  {
    path: "/ReturnandExchange",
    name: "ReturnandExchange",
    component: () => import("../views/ReturnandExchange.vue")   
  },
  {
    path:"/FreeShip",
    name: "FreeShip",
    component: () => import("../views/FreeShip.vue")
  },
  {
    path: '/mycart',
    name: 'Mycart',
    component: () => import('../views/Mycart.vue')  
  },
  {
    path:"/Service",
    name: "Service",
    component: () => import('../views/Service.vue')
  },
 {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')  
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')  
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
