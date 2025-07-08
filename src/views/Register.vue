<script>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  setup() {
    const router = useRouter();
    // 页面跳转方法
    const goRegister = () => {
    if (!phone.value || !rPassword.value) {
      alert('输入不能为空');
      return;
  }
  // 检查是否已注册
  const isRegistered = userList.value.some(item => item.phone === phone.value);
  if (isRegistered) {
    alert('该手机号已注册');
    return;
  }
  // 注册逻辑
  userList.value.push({
    id: +new Date(),
    phone: phone.value,
    password: rPassword.value,
    city: cityvalue.value
  });
  alert('注册成功');
  // 使用router进行页面跳转
      router.push({ name: 'Login' });
  // 清空表单
  phone.value = '';
  rPassword.value = '';
};
    return {
      goRegister
    };
  }
  
};
</script>

<template>
   <p>注册页面</p>
    <input type="text" placeholder="手机号"  v-model.number="phone" />
  <input type="password" placeholder="密码"  v-model.trim="rPassword" />
  <button  @click="goRegister">注册</button>
      
</template>

<style scoped>

</style>