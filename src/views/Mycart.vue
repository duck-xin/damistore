<template>
  我的购物车商品数量：<br />{{ number }}<br/>
  我加入的商品详情：<br/>
  <div v-for="(item,index) in cartItems" :key="index">
     <h3>{{ item.shangpinInfo.name }}</h3>
      <p>价格: {{ item.shangpinInfo.price }}元</p>
      <p>型号: {{ item.shangpinInfo.xinghao }}</p>
      <p>配置: {{ item.shangpinInfo.peizhi }}</p>
      <p>颜色: {{ item.shangpinInfo.color }}</p>
      <p>意外保险: {{ item.shangpinInfo.yiwaibaoxian }}</p>
       <p>延长保险: {{ item.shangpinInfo.yanchangbaoxian }}</p>
      <p>云服务: {{ item.shangpinInfo.yunserve }}</p>
      <img :src="item.shangpinInfo.image" alt="商品图片" width="100">
      <hr>
  </div>
</template>
<script>
import {onMounted, computed, reactive, toRefs} from 'vue'
import { useCartStore } from '@/stores/cartstore';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/userstore';
import { ref } from 'vue';
import goodslist from '@/testdata/data.js';
export default {
  setup() {
    const router = useRouter();
    const cartstore = useCartStore();
    const userStore = useUserStore();
    const state = reactive({
      // cartCount: computed(() => cartstore.getCartCount),
      // cartItems: computed(() => cartstore.getShangPinsInCart),
      // number: 100,
      cartItems: computed(() => cartstore.getCurrentUserCart), 
      number: computed(() => cartstore.cartCount)          
      
    })
   
    onMounted(() => {
       if (!userStore.isLoggedIn) {
      router.push('/login');
    }
      //state.number = cartstore.getShangPinsInCart.length;
    })
    return {
      ...toRefs(state),
    }
  }
}

</script>

<style scoped>

</style>
