// 截取字符串px
export function getInterceptStringPx (byVal) {
  const p = 'p'
  let num = null
  let subscript = null
  if (byVal.indexOf(p) !== -1) {
    subscript = byVal.indexOf(p)
    num = byVal.substring(0, subscript)
    num = parseInt(num)
  }
  return num
}
