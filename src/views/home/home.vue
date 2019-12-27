<template>
  <div class="home">
    <div
      :style="{ 'transition': 'all 5s ease', 'transform':'translate3d(-'+left+'px, -'+top+'px, 0)'}"
      class="wrapper"
    >
      <transition name="slide-fade">
        <relocation1
          :style="{ color: activeColor, width: winW + 'px', height: winH + 'px', top: top + 'px', left: left + 'px'}"
          v-if="flag === 1"
        ></relocation1>
      </transition>
      <transition name="slide-fade">
        <relocation2
          :style="{ color: activeColor, width: winW + 'px', height: winH + 'px', top: top + 'px', left: left + 'px'}"
          v-if="flag === 2"
        ></relocation2>
      </transition>
    </div>
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
      flag: 1,
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
      function Random(min, max) {
        const minus = Math.random() > 0.5 ? 1 : -1
        return (Math.round(Math.random() * (max - min)) + min) * minus
      }

      let random = Random(1, 2)
      // let random = Math.floor(Math.random() * 3) * minus
      console.log(random)
      if (this.flag === 2) {
        console.log('go 2')
        this.top = top * random
        this.left = left * random
        this.flag = 1
      } else {
        console.log('go 1')
        this.top = top * random
        this.left = left * random
        this.flag = 2
      }
      console.log(this.top)
      console.log(this.left)
    },
    _getWinWH() {
      // document.documentElement.clientWidth,
      // document.documentElement.clientHeight
      let h = document.documentElement.clientHeight // 浏览器高度
      let w = document.documentElement.clientWidth // 浏览器宽度
      this.winW = w
      this.winH = h
      this.top = h
      this.left = w
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
