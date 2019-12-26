import Vue from 'vue'
import Vuex from 'vuex'
import meetingLayout from './module/meetingLayout'
// 调试方法
import createLogger from 'vuex/dist/logger'

// 判断环境
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    meetingLayout: meetingLayout
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

// 重要：不熟悉的话，查看使用方法，在：Home.vue
// store.state.meetingLayout // -> meetingLayout 的状态
// store.state.seatManage // -> seatManage 的状态
