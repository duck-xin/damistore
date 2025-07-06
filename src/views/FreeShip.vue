
<template>
    <blacknav></blacknav>
    <whitenav></whitenav>
  <div class="main">
    <div class="breadcrumbs">
      <div class="container">

        <a href="#">首页</a>
        <span class="sep">/</span>
        <a href="#">服务中心</a>
        <span class="sep">/</span>
        <a href="#">购物指南</a>
      </div>

    </div>
    <div class="left-nav">
      <h3>购物指南</h3>
      <ul>
        <li :class="{active: currentTab === 'delivery'}" @click="currentTab ='delivery'">
          发货实效
        </li>
        <li :class="{active: currentTab === 'cart'}" @click="currentTab ='cart'">
          购物车常见问题和购物技巧
        </li>
        <li :class="{active: currentTab === 'sales-time'}" @click="currentTab ='sales-time'">
          销售时间
        </li>
        <li :class="{active: currentTab === 'free-ship'}" @click="currentTab ='free-ship'">
          包邮政策
        </li>
        <li :class="{active: currentTab === 'payment'}" @click="currentTab ='payment'">
          支付帮助
        </li>
        <li
            :class="{ active: currentTab === 'activity' }" @click="currentTab = 'activity'">
          活动相关
        </li>
        <li :class="{ active: currentTab === 'anti-fraud' }" @click="currentTab = 'anti-fraud'">
          防诈骗提示
        </li>
        <li :class="{ active: currentTab === 'contact' }" @click="currentTab = 'contact'">
          联系客服
        </li>
      </ul>
    </div>
    <div class="right-content">
      <div style="background-color: #FFFFFF">
        <div class="title">
          什么时候发货/到货？
        </div>
        <div class="box">
          <div class="a">
            <p>亲爱的米粉，通常情况下您所购买的商品将参照订单支付顺序在48小时内发出，最快情况下我们的商品会在24小时内出库的。但是，针对下述情形的发货时效请以购买页面、订单显示为准：</p>
            <p>（1）以F码/购买资格购买的商品，以及虚拟商品或相关服务（包括实体电话卡等），无法保证在48小时内发出。</p>
            <p>（2）涉及众筹、预售、盲售、优先购、节能补贴等活动或预约配送、上门勘测（需预约配送发货，部分大尺寸商品因其大尺寸特性，需上门勘测）的商品，无法保证在48小时内发出。</p>
            <p>（3）通过小米商城，选择对应小米之家门店（包括直营店、专卖店、授权店，具体以页面显示门店为准）所下的订单（包括但不限于门店发货），该订单发货时间无法保证，请以门店店员告知或对应页面显示为准。</p>
            <p>（4）其他页面另有规定的，以另行规定为准。</p>
          </div>
          <div class="b">
            注：因受交通、天气、疫情或其他客观因素影响，发货及配送可能会有部分延迟，请您耐心等待。建议您登陆小米网（mi.com） /小米商城APP端/小米Lite微信小程序，到订单详情或者快递公司官网关注配送进度。由第三方商家负责发货的商品，如第三方商家不能按时发货，请您及时联系第三方商家进行处理。
          </div>
        </div>
      </div>
    </div>
  </div>
    <myfooter></myfooter>
</template>

<script>
import { reactive, toRefs } from 'vue'
import blacknav from '../components/common/BlackNav.vue'
import whitenav from '../components/common/WhiteNav.vue'
import myfooter from '../components/common/MyFooter.vue'

export default {
  components: {
    blacknav,
    whitenav,
    myfooter
  },
  setup() {
    //创建响应式状态对象
    const state = reactive({

    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>

.main {
  background-color: #f5f5f5;
  padding-bottom:80px;
}
.breadcrumbs {
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  background: #f5f5f5
}
.breadcrumbs,.breadcrumbs a {
  color: #757575
}

.breadcrumbs a:hover {
  color: #ff6700
}

.breadcrumbs .sep {
  margin: 0 .5em;
  color: #b0b0b0
}
a {
  color: #757575
}

a,a:hover {
  text-decoration: none
}

a:hover {
  color: #ff6700
}


.container{
  width: 1226px;
  margin-right: auto;
  margin-left: auto
}


  .sep {
    float: left;
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    color: #757575;
  }

  .sep:hover {
    color: #FF5500;
    cursor: pointer;
  }

.left-nav {
  width: 234px;
  background: #fff;
  padding: 36px 0;
  float: left;
}
.left-nav h3 {
  font-size: 16px;
  font-weight: 400;
  line-height: 52px;
  color: #212121;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
.left-nav ul {
  display: block;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
}
.left-nav li {
  font-size: 12px;
  font-weight: 400;
  line-height: 30px;
  color: #757575;
  margin: 0;
  padding: 0;
}
.left-nav li:hover {
  color: #FF5500;
  cursor: pointer;
}
.left-nav li.active {
  color: #FF5500;
  background-color: #fdfdfd;
}
.right-content{
  width: 60%;
  float: right;
  flex: 1;
  padding:30px;
}
.right-content .title{
  color: #ff6700;
  border-bottom: none;
  margin-bottom: 16px;
  font-size: 16px;
}
.right-content .box{
  background-color: #f9f9f9;
  padding: 32px 48px;
  margin: 0;
  line-height: 24px;
  font-size: 14px;
  overflow: hidden;
  display: block;
  unicode-bidi: isolate;
}
.right-content .box .a p {
  color:#333;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  unicode-bidi: isolate;
  padding:5px 48px;
  margin: 0;
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
}
.right-content .box .b{
  color:#000000;
  font-weight: 600;
  font-size: 14px;
  padding: 32px 48px;
  margin: 0;
  line-height: 24px;
}

</style>