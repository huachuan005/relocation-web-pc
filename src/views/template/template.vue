<template>
  <div class="module mod-department">
    <div class="operator-row">
      <el-input
        clearable
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
    </div>
    <el-tree
      ref="departmentTree"
      lazy
      :load="loadNode"
      node-key="id"
      :filter-node-method="filterNode">
      <span class="department-tree-node" slot-scope="{ node, data }">
        <span>{{ data.name }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            新增部门
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            新增人员
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
  // alias is src
  import { mapState, mapMutations } from 'vuex'
  import { api, urlNames } from 'src/api'

  export default {
    name: 'home',
    components: {},
    data () {
      return {
        filterText: '',
        rootNode: {
          id: '-1730833917365171641',
          orgid: '-1730833917365171641',
          name: '贵州省',
          isorg: 1
        },
        aDepartment: []
      }
    },
    watch: {
      filterText (val) {
        this.$refs.departmentTree.filter(val)
      }
    },
    computed: {
      ...mapState(['app'])
    },
    mounted () {
      // this.getDepartmentList(this.rootNode.id).then(res => {
      //   console.log(222, res)
      // })
    },
    methods: {
      getMemberList (item) {
        api[urlNames['getDepartmentList']]({
          deptid: item.id
        }).then(res => {
          this.aMember = res.data
        })
      },
      filterNode (value, data) {
        if (!value) return true
        return data.name.indexOf(value) !== -1
      },
      async getDepartmentList (parentId) {
        await api[urlNames['getDepartmentList']]({
          parentId: parentId,
          getDataType: 2 // 1:只查机构，2:查机构和部门
        })
      },
      loadNode (node, resolve) {
        console.log(node.level)
        if (node.level === 0) {
          api[urlNames['getDepartmentList']]({
            parentId: this.rootNode.id,
            getDataType: 2 // 1:只查机构，2:查机构和部门
          }).then(res => {
            resolve(res.data)
          })
        } else {
          api[urlNames['getDepartmentList']]({
            parentId: node.data.id,
            getDataType: 2 // 1:只查机构，2:查机构和部门
          }).then(res => {
            resolve(res.data)
          })
        }
      },
      append () {

      },
      remove () {

      }
    }
  }
</script>
<style lang="less">
  @import "template";
</style>
