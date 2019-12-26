<template>
  <div class="home">
    <h1>m：{{this.orderListAlias}}</h1>
    <h1>authority：{{this.orderListAlias1}}</h1>
    <h1>gf更多官方的防守打法第三</h1>
    <img alt="Vue logo" src="../common/images/logo.png">
  </div>
</template>

<script>
// src is an alias to /src
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { getData, getData1 } from 'src/api/data-example'

export default {
  name: 'home',
  components: {
  },
  computed: {
    // 模块名（嵌套层级要写清楚）例如：meetingLayout
    // 获取state值
    ...mapState('m', {
      orderListAlias: state => state.count
    }),
    ...mapState('authority', {
      orderListAlias1: state => state.count
    }),
    // 通过getters获取值
    ...mapGetters('m', [
      'doubleCountm'
    ]),
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters('authority', {
        seatData1: 'seatData'
    }),
    // 别名的获取方法
    ...mapGetters('authority', {
      doubleCountAlias: 'doubleCount'
    })
  },
  methods: {
    ...mapMutations('m', [
      'increment' // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
    ...mapMutations('authority', {
      incrementa: 'increment'
    }),
    ...mapActions('m', [
      'incrementIfOddOnRootSum' // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ]),
    // 别名的派发方式
    ...mapActions('authority', {
      incrementIfOddOnRootSuma: 'incrementIfOddOnRootSum'
    }),
    _getHomeData () {
      getData('', '').then((res) => {
        // console.log(res)
      })
      getData1('', {
        api: 123
      }).then((res) => {
        // console.log(res)
      })
    }
  },
  mounted () {
    // console.log(this.orderListAlias)
    // console.log(this.orderListAlias1)
    // console.log(this.doubleCount)
    // console.log(this.doubleCountm)
    // this.increment()
    // console.log(this.orderListAlias)
    // this.incrementa()
    // console.log(this.orderListAlias1)
    // this.incrementIfOddOnRootSum()
    // console.log(this.orderListAlias)
    // this.incrementIfOddOnRootSuma()
    // console.log(this.orderListAlias1)
    // this._getHomeData()
  }
}
</script>
