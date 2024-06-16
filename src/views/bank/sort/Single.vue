<script setup>
import { useSingleStore } from '@/stores/bank/single';
import {submitQuestionAPI} from '@/apis/bank'

const singleStore = useSingleStore()

onMounted(() => {
    // if(singleStore.singleList.length === 0){
    singleStore.getSingleListAction()
    // }

})


const currentCardIndex = ref(0)
const activeOption = ref()

const showStatus = ref('')

const itemClick =async (option, index) => {

    singleStore.selectedAction(option)


  let res =  await submitQuestionAPI({
        sort:'单选题',
        bankId: 1,
        question_id: option.question_id,
        option: option.label
    })

    console.log(res);
}

const nextClick = () => {
    currentCardIndex.value++
}

const show = ref(false)

const dtkClick = () => {
    show.value = !show.value
}

</script>

<template>
    <van-nav-bar title="单选题" />



    <div id="single" class="single">
        <!-- 题目区域 -->
        <div v-if="singleStore.singleList?.length">
            <template v-for="(item, index) in singleStore.singleList" :key="index">
                <!-- 一题 -->
                <div v-if="index === currentCardIndex" class="item " :id="index + ''">

                    <div class="text-xl  mt-2">
                        <span>【{{ index + 1 }}】{{ item.content }}</span>
                    </div>
                    <!-- 选项区 -->
                    <div class="question-select">
                        <div class="option-item van-haptics-feedback"
                            :class="{ 'option-item-selected': option.selected === true }"
                            v-for="(option, i) in item.options" :key="option.value" @click="itemClick(option, i)">
                            <div class="label ">{{ option.label }}</div>
                            <div class="content">{{ option.option_content }}</div>
                        </div>
                    </div>
                </div>
            </template>

            <!-- 操作区(上下题切换，提交 -->
            <div class="mt-10 text-center">
                <van-space size="1rem">
                    <van-button :disabled="currentCardIndex <= 0" type="primary"
                        @click="currentCardIndex--">上一题</van-button>
                    <van-button v-if="currentCardIndex < singleStore.singleList?.length" type="primary"
                        @click="nextClick()">下一题</van-button>
                    <van-button v-else type="primary" @click="handleSubmit">交卷</van-button>
                </van-space>
            </div>
        </div>

        <!-- 空状态 -->
        <div v-else>
            <van-empty description="已经没了" />
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

<style lang="less" scoped>
.single {

    font-family: '黑体';

    .question-select {
        font-size: 18px;
        margin: 5px 0;

        .option-item {
            display: flex;
            height: 50px;
            align-items: center;
            margin-top: 10px;
            padding-left: 15px;
            border: 1px solid transparent;
            border-radius: 1px;


            &:first-child {
                margin-top: 10px;
            }

            .label {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                margin-right: 10px;
                border: 1px solid;
                border-radius: 50%;
                border-color: rgb(221 221 221);
            }

            .content {
                display: flex;
                flex: 1 1 0%;
                color: rgb(51 51 51);
            }
        }

        .option-item-selected {
            border: 1px solid rgb(148 227 201);
            background-color: rgb(238 250 247);

            .label {
                border-color: rgb(50 202 153);
                background-color: rgb(50 202 153);
                color: rgb(255 255 255);
            }
        }

        .option-item-error {
            border-color: rgb(255 187 164);
            background-color: rgb(255 246 243);

            .label {
                border-color: rgb(213, 59, 41);
                background-color: rgb(238, 10, 10);
                color: rgb(255 255 255);
            }
        }
    }


    // 答题卡颜色

    .correct {
        background-color: green;
    }

    .error {
        background-color: red;
    }
}
</style>