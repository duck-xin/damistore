<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
//导入文件
import userlist from '@/testdata/data.js';
export default {
  setup() {
    const router = useRouter();
    const userItems = [];
    const username = ref('');  // 添加username的ref
    const password = ref('');  // 添加password的ref


    // 页面跳转方法
    const goRegister = () => {
      if (!username.value || !password.value) {
        alert('输入不能为空');
        return;
      }
      // 检查是否已注册
      const isRegistered = userItems.find(item => item.name === username.value);
      if (isRegistered) {
        alert('该用户已注册');
        return;
      }
      // 注册逻辑
      const userItem={
        name: username.value,
        password: password.value,
      }
      // 检查是否已注册
      userItems.push(userItem);
      //加入到用户集合data中
      userlist.push(userItem);
      alert('注册成功');
      // 使用router进行页面跳转
      router.push({ name: 'Login' });
      // 清空表单
      username.value = '';
      password.value = '';


    };
    const goLogin =()=>{
// 使用router进行页面跳转
      router.push({ name: 'Login' });

    };
    return {
      goRegister,
      goLogin,
      username,  // 返回username
      password   // 返回password
    };
  }

};
</script>

<template>
  <p>注册页面</p>
  <input type="text" placeholder="手机号" v-model="username" />
  <input type="password" placeholder="密码" v-model="password" />
  <button @click="goRegister">注册</button>
  <button @click="goLogin">登录</button>

</template>

<style scoped></style>