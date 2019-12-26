<template>
  <div id="app">
    <keep-alive>
      <router-view :key="key"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { api, urlNames } from 'src/api'
import { getWorkLogs, postLogin } from 'src/http/models/example'
import { getUuid } from 'src/common/js/getUuid'
import { async } from 'q'

export default {
  name: 'app',
  components: {
  },
  computed: {
    key() {
      return this.$route.name !== undefined ? this.$route.name + getUuid() : this.$route + getUuid()
    }
  },
  mounted() {
    // test
    // this.testhttp()
    // this._postLogin()
    // this._getWorkLogs()
    // this.getPortTest()
    // this.getUserInfo()
  },
  methods: {
    _getWorkLogs() {
      getWorkLogs().then((res) => {
        console.log(res)
      })
    },
    _postLogin() {
      let param = {
        phone_number: '17708512578',
        password: '123'
      }
      postLogin(param).then((res) => {
        console.log(res)
        window.localStorage.setItem('token', res.access)
        window.localStorage.setItem('refresh', res.refresh)
      })
    },
    async testhttp() {
      let param = {
        phone_number: '17708512578',
        password: '123'
      }
      const testAwT = await postLogin(param)
      console.log(testAwT)
    },
    getPortTest() {
      api[urlNames.getPortTest]().then((res) => {
        console.log(res.data)
      })
    },
    getUserInfo() {
      api[urlNames.getUserInfo]().then((res) => {
        console.log('userInfo=', res.data)
        this.SET_USER_INFO(res.data)
      }).catch((e) => {
        this.$message.error(e)
      })
    }
  }
}
</script>

<style scoped lang="less">
#app {
  height: 100%;
  min-width: 1359px;
  overflow-x: scroll;
  background: #f0f2f2;
}
</style>
