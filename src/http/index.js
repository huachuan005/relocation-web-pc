import interceptors from './interceptors'
import { config } from './config'
import qs from 'qs'

/**
 *
 * */
const axios = (
  {
    url,
    data = {},
    method = 'GET',
    headers = {},
    showLoading = 'false',
    option = {}
  }) => {
  return _request(url, data, method, headers, showLoading, option)
}

const _request = (url, data, method, headers, showLoading, option) => {
  const isType = method === 'POST' || method === 'PUT'
  console.log(isType)
  return new Promise((resolve, reject) => {
    return interceptors({
      url: url.indexOf('http') !== -1 ? url : `${config.api_base_url}${url}`,
      method: method,
      data: isType ? JSON.stringify(data) : qs.stringify(data),
      params: isType ? {} : Object.assign({}, config.timestamp, data),
      headers: Object.assign({}, config.appkey, config.token, headers),
      withCredentials: true,
      showLoading: showLoading,
      option: option
    }).then((res) => {
      console.log(res)
      resolve(res.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

export default axios
