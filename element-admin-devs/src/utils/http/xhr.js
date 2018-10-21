
export default class HttpUtils {
  commonFetcdh(url, options, method = 'GET') {
    const searchStr = this.obj2String(options)
    let initObj = {}
    if (method === 'GET') {
      url += '?' + searchStr
      initObj = {
        method: method,
        credentials: 'include'
      }
    } else {
      initObj = {
        method: method,
        credentials: 'include',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }),
        body: searchStr
      }
    }
    fetch(url, initObj).then((res) => {
      return res.json()
    }).then((res) => {
      return res
    })
  }

  obj2String(obj, arr = [], idx = 0) {
    for (const item in obj) {
      arr[idx++] = [item, obj[item]]
    }
    return new URLSearchParams(arr).toString()
  }

  GET(url, options) {
    return this.commonFetcdh(url, options, 'GET')
  }

  POST(url, options) {
    return this.commonFetcdh(url, options, 'POST')
  }
}
// console.log(HttpUtils)
// HttpUtils.POST('https://www.baidu.com/search/error.html', { a: 1, b: 2 })

