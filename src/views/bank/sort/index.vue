<script setup>
import { useSingleStore } from '@/stores/bank/single';


const bank_id = 1


onMounted(()=>{
    singleStore.getSingleListAction(bank_id)
})
const router = useRouter()
const singleStore = useSingleStore()

const itemClick = (item)=>{
    router.push('/single')
}

</script>

<template>
    <van-nav-bar title="全部题型" />

    <div class="sort_list mt-4">

        <div class="van-haptics-feedback sort_item" @click="itemClick()">
            <div class="sort_name">
                <div class="title">{{ '单选题' }}
                </div>
            </div>
            <div class="sort_num">
                已做
                <span>{{ singleStore.doneCount }}</span>
                /{{ singleStore.totalCount }}题
            </div>
        </div>


        <div class=" van-haptics-feedback sort_item" @click="itemClick(item)">
            <div class="sort_name">
                <div class="title">{{ '判断题' }}
                </div>
            </div>
            <div class="sort_num">
                已做
                <span>{{ 22 }}</span>
                /{{ 1111 }}题
            </div>
        </div>

     
    </div>

</template>

<style lang="less" scoped>
.sort_list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .sort_item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
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
            font-size: 20px;


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