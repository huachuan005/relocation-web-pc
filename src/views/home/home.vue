<template>
  <div class="home">home</div>
</template>

<script>
// alias is src
import { mapState, mapMutations } from 'vuex'
import { api, urlNames } from 'src/api'

export default {
  name: 'home',
  components: {},
  data() {
    return {
      data: ''
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
    _getWinWH() {
      let h =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight // 浏览器高度
      let w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth // 浏览器宽度
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
