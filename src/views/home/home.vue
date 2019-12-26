<template>
  <div
    class="home"
    style="width: 100%; height: 100%;"
  >
    <relocation1 :style="{ color: activeColor, width: winW + 'px', height: winH + 'px', top: top + 'px', left: left + 'px'}"></relocation1>
    <relocation2 :style="{ color: activeColor, width: winW + 'px', height: winH + 'px', top: top + 'px', left: left + 'px'}"></relocation2>
    <button
      @click="next"
      class="button next-btn"
    >下一个</button>
  </div>
</template>

<script>
import Relocation1 from 'src/components/Relocation1/index'
import Relocation2 from 'src/components/Relocation2/index'

const RES_OK = 0
export default {
  name: 'home',
  components: { Relocation1, Relocation2 },
  data() {
    return {
      key: '',
      winW: '',
      winH: '',
      activeColor: 'red',
      fontSize: '20',
      flag: 2,
      top: '',
      left: ''
    }
  },
  created() {
    this.$nextTick(() => {
      this._getWinWH()
    })
  },
  computed: {},
  watch: {},
  methods: {
    next() {
      let top = this.winH
      let left = this.winW
      console.log(top)
      console.log(left)
      if (this.flag === 2) {
        console.log('go 2')
        this.top = top * this.flag
        this.left = left * this.flag
        this.flag = 1
      } else {
        console.log('go 1')
        this.top = top * this.flag
        this.left = left * this.flag
        this.flag = 2
      }
    },
    _getWinWH() {
      // document.documentElement.clientWidth,
      // document.documentElement.clientHeight
      let h = document.documentElement.clientHeight // 浏览器高度
      let w = document.documentElement.clientWidth // 浏览器宽度
      this.winW = w
      this.winH = h
      window.localStorage.setItem('winW', w)
      window.localStorage.setItem('winH', h)
    }
  },
  mounted() {}
}
</script>
<style lang="less" scope>
@import 'home';
</style>
