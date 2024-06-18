import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { addOneDoneQuestionAPI, getSingleListAPI, submitQuestionAPI , redoAPI} from '@/apis/bank'

export const useSingleStore = defineStore(
  'single',
  () => {
    const singleList = ref([])
    const isSubmit = ref(false)
    const doneCount = ref(0)
    const totalCount = ref(0)
    const lastPosition = ref(0)

    const getSingleListAction = async (bankId) => {
      //   获取单选题
      const res = await getSingleListAPI(bankId)

      console.log(res)
      singleList.value = res.list
      doneCount.value = res.doneCount
      totalCount.value = res.totalCount


      for(let i = singleList.value.length - 1; i >0; i--){
        if(singleList.value[i].your !== ''){
           lastPosition.value = i
           return
        }else{
          lastPosition.value = 0
        }
      }
    }

    const redoAction = async(params)=>{
      const res = await redoAPI(params)
       await getSingleListAction(params.bank_id)
       lastPosition.value = 0
       location.reload()
    }




    // 根据 选择情况 决定选项的状态
    const selectedAction = (selectedOption) => {
      const { question_num, value } = selectedOption
      // 找到目标题目
      const targetQuestion = singleList.value?.find(
        (question) => question.question_num === question_num,
      )

      // 单选题 先清空该题已选
      targetQuestion.options.map((item) => {
        if (item.value !== value) {
          item.selected = false
        }
        return item
      })

      // 找到目标选项
      const target = targetQuestion?.options.find((item) => item.value === value)
      // 更新选择状态
      target.selected = !target.selected

      // 更新选项列表
      const updatedOptions = targetQuestion?.options.map((item) =>
        item.value === value ? target : item,
      )
      if (targetQuestion) {
        targetQuestion.options = updatedOptions
        targetQuestion.your = value
      }
    }

    // 已选择的选项
    const selectedValue = computed(() => {
      const selectedList = []
      singleList.value?.forEach((item) => {
        const selectedItem = item.options.find((i) => i.selected === true)
        if (selectedItem) {
          selectedList.push(selectedItem)
        }
      })
      return selectedList
    })

    // 已做题目的索引
    const doneArr = computed(() => {
      let doneArr = []
      const arr = selectedValue.value.filter((item) => item.selected)
      doneArr = arr.map((i) => i.question_index)
      return doneArr
    })
    // 已做正确题目的索引
    const doneCorrectArr = computed(() => {
      const arr = correctList.value?.map((item) => item.question_index)
      return arr
    })

    // 是否全部选完
    const isFinished = computed(() => selectedValue.value.length === singleList.value?.length)

    // 还剩的题
    const leftQuestion = computed(() => singleList.value?.length - selectedValue.value.length)

    // 答对题数
    const correctCount = computed(
      () => singleList.value?.filter((item) => item.answer === item.your).length,
    )
    // 答对题目列表
    const correctList = computed(() =>
      singleList.value?.filter((item) => item.answer === item.your),
    )


    /**
 * 添加一题
 */
    const addOneDoneQuestion = async (params) => {
      const res = await addOneDoneQuestionAPI(params)
      console.log(res);

      // 重新获取 进度
      const r = await getSingleListAction(params.bank_id)

    }


    /**
     * 添加完成題目
     */
    const addFinishedQuestion = async (params) => {
      const res = await submitQuestionAPI(params)
      // 重新获取 进度
      const r = await getSingleListAPI(params.bankId)
      doneCount.value = r.doneCount
      console.log(res)
    }
    return {
      redoAction,
      addFinishedQuestion,
      correctList,
      doneCount,
      singleList,
      doneArr,
      selectedValue,
      getSingleListAction,
      selectedAction,
      doneCorrectArr,
      isFinished,
      leftQuestion,
      isSubmit,
      totalCount,
      addOneDoneQuestion,
      lastPosition
    }
  },
  {
    persist: true,
  },
)
