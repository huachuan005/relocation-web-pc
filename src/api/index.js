/**
 * Created by luoxie on 2019-07-17.
 */
import qs from 'querystring'
import axios from './interceptors'
import urlConfig from './url-config'
import urlNames from './url-names'

// 全局参数
const globalParams = {}
const DEFAULT_REQUEST_TYPE = 'post'
const defaultConfig = {
  headers: {},
  params: {},
  type: DEFAULT_REQUEST_TYPE,
  // 忽略错误？
  ignore: false,
  // 是否透传后端的返回，不读取restful中的data字段给后续处理函数
  keepOriginResponse: false
}

function isFunction (fn) {
  return typeof fn === 'function'
}

/**
 * 将url参数格式化成对象
 * @param {string|object|function} url
 * @return {object}
 */
function normalizeUrlConfig (url) {
  let config = {}
  if (typeof url === 'object') {
    config = Object.assign({}, defaultConfig, url)
  } else {
    config = Object.assign({}, defaultConfig, { url })
  }
  return config
}

function formatHeader (headers) {
  const fHeaders = {}
  const nameMapping = {
    contenttype: 'Content-Type',
    'content-type': 'Content-Type'
  }
  Object.keys(headers).forEach((name) => {
    const nameInMap = name.toLowerCase()
    if (nameMapping[nameInMap]) {
      fHeaders[nameMapping[nameInMap]] = headers[name]
    } else {
      fHeaders[name] = headers[name]
    }
  })
  return fHeaders
}

/**
 * @description 根据传入的配置参数，返回一个请求方法
 * @param {Object} config - 请求配置参数
 * @return {Function} - 返回请求方法，与传入的参数绑定
 * */
function createRequest (config) {
  const { url } = config
  const type = config.type.toLowerCase()
  const isPost = type === 'post'
  const headers = formatHeader(config.headers)
  const contentType = headers['Content-Type'] || ''
  const isJSONType = contentType.indexOf('application/json') >= 0
  /**
   * @description 请求函数
   * @param {Object} params - 请求参数
   * @param {Object} [option] - 特殊的请求配置
   * @return {Promise}
   * */
  return function request (params, option = {}) {
    let args = null
    let isFormData = false
    if (params instanceof window.FormData) {
      isFormData = true
      args = params
      Object.keys(Object.assign({}, globalParams, config.params)).forEach((key) => {
        args.append(key, config[key])
      })
    } else {
      args = Object.assign({}, config.params, globalParams, params)
    }
    let body = ''
    if (isPost) {
      if (isFormData) {
        body = args
      } else {
        body = isJSONType ? JSON.stringify(args) : qs.stringify(args)
      }
    }
    return axios({
      method: type,
      url: isFunction(url) ? url(args) : url,
      data: body,
      // 避免缓存get请求，加入时间戳
      params: isPost ? {} : Object.assign({ _t: (new Date()).getTime() }, args),
      headers: Object.assign(headers, option.headers),
      // `withCredentials` 表示跨域请求时是否需要使用凭证
      withCredentials: true,
      keepOriginResponse: config.keepOriginResponse,
      showLoading: config.showLoading,
      serve: config.serve,
      ignore: config.ignore
    })
  }
}

// 遍历urlConfig，构造请求函数
const api = {}
Object.keys(urlConfig).forEach((urlName) => {
  const config = normalizeUrlConfig(urlConfig[urlName])
  api[urlName] = createRequest(config)
})

export default api

export {
  api,
  urlNames
}
