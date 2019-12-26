import * as types from './mutation-types'

const mutations = {
  [types.SET_INCREMENT] (state) {
    // 这里的 `state` 对象是模块的局部状态
    state.count++
  }
}

export default mutations
