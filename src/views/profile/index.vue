<script setup>
import { useUserStore } from '@/stores/user';
import Base from './Base.vue'


const userStore = useUserStore()


</script>

<template>

    <div v-if="userStore.token">
        <Base/>
    </div>

    <div v-else>
        <div @click="$router.push('/login')">去登录</div>
    </div>

</template>

<style >

</style>
