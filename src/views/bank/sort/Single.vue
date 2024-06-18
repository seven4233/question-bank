<script setup>
import { redoAPI } from '@/apis/bank';
import { useSingleStore } from '@/stores/bank/single';
import { showFailToast } from 'vant';

const bankId = 1
const singleStore = useSingleStore()

onMounted(() => {
    singleStore.getSingleListAction(bankId)
})







const currentQuestion = ref(singleStore.lastPosition + 1)

const preClick = () => {
    if (currentQuestion.value > 1) {
        currentQuestion.value--
    } else {
        showFailToast({ message: '没有上一题了' })
    }
}

const nextClick = () => {
    if (currentQuestion.value < singleStore.singleList?.length) {
        currentQuestion.value++
    } else {
        showFailToast({ message: '没有下一题了' })

    }
}




// 点击选项
const changSelect = (your_answer, item) => {

    console.log(your_answer, item);
    const objToSub = {
        question_num: item.question_num,
        bank_id: item.bank_id,
        question_sort: '单选题',
        your_answer: your_answer

    }
    singleStore.addOneDoneQuestion(objToSub)
    // 发送请求

}


const activeIcon = 'https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/jinggao.png'
const activeIcon_success = 'https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/correct.png'
const inactiveIcon = 'https://hualin-1314589919.cos.ap-beijing.myqcloud.com/static/eglass-circle.png'


const isShowAnswerCard = ref(false)
const dtkClick = () => {
    isShowAnswerCard.value = !isShowAnswerCard.value
}
const answerCardItemClick = (index) => {
    currentQuestion.value = index

    isShowAnswerCard.value = false

}

// 重做
const reDoClick = () => {

    showConfirmDialog({
        title: '确定重做？',
        message:
            '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
    })
        .then(async () => {
            // on confirm
            const params = { bank_id: bankId, question_sort: '单选题' }
            singleStore.redoAction(params)

        })
        .catch(() => {
            // on cancel
        });

}



const showTrue = ref(true)
</script>

<template>

    <div id="header">
        <div
            style="display: flex; justify-content: space-between; height: 60px; margin: 0px 20px; border-bottom: 1px solid rgb(229, 229, 229);">
            <div style="display: flex; align-items: center;">单选题</div>
            <div style="display: flex; align-items: center;"><span
                    style="color: rgb(28, 189, 123); font-size: 25px; font-weight: bold;">{{ singleStore.doneCount
                    }}</span>/<span>{{ singleStore.totalCount }}</span>
            </div>
        </div>
    </div>

    <!-- 一题 -->

    <div v-show="currentQuestion === index + 1" v-for="(item, index) in singleStore.singleList" :key="item.id"
        id="content" class="content index-cell" style="height: 542px;">

        <h3 class="text-center p-4 font-bold text-xl">高压电工作业</h3>

        <div class="" style="padding: 0px 10px 10px;">
            【单选】{{ index + 1 }}，<span>{{ item.name }}</span></div>

        <!-- 选项 -->
        <van-radio-group v-model="item.your" checked-color="rgb(9,187,7)">

            <van-radio @click="changSelect(option.value, item)" v-for="(option, i) in item.options" class="m-2 mt-4"
                :name="option.value">
                <template #icon="props">
                    <img class="w-5 h-5"
                        :src="props.checked ? (option.value === option.answer ? activeIcon_success : activeIcon) : inactiveIcon" />
                </template>
                <p>{{ option.value }}、{{ option.label }}</p>
            </van-radio>
        </van-radio-group>


        <!-- 操作按钮 -->
        <div style="text-align: center;">
            <button @click="preClick()" class="testbtn">上一题</button>
            <button @click="nextClick()" class="testbtn"
                style="background-color: rgb(28, 189, 123); color: rgb(255, 255, 255);">下一题</button>
        </div>

        <div style="height: 10px; background-color: rgb(245, 247, 246);"></div>

        <!-- 答案区 -->
        <div v-show="item.your" style="margin: 10px 0px 10px 10px;">
            <p style="font-weight: bold; padding-bottom: 10px;">正确答案：
                <span style="color: rgb(28, 189, 123);">{{
                    item.answer
                }}</span>
            </p>
            <!-- 解析 -->
            <!-- <div>
                <p style="font-weight: bold; color: rgb(28, 189, 123);">I&nbsp;&nbsp;解析</p>
                <div>{{ item.source }}</div>

            </div> -->
        </div>

        <!-- 评论区 -->
        <div v-show="item.your">


            <div class="comment-list px-2 ">

                <div class="comment-item mt-3 w-3/4" v-for="comment in item.comments" :key="comment.id">
                    <div class="flex items-center ">
                        <van-image fit="cover" width="22" height="22" round :src="comment.userInfo?.avatar" />
                        <p class="text-xs ml-1 flex justify-between">
                        <div style="color: #FB7299;">{{ comment.userInfo?.nickname || comment.userInfo?.account }}
                        </div>
                        <div class="text-xs ml-1  ">{{ comment.createdAt }}</div>
                        </p>
                    </div>
                    <div class="pl-6 text-xs"> {{ comment.content }}</div>


                </div>

            </div>

        </div>


    </div>


    <van-tabbar safe-area-inset-bottom active-color="#1CBD7B" inactive-color="#1CBD7B">
        <van-tabbar-item @click="dtkClick()" icon="records-o">答题卡</van-tabbar-item>
        <van-tabbar-item @click="reDoClick()" icon="replay">重做</van-tabbar-item>
        <van-tabbar-item icon="friends-o">改题</van-tabbar-item>
        <van-tabbar-item icon="setting-o">显示答案</van-tabbar-item>
    </van-tabbar>


    <van-action-sheet v-model:show="isShowAnswerCard" title="答题卡">
        <div class="flex flex-wrap">
            <template v-for="(s, index) in singleStore?.singleList" :key="index">
                <div @click="answerCardItemClick(index + 1)"
                    class="van-haptics-feedback flex items-center justify-center border-gray-100 border-2 w-1/3  h-16 bg-white"
                    :class="{ 'isDone': s.your, 'isError': s.your && s.your !== s.answer }">{{ index +
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

.isDone {
    background-color: #1cbd7b !important;
}

.isError {
    background-color: red !important;
}
</style>