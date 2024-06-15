import hlRequest from "@/utils/http";



// login
export async function loginAPI(loginParam) {
      return hlRequest.post('/user/login', loginParam )

}

// 更新用户信息
export async function updateUserInfoAPI(userToUpdate) {
      return hlRequest.put("/user/update", userToUpdate)
}
    

//获取用户信息
export async function getUserInfoAPI() {
  return hlRequest.get('/user/detail')
}


// 上传头像
export async function updateAvatarAPI(file) {
  return hlRequest.post('/user/avatar', file)
}

// // 添加搜索历史
// export async function addSearchHistoryAPI(keyword:string) {
//   return hlRequest.post('/user/history', {keyword})
// }

// // 获取搜索历史
// export async function getSearchHistoryAPI() {
//   return hlRequest.get('/user/history')
// }

// // 删除搜索历史
// export async function deleteSearchHistoryAPI(id: number) {
//   return hlRequest.delete('/user/history?id=' + id)
// }

// // 清空搜索历史
// export async function clearSearchHistoryAPI() {
//   return hlRequest.delete('/user/history/all' )
// }
// // 添加收藏
// export async function addFavorAPI(body:any) {
//   return hlRequest.post('/user/favor', body)
// }

// // 获取收藏列表
// export async function getFavorListAPI() {
//   return hlRequest.get('/user/favor',)
// }