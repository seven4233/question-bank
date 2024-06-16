import hlRequest from "@/utils/http";


// 获取题库列表
export const getBankListAPI = async ()=>{
    return hlRequest.get("/qb/bank", {
  
    })
}

// 获取分类信息
export function getSortInfoAPI(bankId) {
  return hlRequest.get(`/qb/${bankId}/sort` )
}

// 获取单选题列表
export function getSingleListAPI(bankId) {
  return hlRequest({ method: 'GET', url: `/qb/single` , params:{bankId}})
}

// 提交題目
export function submitQuestionAPI(params) {
    return hlRequest({ url: `/qb/finish`, method: 'POST', data: params })
}

// 获取已做题

export function queryDoneQuestionAPI() {
    return hlRequest({ url: `/qb/done`, method: 'GET' })
}
  