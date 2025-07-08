import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'

//从数据文件中导入方法
import { getShangPinData } from './testdata/data.js';
import { useUserStore } from '@/stores/user'

const app = createApp(App);

//定义全局变量
app.config.globalProperties.$name = "111";      // 定义全局变量

//定义全局数组变量
app.config.globalProperties.$aa = [1,2,3];      // 定义全局变量

//定义全局方法
app.config.globalProperties.$say = function(a){
    console.log(a);
};

//导入数据
app.config.globalProperties.$malldata = getShangPinData("shouji");

//注册全局方法
app.config.globalProperties.$getShangPinData = getShangPinData;

const userStore = useUserStore()

function handleLogin() {
  const success = userStore.login({ name: username, password: pwd })
  if (success) {
    // 跳转到目标页
    router.push(userStore.getMuBiaoPagePath || '/')
  } else {
    alert('用户名或密码错误')
  }
}

app.use(createPinia())
app.use(router)

app.mount('#app')