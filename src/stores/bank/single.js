import { getSingleListAPI,  } from '@/apis/bank'

export const useSingleStore = defineStore(
  'single',
  () => {
    const singleList = ref()
    const isSubmit = ref(false)

    const getSingleListAction = async (bankId) => {
      //   获取单选题
      const res = await getSingleListAPI(bankId)
      console.log(res)
      singleList.value = res.list

    }

   
  
    return {
        singleList,
        getSingleListAction,
        isSubmit

    }
  },
  {
    persist: true,
  },
)
