export default {
  // 把数组转成对像
  transferObj: function (arr) {
    let obj = {}
    arr.forEach(function (v, i) {
      obj[i] = v
    })
    return obj
  },
  // 把对像转成数组
  transferArr: function (obj) {
    let arr = []
    for (let key in obj) {
      arr.push(obj[key])
    }
    return arr
  }
}

// 手机号验证
export function isvalidPhone (str) {
  const reg = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/
  return reg.test(str)
}

// 纯数字字符串验证
export function isNumberString (str) {
  const reg = /^[0-9]+$/
  return reg.test(str)
}

export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
};
