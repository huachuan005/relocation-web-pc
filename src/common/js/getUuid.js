// 通用唯一识别码（英语：Universally Unique Identifier，简称UUID）
export function getUuid () {
  let s = []
  let hexDigits = '0123456789abcdefhijklmnopqrstuvwxyz'
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x20), 1)
  }
  // bits 12-15 of the time_hi_and_version field to 0010
  s[14] = '7'
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  s[8] = s[13] = s[18] = s[23] = '-'

  return s.join('')
}
