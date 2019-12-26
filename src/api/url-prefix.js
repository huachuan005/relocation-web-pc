/**
 * Created by luoxie on 2019-07-17.
 */

// 后端服务配置
const Serve = {
  development: {
    personnelManagement: '//59.215.222.122:8900'
  },
  test: {
    personnelManagement: '//59.215.222.122:8900'
  },
  production: {
    personnelManagement: '//59.215.222.122:8900'
  }
}

// 环境配置
let prefix = ''
let host = window.location.host

console.log(process.env.NODE_ENV)
console.log(Serve.development)
console.log(host)
if (process.env.NODE_ENV === 'development') {
  prefix = Serve.development
} else {
  if (host.includes('59.215.222.122')) {
    // 测试环境
    prefix = Serve.test
  } else {
    // 正式环境
    prefix = Serve.production
  }
}
export const urlPrefix = prefix
