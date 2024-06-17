<script setup>
import { useSingleStore } from '@/stores/bank/single';

const bankId = 1
const singleStore = useSingleStore()

onMounted(()=>{
    singleStore.getSingleListAction(bankId)
})


const show = ref(false)

const dtkClick = () => {
    show.value = !show.value
}

const checked = ref(1)


const  activeIcon = 'https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/jinggao.png'
const  activeIcon_success = 'https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/correct.png'
const  inactiveIcon =  'https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/eglass-circle.png'



</script>

<template>

    <div id="header">
        <div
            style="display: flex; justify-content: space-between; height: 60px; margin: 0px 20px; border-bottom: 1px solid rgb(229, 229, 229);">
            <div style="display: flex; align-items: center;">单选题</div>
            <div style="display: flex; align-items: center;"><span
                    style="color: rgb(28, 189, 123); font-size: 25px; font-weight: bold;">658</span>/<span>659</span>
            </div>
        </div>
    </div>


    <div v-for="(item,index) in singleStore.singleList" :key="item.id" id="content" class="content index-cell" style="height: 542px;">

        <h3 class="text-center p-4 font-bold text-xl">高压电工作业</h3>

        <div class="" style="padding: 0px 10px 10px;">
            【单选】{{index+1}}，<span>{{item.name}}</span></div>

        <!-- 选项 -->


        <van-radio-group v-model="item.your" checked-color="rgb(9,187,7)">

            <van-radio v-for="(option, i) in item.options" class="m-2 mt-4" :name="option.value">

                <template #icon="props">
                    <img class="w-5 h-5" :src="props.checked ? (option.value===option.answer ? activeIcon_success: activeIcon) : inactiveIcon" />
                </template>
                <p>{{option.value}}、{{ option.label }}</p>
            </van-radio>
 
        </van-radio-group>





        <div style="text-align: center;">
            <button class="testbtn">上一题</button>
            <button class="testbtn" style="background-color: rgb(28, 189, 123); color: rgb(255, 255, 255);">下一题</button>
        </div>

        <div style="height: 10px; background-color: rgb(245, 247, 246);"></div>

        <div style="margin: 10px 0px 10px 10px;">
            <p style="font-weight: bold; padding-bottom: 10px;">正确答案：<span style="color: rgb(28, 189, 123);">{{ item.answer }}</span>
            </p>
            <!-- 解析 -->
            <div>
                <p style="font-weight: bold; color: rgb(28, 189, 123);">I&nbsp;&nbsp;解析</p>
                <div>{{ item.source }}</div>
                <div style="text-align: right; padding: 20px;"><button
                        style="height: 30px; width: 70px; font-size: 15px; background-color: rgb(28, 189, 123); border: 0px; color: rgb(255, 255, 255); border-radius: 5px;">交流互动</button>
                </div>
            </div>
        </div>
    </div>


    <van-tabbar safe-area-inset-bottom>
        <van-tabbar-item @click="dtkClick()" icon="records-o">答题卡</van-tabbar-item>
        <van-tabbar-item icon="replay">重做</van-tabbar-item>
        <van-tabbar-item icon="friends-o">改题</van-tabbar-item>
        <van-tabbar-item icon="setting-o">显示答案</van-tabbar-item>
    </van-tabbar>

    <van-action-sheet v-model:show="show" title="答题卡">
        <div class="h-svh  flex flex-wrap">
            <template v-for="(item, index) in singleStore?.singleList" :key="index">
                <div class="flex items-center justify-center border-gray-100 border-2 w-1/3  h-16 bg-white ">{{ index +
                    1 }}</div>
            </template>

        </div>
    </van-action-sheet>
</template>


<style scoped lang="less">
.index-cell {
    font-size: 16px;
    margin-top: 0px;
    overflow-y: scroll;

    .testbtn {
        height: 35px;
        width: 100px;
        margin: 20px;
        background-color: #FFF;
        border: 1px solid #1cbd7b;
        color: #1cbd7b;
        border-radius: 5px;
        font-size: 14px;
    }
}
</style>