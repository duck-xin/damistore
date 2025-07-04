<template>
  这是购物车页面！<br />{{ number }}
</template>
<script>
import {onMounted, computed, reactive, toRefs} from 'vue'
import { useCartStore } from '@/stores/cartstore';
export default {
  setup() {
    const cartstore = useCartStore();
    const state = reactive({
      number: 100,
    })
    onMounted(() => {
      state.number = cartstore.getShangPinsInCart.length;
    })
    return {
      ...toRefs(state),
    }
  }
}

</script>

<style scoped>

</style>
