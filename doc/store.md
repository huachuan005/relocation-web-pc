# Store-状态管理

### 目录结构


``` bash
.
├── src                               源码目录    
│    ├── store                        状态管理配置
│    │     ├── modules                模块状态管理
│    │     │      ├──  app.js         存储公共state
│    │     │      ├──  xxx.js         存储xxx模块state（命名和view下的模块文件夹保持一致）
│    │     ├── index.js               生成vux Store对象，聚合modules中各模块的状态
│    │     ├── mutation_types.js      配置Store中所有状态的mutations
.

```

### 如何新增store？

例：新增一个department的模块的currentDepartment状态管理

#### 第一步：新增一个名字为department的store模块


+ 复制stores->modules->app.js，并重命名为department.js，修改文件为如下
```
import * as types from '../mutation-types'

const department = {
  state: {
    currentDepartment: null
  },
  mutations: {
    [types.SET_CURRENT_DEPARTMENT] (state, department) {
      state.currentDepartment = department
    },
  }
}

export default department
```

#### 第二步：暴露SET_CURRENT_DEPARTMENT方法

在store->mutation_types.js配置上一步定义的SET_CURRENT_DEPARTMENT方法

```
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_CURRENT_DEPARTMENT = 'SET_CURRENT_DEPARTMENT'
```


#### 第三步：将department模块聚合到store中

修改store->index.js文件

+ 导入department模块

```
import app from './modules/app'
import department from './modules/department'
```

+ 将department加入到store的modules中
```
modules: {
  app,
  department
}
```

### 如何使用store中新增的currentDepartment

#### 获取、修改currentDepartment

在vue文件中导入mapState，mapMutations

```
import { mapState, mapMutations } from 'vuex'
```

##### 获取

+ 在vue的computed中，聚合需要引入的模块

```
computed: {
  ...mapState(['department']),
},
```

综上，就可以在vue中通过this.department.currentDepartment使用currentDepartment这个状态了

+ 在template中使用
```
department.currentDepartment
```
+ 在vue script中
```
this.department.currentDepartment
```

##### 修改

+ 在vue的methods中，引入SET_CURRENT_DEPARTMENT方法
```
methods: {
  ...mapMutations(['SET_CURRENT_DEPARTMENT']),
}
```

+ 在vue的script中，修改current_department
```
this.SET_HOME_CURRENT_TAB(department);
```
