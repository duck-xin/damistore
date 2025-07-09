
import { defineStore } from "pinia";
import { useCartStore } from "./cartstore";


export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false, // 登录状态
    userName: "",      // 登录用户名
    userId: null,
  }),
  actions: {
    // 登录成功后调用，更新状态
     loginSuccess(userId, name) {
      this.isLoggedIn = true;
      this.userId = userId;
      this.userName = name;
      
      // 同步到购物车Store
      const cartStore = useCartStore();
      cartStore.setCurrentUser(userId); // 设置当前用户
    },
  },
});