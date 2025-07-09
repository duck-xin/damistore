import { defineStore } from "pinia";
import router from "@/router/index.js";
export const useCartStore = defineStore("cartstore", {
    state: () => ({

        //购物车内的商品数组
        shangpinsincart: [],
    }),
    getters: {
        
        //读取购物车内的商品数组
        getShangPinsInCart: function () {
            return this.shangpinsincart;
        },
        //动态计算购物车中的商品数量
        cartCount: (state) => state.shangpinsincart.length,
    },
    actions: {
        addShangPinInCart: function (e) {
            this.shangpinsincart.push(e);;
        }
        
    }
});
//使用默认导出
export default useCartStore;
