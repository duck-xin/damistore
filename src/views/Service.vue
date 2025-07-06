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
        </li>
        <div class="clearfix">
          ::before
          ::after
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
.common-contact .a{
  float: left;
  width: 296px;
  height: 276px;
  list-style: none;
  margin: 0 14px 17px 0;
  background-color: #fff;
  cursor: pointer;
  -webkit-transition: all .5s ease-in-out;
}
.common-contact .a .neirong{
  margin: 0;
  padding-top: 116px;
  color: #000;
  font-size: 18px;
  text-align: center;



}

</style>