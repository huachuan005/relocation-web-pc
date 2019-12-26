/**
 * @param name 获取参数名
 * 调用方法，注意需要传入String类型的数据，输出结果为String类型
 * getURLParameter('id') // '123'
 */
export const getURLParameter = function (name) {
  // 正则：[找寻'&' + 'url参数名字' = '值' + '&']（'&'可以不存在）
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
    // 对参数值进行解码
    return unescape(r[2])
  }
  return null
}

export default getURLParameter

/**
* 解析URL传参
* @param {Object} key
*/
export const getQueryString = function (key) {
  var after = window.location.search
  // 如果url中没有传参直接返回空
  if (after.indexOf('?') === -1) {
    return ''
  }
  // key存在先通过search取值如果取不到就通过hash来取
  after = after.substr(1) || window.location.hash.split("?")[1];
  if (after) {
    var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
    var r = after.match(reg);
    if (r != null) {
      return  decodeURIComponent(r[2]);
    } else {
      return '';
    }
  }
}