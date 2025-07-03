<template>
  <blacknav></blacknav>
  <whitenav></whitenav>
  <goodsdetails></goodsdetails>
  <myfooter></myfooter>
</template>
<script>
import { reactive, toRefs } from 'vue'
import blacknav from '../components/common/BlackNav.vue'
import whitenav from '../components/common/WhiteNav.vue'
import goodsdetails from '../components/GoodsDetails.vue'
import myfooter from '../components/common/MyFooter.vue'
export default {
  components: {
    blacknav,
    whitenav,
    goodsdetails,
    myfooter
  },
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
    }
  }
}
</script>
<style>
</style>
