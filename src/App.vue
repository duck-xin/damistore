<template>
  <div>
    <input v-model="username" placeholder="账号" />
    <input v-model="password" placeholder="密码" type="password" />
    <button @click="handleLogin">登录</button>
    <button @click="handleRegister">注册</button>
    <div v-if="msg">{{ msg }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const username = ref('')
const password = ref('')
const msg = ref('')

function handleLogin() {
  msg.value = username.value && password.value ? '登录逻辑' : '请输入账号和密码'
}
function handleRegister() {
  msg.value = username.value && password.value ? '注册逻辑' : '请输入账号和密码'
}
</script>
