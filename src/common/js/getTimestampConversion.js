/**
 * @param timestamp 时间戳
 * getDate(1536630595068)
 * // console.log(timestampToTime(1536630595068)) 2018-09-11 9:49:55
 */
const getTimestampConversion = function (timestamp) {
  let timeStamp
  let timeStampLen = timestamp.toString().length
  if (timeStampLen === 10) {
    timeStamp = timestamp * 1000
  } else if (timeStampLen === 13) {
    timeStamp = timestamp
  } else {
    timeStamp = timestamp
  }
  let date = new Date(timeStamp) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() + ' '
  let h = date.getHours() + ':'
  let m = date.getMinutes() + ':'
  let s = date.getSeconds()
  return Y + M + D + h + m + s
}

export default getTimestampConversion
