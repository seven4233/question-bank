import axios from "axios";
import { useUserStore } from "@/stores/user";
import { showFailToast, showToast } from 'vant';
import router from "@/router";

const hlRequest = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 300000
})

//请求拦截器
hlRequest.interceptors.request.use(config => {
    
    const userStore = useUserStore()
    
    if(userStore.token){
        config.headers['Authorization'] = userStore.token
    }
    
    return config
}, err=> Promise.reject(err))


// 响应拦截器
hlRequest.interceptors.response.use(res =>{
    return res.data
}, (err) =>Promise.reject(err))


export default hlRequest