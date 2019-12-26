<template>
  <div
    class="relocation2"
    dfs="fdsaf"
  >relocation2</div>
</template>

<script>
export default {
  name: 'relocation2',
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
    }
  },
  mounted() {}
}
</script>
<style lang="less" scope>
@import 'index';
</style>
