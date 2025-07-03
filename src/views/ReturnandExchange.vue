
<template>
  <div class="home-page">
    <blacknav></blacknav>
    <whitenav></whitenav>

  </div>
  <myfooter></myfooter>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from 'vue'
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
    //获取当前组件实例的 proxy 对象
    const {proxy} = getCurrentInstance()
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

<style scoped>
.home-page {
  min-width: 1226px;
  position: relative;
}
</style>