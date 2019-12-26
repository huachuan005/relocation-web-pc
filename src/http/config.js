/*
hc 2019-12-05
http请求配置文件
*/
const sever = {
  development: '/api',
  production: '//59.215.222.122:8900',
  test: ''
}

let urlPrefix = ''
if (process.env.NODE_ENV === 'development') {
  urlPrefix = sever.development
} else if (process.env.NODE_ENV === 'production') {
  urlPrefix = sever.production
}

let token = window.localStorage.getItem('token') ? 'JWT ' + window.localStorage.getItem('token') : ''

const config = {
  api_base_url: urlPrefix,
  appkey: {
    appkey: 'E9b8dsZEd2RoBtta'
  },
  timestamp: {
    __t: (new Date()).getTime()
  },
  token: {
    Authorization: token
  }
}

export {
  config
}
