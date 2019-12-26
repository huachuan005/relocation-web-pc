# api-接口

### 目录结构


``` bash
.
├── src                                 源码目录    
│    ├── api                            请求封装
│    │    ├── modules                   请求所属模块
│    │    │      ├──  department.js     department模块请求
│    │    │      ├──  xxx.js            存储xxx模块state（命名和view下的模块文件夹保持一致）
│    │    ├── index.js                  api请求主入口文件【不可擅自修改】
│    │    ├── interceptors.js           请求拦截器【不可擅自修改】
│    │    ├── url-config.js             配置公共接口
│    │    ├── url-name.js               配置项目中所有接口名称
│    │    ├── url-prefix.js             配置项目域名和后端服务地址
.

```

### 如何新增一个请求？

例：新增一个department的模块的getDepartmentList请求

#### 第一步：新增一个名字为department的api模块

在api->modules下新增department.js

```
import urlNames from '../url-names'; // 必须引入url-names，vue文件才能通过名字找到该请求

export default {
  /**
   * 获取部门/子部门列表
   */
  [urlNames.getDepartmentList]: {
    type: 'get',                              // 请求类型
    url: '/api/converter/queryOrgDataTree',   // 请求地址
    keepOriginResponse: true,                 // 返回数据是否保留后端response数据格式
    showLoading: true,                        // 该请求是否需要全局loading
    serve: 'personnelManagement'              // 该请求对应服务端，服务端名字在url-prefix中配置
  },
};
```

#### 第二步：暴露getDepartmentList方法

在api->url-names.js配置上一步定义的getDepartmentList方法

```
export default {
  // 人员管理
  getUserInfo: "getUserInfo",
  // department
  getDepartmentList: "getDepartmentList",
}
```
`注：由于url-names.js是配置项目所有api接口名，请按注释放置接口名称`


#### 第三步：将department模块聚合到url-config.js中

修改api->url-config.js文件

+ 导入department模块

```
import department from './modules/department';
```

+ 将department模块聚合到url-config中
```
export default {
  [urlNames.getUserInfo]: {
    type: 'get',
    url: '/api/converter/user/profile',
    keepOriginResponse: true, // 是否保留后端返回数据格式
    showLoading: false, // 该请求发送时，是否显示全局loading
    serve: 'personnelManagement'
  },
  // 人员管理
  ...department
};
```

+ 在vue的script中，调用getDepartmentList
```
api[urlNames['getDepartmentList']]({
  parentId: parentId,
  getDataType: 2 //1:只查机构，2:查机构和部门
}).then(res => {
  // success callback（）
})
```
