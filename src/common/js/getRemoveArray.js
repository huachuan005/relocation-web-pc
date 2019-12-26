/**
 * 删除数组中的某一个对象
 * array:数组
 * object:需删除的对象
 */
export function getRemoveArray (array, object) {
  let length = array.length
  if (length > 0) {
    for (let i = 0; i < length; i++) {
      if (array[i] === object) {
        if (i === 0) {
          // 删除并返回数组的第一个元素
          array.shift()
          return array
        } else if (i === length - 1) {
          // 删除并返回数组的最后一个元素
          array.pop()
          return array
        } else {
          // 删除下标为i的元素
          array.splice(i, 1)
          return array
        }
      }
    }
  }
}

export function removeArrayArea (array, object) {
  let length = array.length
  if (length > 0) {
    for (let i = 0; i < length; i++) {
      if (array[i].areaId === object.areaId) {
        if (i === 0) {
          // 删除并返回数组的第一个元素
          array.shift()
          return array
        } else if (i === length - 1) {
          // 删除并返回数组的最后一个元素
          array.pop()
          return array
        } else {
          // 删除下标为i的元素
          array.splice(i, 1)
          return array
        }
      }
    }
  }
}
