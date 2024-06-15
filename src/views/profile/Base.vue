<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()
const router = useRouter()

const editUserInfo = ()=>{
    router.push('/setting')
}


const logout = () => {

    showConfirmDialog({
        title: '确认退出？',
        message:
            '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
    })
        .then(() => {
            // on confirm
            userStore.clearUserInfo()

        })
        .catch(() => {
        });

}
</script>

<template>

    <div>
        <van-nav-bar title="个人中心" />
    </div>

    <!-- 头像 -->

    <div class="flex items-center w-auto h-20 van-hairline--bottom">
        <div class="m-4">
            <van-image fit="cover" width="50" height="50" round
                :src="userStore.userInfo?.avatar" />
        </div>
        <div>
            <div>账号： {{ userStore.userInfo?.account }}</div>
            <div>昵称： {{ userStore.userInfo?.nickname || '×' }}</div>
        </div>

    </div>

    <div class="mt-2">

        <!-- 1 -->
        <div @click="editUserInfo" class="h-10 relative flex items-center w-auto mt-2 active:bg-slate-300">
            <div class="mx-2">
                <van-icon size="20" class="mt-1" name="edit" />
            </div>

            <span>编辑资料</span>
            <div class="absolute right-3 ">
                <van-icon name="arrow" />
            </div>
        </div>

        <!-- 2 -->
        <div @click="logout" class="h-10 relative flex items-center w-auto mt-2 active:bg-slate-300">
            <div class="mx-2">
                <van-icon size="20" class="mt-1" name="close" />
            </div>

            <span>退出登录</span>
            <div class="absolute right-3 ">
                <van-icon name="arrow" />
            </div>
        </div>



    </div>



</template>

<style></style>
