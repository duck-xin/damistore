<template>
  <div class="home-page">
    <blacknav></blacknav>
    <whitenav></whitenav>
    <lunbotu></lunbotu>
    <fourimgshow></fourimgshow>
    <!-- 商品列表组件 -->
    <goodslist v-for="post in posts" :key="post.id" :data="post.data" :id="post.id"></goodslist>
  </div>
  <myfooter></myfooter>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from 'vue'
import blacknav from '../components/common/BlackNav.vue'
import whitenav from '../components/common/WhiteNav.vue'
import lunbotu from '../components/LunBoTu.vue'
import fourimgshow from '../components/FourImgShow.vue'
import goodslist from '../components/GoodsList.vue'
import myfooter from '../components/common/MyFooter.vue'

export default {
  components: {
    blacknav,
    whitenav,
    lunbotu,
    fourimgshow,
    goodslist,
    myfooter
  },
  setup() {
    //获取当前组件实例的 proxy 对象
    const { proxy } = getCurrentInstance()
    //创建响应式状态对象
    const state = reactive({
      posts: [
        {
          id: 1,
          data: proxy.$malldata,
          showtype: 1
        }
      ]
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style>
.home-page {
  min-width: 1226px;
  position: relative;
}
</style>