<template>
  <div
    class="relocation1"
    dfs="fdsaf"
  >relocation1</div>
</template>

<script>
export default {
  name: 'relocation1',
  components: {},
  data() {
    return {
      winW: '',
      winH: ''
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
      this.winW = window.localStorage.getItem('winW')
      this.winH = window.localStorage.getItem('winH')
      console.log(this.winW)
      console.log(this.winH)
    }
  },
  mounted() {}
}
</script>
<style lang="less" scope>
@import 'index';
</style>
