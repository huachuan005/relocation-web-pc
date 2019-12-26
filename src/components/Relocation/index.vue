<template>
  <div
    class="relocation"
    dfs="fdsaf"
  >relocation</div>
</template>

<script>
export default {
  name: 'relocation',
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
      const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight // 浏览器高度
      const w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth // 浏览器宽度
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
