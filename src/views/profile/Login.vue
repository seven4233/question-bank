<script setup>
import { loginAPI } from '@/apis/user';
import { useUserStore } from '@/stores/user';
import { showLoadingToast, showSuccessToast } from 'vant';


const userStore = useUserStore()

const router = useRouter()

const username = ref('admin');
const password = ref('admin');
const onSubmit = async({ account, password }) => {

    console.log(account, password);

    let loginRes =  await loginAPI({account, password})
    console.log(loginRes);

    if (loginRes.code!==0) {
        // 登录失败
        showFailToast(loginRes.message);

        return
    }

    userStore.setToken(loginRes.token)
    userStore.setUserInfo(loginRes.result)

    showLoadingToast({
        duration: 1000, message:loginRes.message, forbidClick: true, onClose: () => {

            // 保存登录凭证


            router.replace('/profile')
        }
    })



};


const onClickLeft = () => {
    router.back()
}

</script>

<template>

    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="onClickLeft" />



    <van-form @submit="onSubmit">
        <van-cell-group>
            <van-field clearable v-model="username" name="account" label="账号" placeholder="用户名" label-width="50" />
            <van-field clearable v-model="password" type="password" name="password" label="密码" placeholder="密码"
                label-width="50" />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>

    <van-divider />

    <div class="text-xs text-center">没有账号？请联系管理员</div>
    <div class="text-center mt-1">19305445920</div>
</template>

<style></style>
