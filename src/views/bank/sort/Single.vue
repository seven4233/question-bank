<script setup>
import { useSingleStore } from '@/stores/bank/single';


const singleStore = useSingleStore()
const itemClick = (item)=>{

    
}

</script>

<template>
    <van-nav-bar title="单选题" />


    
  <div id="single" class="single">
    <div v-show="singleStore.singleList?.length" class="header">
      <div class="header-content">
        <!-- 答题卡圈圈 -->
       

        <!-- 提交答案 -->
        <div class="header-submitter">
          <div class="ab" @click="handleSubmit">
            <div class="cd">交卷</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 题目区域 -->
    <div v-if="singleStore.singleList?.length" class="page-wrapper">
      <template v-for="(item, index) in singleStore.singleList" :key="index">
        <!-- 一题 -->
        <div v-show="index === currentCardIndex" class="item" :id="index + ''">
          <div class="title">
            <div class="question-desc-header">
              <div class="commonClass singleClass">单选题</div>
              <div class="rightAction">
                <div class="collection">
                  <!-- <t-check-tag v-model="item.isFavored" :on-change="(e) => onChange(e, item)" variant="dark" :content="['已收藏', '收藏']">
                    <template #icon>
                      <Icon v-show="!isCollect" name="heart" />
                    </template>
                  </t-check-tag> -->
                </div>
              </div>
            </div>
            <div class="question-info">
              <div class="question-num">
                <span>{{ index + 1 }}</span>
              </div>
              <div class="question-name">
                <span>【{{ item.question_num }}】{{ item.name }}</span>
              </div>
            </div>
          </div>
          <!-- 选项区 -->
          <div class="question-select">
            <div
              class="option-item"
              :class="{ 'option-item-selected': i.selected === true }"
              v-for="(i, index) in item.options"
              :key="i.value"
              @click="itemClick(i, index)"
            >
              <div class="label">{{ i.value }}</div>
              <div class="content">{{ i.label }}</div>
            </div>
          </div>
        </div>
      </template>

      <!-- 操作区(上下题切换，提交 -->
      <div class="test-submit">
        <van-space size="1rem">
          <van-button
            :disabled="currentCardIndex <= 0"
            type="primary"
            @click="currentCardIndex--"
            >上一题</van-button
          >
          <van-button
            v-if="currentCardIndex < 4"
            type="primary"
            @click="currentCardIndex++"
            >下一题</van-button
          >
          <van-button v-else type="primary" @click="handleSubmit"
            >交卷</van-button
          >
        </van-space>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-else>
      <van-empty description="已经没了" />
    </div>
  </div>


</template>

<style lang="less" scoped>


.single {
  .header {
    position: sticky;
    z-index: 999;
    top: 0;
    height: 0.5rem;
    background-color: rgb(255 255 255);
    box-shadow: 0 0.1rem 0.1rem 0 rgb(0 0 0 / 2%),
      0 0.1rem 0.1rem 0 rgb(0 0 0 / 4%);

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.1rem 0.1rem 0.2rem 0.2rem;

      // 答题卡圈圈
      .answer_card_list {
        display: flex;
        align-items: center;

        .answer_card_item {
          position: relative;

          .card_num {
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
            width: 0.3rem;
            height: 0.3rem;
            border-width: 0.01rem;
            border-radius: 100%;
            font-weight: 400;
            margin: 0 0.05rem;
          }

          .empty {
            border: 0.01rem solid rgb(240 240 240 / 100%);
            color: rgb(153 153 153 / 100%);
          }

          .running {
            border: 0.01rem solid rgb(240 240 240) !important;
            border-color: rgb(50 202 153 / 100%) !important;
          }

          .done {
            border: 0.01rem solid rgb(148 227 201 / 100%);
            background-color: rgb(238 250 247 / 100%);
            color: rgb(50 202 153 / 100%);
          }

          .error {
            border: 0.01rem solid rgb(255 154 118 / 100%);
            background-color: rgb(255 246 243 / 100%);
            color: rgb(255 86 27 / 100%);
          }
        }
      }

      .header-submitter {
        display: flex;
        align-items: center;
        color: rgb(153 153 153);
        font-weight: 500;

        .ab {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 0.3rem;
          width: 0.6rem;
          margin-right: 0.1rem;
          border: 0.01rem solid rgb(50 202 153 / 100%);
          border-radius: 0.1rem;
          color: rgb(50 202 153 / 100%);

          .cd {
            font-weight: 600;
            text-align: center;
          }
        }
      }
    }
  }

  .page-wrapper {
    position: relative;
    padding: 0.1rem 0.2rem;
    background: #fff;

    .item {
      padding: 0.1rem 0;

      // 题目
      .title {
        font-size: 0.2rem;
        margin-bottom: 0.2rem;

        .question-desc-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.1rem;

          .commonClass {
            padding: 0.02rem 0.05rem;
            border-radius: 0.1rem;
            font-weight: 400;
          }

          .singleClass {
            background-color: rgb(227 243 255);
            color: rgb(0 117 255);
          }

          .rightAction {
            .collectIcon {
              color: rgb(153 153 153);
            }
          }
        }

        .question-info {
          display: flex;
          color: rgb(51 51 51);
          font-weight: 600;

          .question-num {
            width: 0.3rem;
            height: 0.3rem;
            line-height: 0.3rem;
            border: 0.01rem solid #32ca99;
            border-radius: 50%;
            text-align: center;
          }

          .question-name {
            flex: 1 1 0%;
            word-wrap: break-word;
            word-break: break-all;
          }
        }
      }

      // 选项区
      .question-select {
        font-size: 0.18rem;

        .option-item {
          display: flex;
          margin-top: 0.05rem;
          padding: 0.1rem 0.2rem;
          border: 0.01rem solid transparent;
          border-radius: 0.1rem;

          &:first-child {
            margin-top: 0;
          }

          .label {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 0.3rem;
            height: 0.3rem;
            margin-right: 0.1rem;
            border: 0.01rem solid;
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
          border: 0.01rem solid rgb(148 227 201);
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
        }
      }
    }

    .operation {
      position: relative;
      width: 400rpx;
      margin-top: 50rpx;
      margin-left: 50%;
      transform: translateX(-50%);

      .submit {
        position: absolute;
        right: 0;
      }
    }
  }

  .test-submit {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1rem;
    z-index: 999;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>