<script setup>

const active = ref(0);
const route = useRoute()

watch(
  () => route.fullPath,
  (newValue) => {
    if (newValue === "/") {
      active.value = 0;
    } else if (newValue === "/bank") {
      active.value = 1;
    } else if (newValue === "/file") {
      active.value = 2;
    }else if(newValue === "/profile"){
        active.value = 3;
    }
  },
  { immediate: true }
);


</script>

<template>
  <van-tabbar v-model="active" v-show="$route.path !=='/login'">
    <van-tabbar-item replace to="/" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item replace to="/profile" icon="user-o">我的</van-tabbar-item>
  </van-tabbar> 
</template>

<style scoped>



</style>
