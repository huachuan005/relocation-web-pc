export default {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },

  getters: {
    doubleCount (state) {
      return state.count * 5
    },
    // 对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  },

  actions: {
    // 同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  }
}
