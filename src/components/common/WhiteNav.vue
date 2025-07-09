<script>
import { reactive, toRefs } from 'vue'

export default {
  setup () {
    const state = reactive({
      /* 白色导航条左面内容 */
      whiteNavContent: [
        { name: "Xiaomi手机" },
        { name: "Redmi红米" },
        { name: "电视" },
        { name: "笔记本" },
        { name: "平板" },
        { name: "家电" },
        { name: "路由器" },
        { name: "服务中心" },
        { name: "社区" }            ]
    })
    /*
           *   搜索框鼠标进入点击及离开边框变色特效实现函数searchInputFocus()、
           *   searchInputBlur()、searchInputMouseEnter()、searchInputMouseLeave()
           */
    const searchInputFocus = ()  => {
      document.getElementById("input-search").style.borderColor = "#FF6700";
      document.getElementById("btn-search").style.borderColor = "#FF6700";
      document.getElementById("input-search").hasFocus=true;
    }
    const searchInputBlur = ()  => {
      document.getElementById("input-search").style.borderColor = "#e0e0e0";
      document.getElementById("btn-search").style.borderColor = "#e0e0e0";
      document.getElementById("input-search").hasFocus=false;
    }
    const searchInputMouseEnter = ()  => {
      if(!document.getElementById("input-search").hasFocus){
        document.getElementById("input-search").style.borderColor = "#333333";
        document.getElementById("btn-search").style.borderColor = "#333333";
      }
    }
    const searchInputMouseLeave = ()  => {
      if(!document.getElementById("input-search").hasFocus){
        document.getElementById("input-search").style.borderColor = "#e0e0e0";
        document.getElementById("btn-search").style.borderColor = "#e0e0e0";
      }
    }

    return {
      ...toRefs(state),
      searchInputFocus,
      searchInputBlur,
      searchInputMouseEnter,
      searchInputMouseLeave
    }
  }
}
</script>

<template>
  <div class="white-nav">
    <div class="white-navbar">
      <div class="white-navbar-left">
        <img class="logo-mini" src="../../assets/img/white-navbar/logo-mi2.png"/>
      </div>

      <div class="white-navbar-middle">
        <ul class="white-nav-content">
          <li v-for="(item,index) in whiteNavContent" :key="index">{{ item.name }}</li>
        </ul>
      </div>

      <div class="white-navbar-right">
        <!-- 搜索条 -->
        <div class="search">
          <input id="input-search" type="text" value="小米手机" class="search-text"
                 v-on:click="searchInputFocus()" v-on:blur="searchInputBlur()"
                 v-on:mouseenter="searchInputMouseEnter()"
                 v-on:mouseleave="searchInputMouseLeave()"/>
          <button id="btn-search" class="search_btn"
                  v-on:mouseenter="searchInputMouseEnter()"
                  v-on:mouseleave="searchInputMouseLeave()">
          </button>
        </div>
      </div>


    </div>

  </div>

</template>

<style scoped>
.white-nav {
  top: 40px;
  left: 0px;
  width: 100%;
  height: 100px;
  background-color: white;
}
.white-navbar {
  position: relative;
  margin: 0 auto;
  width: 1226px;
  height: 100%;
}
.white-navbar-left {
  position: absolute;
  left: 0;
  margin-left: 0;
  width: 62px;
  height: 100%;
}
.white-navbar-middle {
  position: absolute;
  margin-left: 230px;
  width: 850px;
  height: 100%;
}
div.white-navbar-right {
  position: absolute;
  margin-right: 0;
  right: 0;
  width: 296px;
  height: 100%;
}
img.logo-mini {
  position:absolute;
  width: 56px;
  height: 56px;
  left: 0;
  top:22px;
  vertical-align: middle;
}
.white-nav-content {
  height: 100%;
  margin: 0;
  list-style-type: none;
  display: flex;
  float:left;
  font-size: 14px;
  padding: 0;
}
.white-nav-content li{
  padding-right: 18px;
  color: #464646;
  line-height: 100px;
}
.white-nav-content li:hover {
  color: #ff6700;
  cursor: pointer;
}
.search {
  position: absolute;
  right:0;
  top: 25px;
  width: 300px;
  height: 50px;

}
.search .search-text{
  position: absolute;
  right: 49px;
  font-size: 16px;
  color: #AAA;
  border: 1px solid #e0e0e0;
  width: 245px;
  height: 46px;
  padding-left: 10px;
}
.search .search-text:hover{
  border: 1px solid #333333;
}
.search .search-text:focus{
  outline:none;
  border: 1px solid #FF6700;
}
.search_btn {
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
  border: 1px solid #e0e0e0;
  background-image: url('../../assets/img/white-navbar/search_before.png');
  background-color: white;
  background-size: 60%;
  background-position:10px 10px;
  background-repeat: no-repeat;
  cursor: pointer;
}
.search_btn:hover {
  background-color: #FF6700;
  background-image: url('@/assets/img/white-navbar/search_after.png');
}

</style>