import { defineStore } from "pinia";
import router from "@/router/index.js";
export const useCartStore = defineStore("cartstore", {
    state: () => ({
        //购物车内的商品数组
        shangpinsincart: []
    }),
    getters:{
        //读取购物车内的商品数组
        getShangPinsInCart: function () {
            return this.shangpinsincart;
        }
    },
    actions: {
        //往购物车内增加商品，其中e是一个封装的商品对象
        addShangPinInCart:function (e) {
            this.shangpinsincart.push(e);
        }
    }
});
//使用默认导出
export default useCartStore;
