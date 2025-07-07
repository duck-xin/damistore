<template>
  <div class="home-page">
  <blacknav></blacknav>
  <whitenav></whitenav>
    <div class="breadcrumbs">
      <div class="container">
        <p class="sep">首页/</p>
        <p class="sep">服务中心/</p>
        <p>联系客服</p>
      </div>
    </div>
    <div class="contact">
      <h2>联系客服</h2>
      <div class="common-contact">
      <ul>
          <li class="a">
            <p class="neirong">
              <img src="../assets/img/contact/contact_icon1.png">
              <span>
                小米客服
                <br>
                24小时在线咨询
              </span>
            </p>
          </li>
        <li class="a">
          <p class="neirong">
            <img src="../assets/img/contact/contact_icon2.png">
            <span>
                小米服务微博
              </span>
          </p>
        </li>
        <li class="a">
          <p class="neirong">
            <img src="../assets/img/contact/contact_icon34.png">
            <span>
                小米服务微信
              </span>
          </p>
        </li>
        <li class="a">
          <p class="neirong">
            <img src="../assets/img/contact/contact_icon34.png">
            <span>
                商城官方微信
              </span>
          </p>
        </li>
        <li class="a">
          <p class="neirong">
            <img src="../assets/img/contact/contact_icon5.png">
            <span>
              小米售后服务热线
                <br>
                950816
              </span>
          </p>
          <p class="tip">
            手机、电视盒子、智能硬件等
            <br>
            服务时间：8:00-18:00
          </p>
        </li>
        <li class="a">
          <p class="neirong">
            <img src="../assets/img/contact/contact_icon6.png">
            <span>
               天星金融热线
                <br>
               400-100-3399
              </span>
          </p>
         <p class="tip">
            贷款、保险、理财、钱包
            <br>
            服务时间：9:00-19:00
          </p>
        </li>
        <li class="a">
          <p class="neirong">
            <img src="../assets/img/contact/contact_icon7.png">
            <span>
                小米移动热线
                <br>
                10046
              </span>
          </p>
           <p class="tip">
            任我行、吃到饱、米粉卡等
            <br>
            服务时间：9:00-18:00
          </p>
          
        </li>
        <li class="a">
          <p class="neirong">
            <img src="../assets/img/contact/contact-icon8.png">
            <span>
                小米游戏热线
                <br>
                400-098-1666
              </span>
          </p>
          <p class="tip">
            小米游戏相关
            <br>
            服务时间：8:00-18:00
          </p>
          
        </li>
        <div class="clearfix">
        </div>
      </ul>
      </div>
    </div>
  <myfooter></myfooter>
  </div>

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
.home-page {
  min-width: 1226px;
  position: relative;
}
.breadcrumbs .container p {
  display: inline;
  color:#757575;
  margin: 0;
  padding: 0;
}
.sep:hover {
  color: #FF5500;
  cursor: pointer;
}
.breadcrumbs {
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  background: #f5f5f5
}

.container {
  width: 1226px;
  margin-right: auto;
  margin-left: auto
}
.contact{
  padding: 20px 0 60px 0;
  background: #f5f5f5;
  display: block;
  unicode-bidi:isolate;
}
.contact h2{
  margin: 0 0 32px 0;
  color: #424242;
  line-height: 1;
  font-size: 30px;
  text-align: center;
  font-weight: 400;
}
.common-contact{
  width: 1226px;
  margin: auto;
  display: block;

}
.common-contact ul{
  width: 1242px;
  margin: 0;
  padding: 0;
}
.common-contact ul li{
  display: list-item;
  text-align: -webkit-match-parent;
  unicode-bidi: isolate;
}
.common-contact ul li span{
   position: relative;
    top: -14px;
    display: inline-block;
    margin-left: 20px;
}
.common-contact .a .tip{
  margin-top: 50px;
  color: #000;
  font-size: 14px;
  text-align: center;

}
.common-contact .a{
  float: left;
  width: 296px;
  height: 276px;
  list-style: none;
  margin: 0 14px 17px 0;
  background-color: #fff;
  cursor: pointer;
}
.common-contact .a .neirong{
  margin: 0;
  padding-top: 116px;
  color: #000;
  font-size: 18px;
  text-align: center;
}
.clearfix {
   content: "";
  display: table;
   clear: both; 
}

</style>