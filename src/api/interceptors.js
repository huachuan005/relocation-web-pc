/**
 * Created by luoxie on 2019-07-17.
 */
import axios from 'axios'
import { Loading, Message } from 'element-ui'
import { urlPrefix } from './url-prefix'

/**
 * 封装http异常
 * @param {object} resp - axios抛出的对象
 * @return {{messageCode: string, message: string}}
 */
function wrapperHttpException (resp) {
  return {
    message: '服务繁忙，请稍后再试',
    messageCode: 'NETWORK_FAILED',
    status: resp.status,
    statusText: resp.statusText
  }
}
/**
 * start: 封装http interceptor loading
 */
let needLoadingRequestCount = 0
let globalLoading = null
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
  console.log('start needLoadingRequestCount:' + needLoadingRequestCount)
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

const tryHideGlobalLoading = () => {
  console.log('end needLoadingRequestCount:' + needLoadingRequestCount)
  if (needLoadingRequestCount <= 0) {
    return
  }
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
/**
 * end: 封装http interceptor loading
 */

/**
 * @description 根据messageCode统一提示信息
 * @param {object} data
 * @return {object}
 */
function normalizeErrorMessage (data) {
  // 可以格式化错误信息
  return data
}

/**
 * @description 根据messageCode统一提示信息
 * @param {object} data
 * @return {object}
 */
function normalizeRequestUrl (url) {
  // 可以格式化错误信息
  return url
}

// 发送请求之前，对参数操作，比如修改header
axios.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers
  }
  config.url = config.url.indexOf('http') !== -1 ? config.url : urlPrefix[config.serve] + config.url
  // 显示loading
  if (config.showLoading) {
    showGlobalLoading()
  }
  return config
})

const jsonLikeReg = /^application\/json/i
const appLogin = () => {
  Message({
    showClose: true,
    message: '用户信息失效，请重新登录',
    type: 'error'
  })
}
// response interceptor
axios.interceptors.response.use((response) => {
  const { config, data } = response
  const contentType = response.headers['content-type'] || ''
  // 尝试关闭loading
  if (config.showLoading) {
    tryHideGlobalLoading()
  }
  // 如果是json
  if (jsonLikeReg.test(contentType)) {
    if (data.status === 0 || data.status === 200) {
      if (config.keepOriginResponse) {
        return data
      } else {
        return Promise.resolve(data)
      }
    } else {
      Message({
        showClose: true,
        message: data.message || '服务器异常，请稍后重试',
        type: 'error'
      })
    }
  }
  // 直接返回response.data
  return Promise.resolve(data)
}, ({ config, response }) => {
  // 尝试关闭loading
  if (config.showLoading) {
    tryHideGlobalLoading()
  }

  const error = wrapperHttpException(response)
  if (!config.ignore) {
    Message({
      showClose: true,
      message: error.message || '网络异常，请稍后重试',
      type: 'error'
    })
  }
  return Promise.reject(error)
})

export default axios
