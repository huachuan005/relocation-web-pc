// 获取值，将个位数变为5
export function getInteger (num) {
  // 个位数
  let theUnit = parseInt(num % 10)
  // 十位数
  let tens = parseInt((num % 100) / 10)
  // 百位数
  let hundred = parseInt((num % 1000) / 100)
  // 千位数
  let thousand = parseInt((num % 10000) / 1000)
  // 以此类推
  let resNum = ''
  if (theUnit !== 5) {
    if (thousand === 0) {
      resNum = hundred.toString() + tens.toString() + '5'
    } else {
      resNum = thousand.toString() + hundred.toString() + tens.toString() + '5'
    }
  }
  return parseInt(resNum)
}
