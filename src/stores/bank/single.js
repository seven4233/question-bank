import { queryDoneQuestionAPI } from '@/apis/bank'
import { getSingleListAPI,  } from '@/apis/bank'

export const useSingleStore = defineStore(
  'single',
  () => {
    const singleList = ref([])
    const isSubmit = ref(false)


      //   获取单选题
    const getSingleListAction = async (bankId) => {
      const res = await getSingleListAPI(bankId)
      singleList.value = res


    //   获取已做题
      const doneList =  await queryDoneQuestionAPI();

      for(let i = 0; i < doneList.length; i++){
        
      }

      doneList.forEach(item=>{
        let tar =  singleList.value.find(single=>single.id === item.question_id)
        let tar_o =  tar?.options.find(o=>o.label === item.option)
        if(tar_o){
            tar_o.selected = true
        }
        if(tar){
            tar.options = tar_o
        }
      })

      console.log(doneList)

    }

    // 根据 选择情况 决定选项的状态
    const selectedAction = (selectedOption) => {

        const { question_id, label } = selectedOption
        // 找到目标题目
        const targetQuestion = singleList.value?.find(
          (single) => single.id === question_id,
        )
  
        // 单选题 先清空该题已选
         targetQuestion.options.map((option) => {
          if (option.label !== label) {
            option.selected = false
          }
          return option
        })
  
        // 找到目标选项
        const target = targetQuestion?.options.find((option) => option.label === label)
        // 更新选择状态
        target.selected = !target.selected
  
 
      }
  
  
    return {
        singleList,
        getSingleListAction,
        isSubmit,
        selectedAction

    }
  },
  {
    persist: true,
  },
)
