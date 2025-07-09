
import { defineStore } from "pinia";
import { useCartStore } from "./cartstore";


export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false, // 登录状态
    userName: "",      // 登录用户名
   
  }),
  actions: {
    // 登录成功后调用，更新状态
     loginSuccess(name) {
      this.isLoggedIn = true;
      this.userName = name;
    },
  },
});