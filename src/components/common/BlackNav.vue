<script>
import { reactive,toRefs} from "vue";
import { useRouter } from 'vue-router'
export default {
  setup(){
    const state = reactive({
      navleft:[
        { name: "小米官网" },
        { name: "小米商城" },
        { name: "小米澎湃OS" },
        { name: "小米汽车" },
        { name: "云服务" },
        { name: "loT" },
        { name: "有品" },
        { name: "小爱开放平台" },
        { name: "资质证照" },
        { name: "协议规则" },
        { name: "下载app" },
        { name: "Select Location" }
      ],
      navright: [
        { name: "登录" },
        { name: "注册" },
        { name: "消息通知" }
      ]

    })
    const router = useRouter()
    const showHome = () => {
      router.push({
        path: "/",
      })
    }

    return {
      ...toRefs(state),
      showHome
    }
  }
}
</script>

<template>
  <div class="black-nav">
    <div class="navbar">
      <div class="navbar-left">
        <ul class="black-nav-content">
          <li v-for= "(item,index) in navleft" :key= "index" v-on:click="showHome()">{{ item.name }}</li>
        </ul>
      </div>
      <div class="navbar-middle">
        <ul class="black-nav-content">
          <li v-for= "(item,index) in navright" :key= "index">{{ item.name }}</li>
        </ul>
      </div>
      <div class="navbar-right">
        <div class="shopping">
          <!-- 购物车图片 -->
          <div class="shopping_img"></div>
          &nbsp;
          <p>购物车&nbsp;(0)</p >
        </div>

      </div>

    </div>
  </div>
</template>


<style scoped>
.black-nav {
  top: 0px;
  left: 0px;    /*绝对定位*/
  width: 100%;
  height: 45px;
  background-color: #333333;
}
.navbar {
  position: relative;
  margin: 0 auto;        /*居中对齐的一种方式*/
  width: 1226px;
  height: 100%;
}
.navbar-left {
  position: absolute;
  left: 0;
  margin-left: 0;
  width: 800px;
  height: 100%;
}
.navbar-middle {
  position: absolute;
  right: 125px;
  width: 155px;
  height: 100%;
}
.navbar-right {
  position: absolute;
  width: 105px;
  height: 100%;
  right: 0;/*从右边的头开始*/
}

.black-nav-content {
  top: 12px;
  padding-left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  list-style-type: none;
}
.black-nav-content li{
  height: 14px;
  line-height: 12px;
  padding: 0 6px;
  font-size: 13px;
  color: #b0b0b0;
  border-right: 1px solid #424242;
}
/* 让第一项与左边边距为0，即居左 */
.black-nav-content li:nth-child(1) {
  padding-left: 0;
}
/* 取消最后一个的边框 */
.black-nav-content li:last-child {
  border-right: 0;
}
/* 定义鼠标置于其上时的颜色变换 */
.black-nav-content li:hover {
  color: white;
  cursor: pointer;
}

/* 购物车 */
.shopping{
  position: absolute;
  right: 0;
  margin-right: 0;
  width: 100%;
  display: flex;
  height: 100%;
  padding-left: 10px;
  font-size: 10px;
  color: #b0b0b0;
  background-color: #424242;
  line-height: 20px;
}
.shopping_img{
  width: 18px;
  height: 18px;
  margin-top: 10px;
  margin-left: 4px;
  margin-right: 4px;
  background-size:100% 100%;
  background-image:url(../../assets/img/black-navbar/one.png);
}
.shopping:hover {
  background-color: #FFFFFF;
  cursor: pointer;
  color: #ff6700;
}
.shopping:hover .shopping_img {
  background-image: url(../../assets/img/black-navbar/two.png);
}

</style>