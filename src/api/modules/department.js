/**
 * Created by luoxie on 2019-07-16.
 */
import urlNames from '../url-names'

export default {
  /**
   * 获取部门 get
   */
  [urlNames.getDepartmentList]: {
    type: 'get',
    url: '/api/converter/queryOrgDataTree',
    keepOriginResponse: true,
    showLoading: true,
    serve: 'personnelManagement'
  },
  /*
   * 获取组织人员列表 post
   */
  [urlNames.addDepartment]: {
    type: 'post',
    url: '/api/converter/add_department',
    headers: {
      'Content-Type': 'application/json'
    },
    keepOriginResponse: true,
    showLoading: true,
    serve: 'personnelManagement'
  }
}
