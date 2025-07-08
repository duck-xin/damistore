import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    LoginFlag: false,
    userList: [],
    currentLoginUserID: '',
    currentLoginUserName: '',
    mubiaopagepath: '',
  }),
  getters: {
    isLogin: (state) => state.LoginFlag,
    getUserList: (state) => state.userList,
    getCurrentUserID: (state) => state.currentLoginUserID,
    getCurrentUserName: (state) => state.currentLoginUserName,
    getMuBiaoPagePath: (state) => state.mubiaopagepath,
  },
  actions: {
    setLoginFlag(flag) {
      this.LoginFlag = flag
    },
    initUserList(list) {
      this.userList = list
    },
    addUser(user) {
      this.userList.push(user)
    },
    setcurrentLoginUserID(name) {
      const user = this.userList.find(u => u.name === name)
      this.currentLoginUserID = user ? user.id : ''
    },
    setcurrentLoginUserName(name) {
      this.currentLoginUserName = name
    },
    setMuBiaoPagePath(path) {
      this.mubiaopagepath = path
    },
    login({ name, password }) {
      const user = this.userList.find(u => u.name === name && u.password === password)
      if (user) {
        this.setLoginFlag(true)
        this.setcurrentLoginUserID(name)
        this.setcurrentLoginUserName(name)
        return true
      } else {
        this.setLoginFlag(false)
        return false
      }
    }
  }
})
//使用默认导出
export default useCartStore;