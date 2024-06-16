<script setup>


</script>

<template>
      <van-nav-bar title="首页" />

      <h2 class="text-2xl m-2">题库</h2>

      <div @click="$router.push('/bank')" class="mykemu">
            <div class="mktitle">高压电工作业</div>
            <div class="mkcard">
                  <!-- <div style="font-size: 20px;">卡号：11460505</div>
                  <div>
                        <div>激&nbsp;&nbsp;&nbsp;&nbsp;活:2024-06-01</div>
                        <div>有效期:2025-05-27</div>
                  </div> -->
            </div>
            <div class="mktest">
                  <div style="text-align: center;">
                        <div>
                              刷题数量
                        </div>
                        <div style="font-size: 26px;">0/1327</div>
                  </div>
                  <div style="text-align: center;">
                        <div>
                              最高分 / 考试次数
                        </div>
                        <div style="font-size: 26px;">98 / 18</div>
                  </div>
            </div>
      </div>

</template>

<style scoped lang="less">
.mykemu {
      color: #FFFFFF;
      border-radius: 14px;
      margin: 0px 5px 15px 5px;
      padding: 5px;
      background: #0a57cd;
      //     background: -webkit-linear-gradient(to right, #0a57cd, #0cc8ca);
      background: linear-gradient(to right, #0a57cd, #0cc8ca);
      font-size: 14px;
      box-shadow: 3px 4px 5px #888888;

      .mktitle {
            text-align: center;
            font-size: 19px;
      }

      .mkcard {
            display: flex;
            align-items: center;
            justify-content: space-around;
      }

      .mktest {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding-top: 13px;
      }
}
</style>