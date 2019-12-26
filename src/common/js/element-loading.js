export function ElementLoading (ele) {
  ele.$loading({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.2)'
  })
}

export function ElementLoadingClose (ele) {
  ele.$loading({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.2)'
  }).close()
}
