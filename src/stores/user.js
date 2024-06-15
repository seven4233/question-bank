import { getUserInfoAPI } from "@/apis/user"
export const useUserStore = defineStore('user', () => {


    const token = ref('')
    const userInfo = ref(null)


    const favorList = ref()


    // 保存token
    const setToken = (value) => {
        token.value = value
    }

    //   保存用户资料
    const setUserInfo = (info) => {
        userInfo.value = info
    }

    const getUserInfo = async () => {
        let res = await getUserInfoAPI()
        userInfo.value = res
    }

    // 清除用户信息
    const clearUserInfo = () => {
        userInfo.value = ''
        token.value = ''
    }

    return { token, userInfo, getUserInfo , clearUserInfo, 
        setUserInfo,setToken
    }
}, {
    persist: true
})









