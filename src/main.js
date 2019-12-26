import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'src/common/style/index.less'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, { size: 'medium', zIndex: 3000, fontSize: '14' })

// 阻止启动生产消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
