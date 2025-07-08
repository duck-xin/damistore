<script setup>
import { ref } from 'vue';

// 状态管理
const username = ref('');
const password = ref('');
const userList = ref([]); // 存储用户数据

// 方法定义
const goLogin = () => {
  if (!username.value || !password.value) {
    alert('账号或密码为空，请输入');
    return;
  }
  if (!isChecked.value) {
    alert('请同意用户条款');
    return;
  }
//登录逻辑
  const user = userList.value.find(item => item.phone === username.value && item.password === password.value);
  if (user) {
    alert('登录成功');
  } else {
    alert('登录失败，账号或密码错误');
  }
};


</script>
<template>
            <p>登录页面</p>
              <input type="text" placeholder="小米账号"  v-model="username" />
              <input type="password" placeholder="密码"  v-model="password" />
           <button @click="goLogin">登录</button>
</template>



<style scoped>

</style>