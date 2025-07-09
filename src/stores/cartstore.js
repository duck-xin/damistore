import { defineStore } from "pinia";
import router from "@/router/index.js";
export const useCartStore = defineStore("cartstore", {
    state: () => ({
        //按用户ID存储购物车
        userCarts: new Map(),
        currentUserId: null,
        //购物车内的商品数组
        //shangpinsincart: [],
    }),
    getters: {
        // 获取当前用户的购物车商品（新）
        getCurrentUserCart: (state) => {
            return state.userCarts.get(state.currentUserId) || [];
        },
        // 当前用户的购物车商品数量（新）
        cartCount: (state) => {
            const cart = state.userCarts.get(state.currentUserId);
            return cart ? cart.length : 0;
        },
        // //读取购物车内的商品数组
        // getShangPinsInCart: function () {
        //     return this.shangpinsincart;
        // },
        // //动态计算购物车中的商品数量
        // cartCount: (state) => state.shangpinsincart.length,
    },
    actions: {
        // 设置当前用户ID（登录/登出时调用）
        // setCurrentUser(userId) {
        //     this.currentUserId = userId;
        //     // 如果该用户没有购物车，初始化一个空数组
        //     if (!this.userCarts.has(userId)) {
        //         this.userCarts.set(userId, []);
        //     }
        // },
        // // 添加商品到当前用户的购物车（新）
        // addToCart(item) {
        //     if (!this.currentUserId) {
        //         console.error("请先登录!");
        //         return;
        //     }
        //     const cart = this.userCarts.get(this.currentUserId);
        //     cart.push(item);
        // },

        //     //往购物车内增加商品，其中e是一个封装的商品对象
        //     addShangPinInCart: function (e) {
        //         this.shangpinsincart.push(e);
        //     }
        addShangPinInCart(item) {
            if (!this.currentUserId) {
                console.error("请先登录!");
                return;
            }
            const cart = this.userCarts.get(this.currentUserId);
            cart.push(item);
        }
    }
});
//使用默认导出
export default useCartStore;
