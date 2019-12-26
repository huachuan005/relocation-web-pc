/**
 * Created by luoxie on 2019-07-17.
 */
import urlNames from './url-names'
import department from './modules/department'

export default {
  [urlNames.getUserInfo]: {
    type: 'get',
    url: '/api/converter/user/profile',
    keepOriginResponse: true, // 是否保留后端返回数据格式
    showLoading: false, // 该请求发送时，是否显示全局loading
    serve: 'personnelManagement'
  },
  // 测试接口使用
  [urlNames.getPortTest]: {
    type: 'post',
    url: 'https://www.easy-mock.com/mock/5cd3c61dce208f78bbb55b8c/huiwu/mockParamExplain',
    keepOriginResponse: true, // 是否保留后端返回数据格式
    showLoading: false, // 该请求发送时，是否显示全局loading
    serve: 'personnelManagement'
  },
  // 人员管理
  ...department
}
