/**
 * hc 2019-12-05.
 */
import axios from 'axios'
import {Loading, Message} from 'element-ui'
// import {
//   urlPrefix
// } from './url-prefix'

/**
 * start: 封装http interceptor loading
 */
let loadingCount = 0
let globalLoading = null

// 打开
const startLoading = () => {
  globalLoading = Loading.service({
    fullscreen: true,
    background: 'rgba(0,0,0,0.45)'
  })
}

const endLoading = () => {
  // 以服务的方式调用的 Loading 需要异步关闭
  setTimeout(() => {
    globalLoading.close()
  }, 0)
}

const showGlobalLoading = () => {
  if (loadingCount === 0) {
    startLoading()
  }
  loadingCount++
}

const hideGlobalLoading = () => {
  if (loadingCount <= 0) {
    return
  }
  loadingCount--
  if (loadingCount === 0) {
    endLoading()
  }
}

// 错误提示信息
const tips = {
  1: '抱歉，出现了一个错误',
  401: '未登录，未授权',
  3000: '不存在',
  5000: '抱歉，请检查网络'
}

// 显示错误提示
const _showError = (errorCode) => {
  if (!errorCode) {
    errorCode = 1
  }
  const tip = tips[errorCode]
  // 请求成功但是是其他状态码
  // tip?tip:tips[1]
  Message({
    showClose: true,
    message: tip ? tip : tips[1],
    type: 'error'
  })
}

// 创建axios实例
const instance = axios.create({
  timeout: 10000,
  headers: {
    'content-type': 'application/json'
  }
})

// 请求拦截器
instance.interceptors.request.use((config) => {
  console.log(config)
  // 显示loading
  if (config.showLoading) {
    showGlobalLoading()
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
instance.interceptors.response.use((response) => {
  console.log(response)
  // 关闭loading
  if (response.config.showLoading) {
    hideGlobalLoading()
  }
  let resOk = response.status.toString().indexOf(2)
  if (resOk !== -1 || response.data.code === 0) {
    return response
  }
}, (error) => {
  const {
    response,
    config
  } = error
  // 关闭loading
  if (config.showLoading) {
    hideGlobalLoading()
  }
  if (response) {
    _showError(response.status)
  } else {
    _showError(5000) // 处理断网的情况
  }
  return Promise.reject(response)
})

export default instance
