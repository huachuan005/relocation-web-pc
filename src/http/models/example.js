import axios from '../index' // 导入http中创建的axios实例

// 例子
/*
url,
data = {},
method = 'GET',
headers = {},
showLoading = 'false',
option = {}
*/
// qs.stringify(params)
// https://inside-pdtmp.gzstv.com/api/worklogs/?__t=1575536099747
export const getWorkLogs = () => {
  return axios({
    url: '/api/worklogs/',
    data: {
      abc: 'abc'
    },
    method: 'GET'
  })
}

// /api/token/
export const postLogin = (data) => {
  return axios({
    url: '/api/token/',
    data: data,
    method: 'POST',
    headers: {
      'name': 'hc'
    },
    option: {
      'name': 'll'
    }
  })
}
