<script setup>

</script>

<template>
    <van-nav-bar title="选择项目" left-text="返回" left-arrow @click-left="$router.back()" />


    <!-- <div class="sort_list mt-4">
        <div class="van-haptics-feedback sort_item" @click="itemClick(item)">
            <div class="sort_name">
                <div class="title">{{ '顺序练习' }}
                </div>
            </div>
            <div class="sort_num">
                已做
                <span>{{ 22 }}</span>
                /{{ 1111 }}题
            </div>
        </div>


        <div class=" van-haptics-feedback sort_item" @click="itemClick(item)">
            <div class="sort_name">
                <div class="title">{{ '单选题' }}
                </div>
            </div>
            <div class="sort_num">
                已做
                <span>{{ 22 }}</span>
                /{{ 1111 }}题
            </div>
        </div>

        <div class="sort_item" @click="itemClick(item)">
            <div class="sort_name">
                <div class="title">{{ '单选题' }}
                </div>
            </div>
            <div class="sort_num">
                已做
                <span>{{ 22 }}</span>
                /{{ 1111 }}题
            </div>
        </div>
    </div> -->

    <!-- 功能 上 -->
    <div class="mt-8  flex justify-around items-center">

        <div class="w-16 flex items-center flex-col van-haptics-feedback ">
            <img class="w-12" src="/src/assets/img/test2.png" alt="">
            <span>顺序练习</span>
        </div>

        <div @click="$router.push('/sort')" class="w-16 flex items-center flex-col van-haptics-feedback ">
            <img class="w-12" src="/src/assets/img/test.png" alt="">
            <span>专项练习</span>
        </div>

        <div class="w-16 flex items-center flex-col van-haptics-feedback ">
            <img class="w-12" src="/src/assets/img/search.png" alt="">
            <span>题库搜索</span>
        </div>

    
    </div>

    <!-- 模拟 -->
    <div class=" my-10 van-haptics-feedback flex items-center justify-center mx-auto    h-36 w-36 bg-contain bg-no-repeat"
        style="background-image: url(/src/assets/img/kaoshi.png);">
        <p class="text-white text-xl">模拟考试</p>
    </div>

    <!-- 功能 下 -->
    <div class="mt-5  flex justify-around items-center">

        <div class="w-16 flex items-center flex-col van-haptics-feedback ">
            <img class="w-12" src="/src/assets/img/cuoti.png" alt="">
            <span>错题本</span>
        </div>

        <div class="w-16 flex items-center flex-col van-haptics-feedback ">
            <img class="w-12" src="/src/assets/img/kaoshilog.png" alt="">
            <span>考试记录</span>
        </div>

        <div class="w-16 flex items-center flex-col van-haptics-feedback ">
            <img class="w-12" src="/src/assets/img/shoucang.png" alt="">
            <span>我的收藏</span>
        </div>
    </div>


</template>

<style lang="less" scoped>
.sort_list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .sort_item {
        width: 40%;
        height: 80px;
        margin-bottom: 10px;
        padding: 12px 16px 14px;
        transition: all 0.2s ease;
        border-width: 1px;
        border-radius: 12px;
        border-color: transparent;
        background-color: rgb(248 248 248 / 100%);
        color: rgb(51 51 51 / 100%);
        font-size: 14px;
        line-height: 21px;
        cursor: pointer;


        .sort_name {
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: 8px;


            .title {
                max-width: 154px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

                .new {
                    position: absolute;
                    top: -3px;
                    left: 5px;
                    padding: 0 2px;
                    border: 1px solid red;
                    border-radius: 10px;
                    color: red;
                    font-size: 12px;
                }
            }
        }

        .sort_num {
            color: rgb(187 187 187 / 100%);

            span {
                color: rgb(50 202 153 / 100%);
            }

        }
    }
}
</style>