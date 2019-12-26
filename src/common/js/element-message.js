export function ElementMsg (ele, type, msg) {
  ele.$message({
    type: type,
    message: msg,
    showClose: true,
    center: true
  })
}
