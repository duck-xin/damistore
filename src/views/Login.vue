<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
//导入文件
import userlist from '@/testdata/data.js';
import { useUserStore } from '@/stores/userstore'; // 导入用户状态

// 状态管理
const router = useRouter();
const username = ref('');
const password = ref('');
const userItems = userlist // 存储用户数据
const userStore = useUserStore(); // 获取用户store

// 方法定义
const goLogin = () => {
  if (!username.value || !password.value) {
    alert('账号或密码为空，请输入');
    return;
  }

  //登录逻辑
  const user = userItems.find(item => item.name === username.value && item.password === password.value);
  if (user) {
    userStore.loginSuccess(user.id, username.value); // 传入用户ID和用户名
    alert('登录成功');
    
  // 使用router进行页面跳转
  router.push({ name: 'Home' });
  } else {
    alert('登录失败，账号或密码错误');
  }
};
// 页面跳转方法
const goRegister = () => {
  // 使用router进行页面跳转
  router.push({ name: 'Register' });
}


</script>
<template>
  <p>登录页面</p>
  <input type="text" placeholder="小米账号" v-model="username" />
  <input type="password" placeholder="密码" v-model="password" />
  <button @click="goLogin">登录</button>
  <button @click="goRegister">注册</button>
</template>



<style scoped></style>