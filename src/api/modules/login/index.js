import request from '../../request/index'

export function getCode(data) {
  return request({
    url: '/code',
    method: 'get',
  })
}

//滑动或者点选验证
export function reqCheck(data) {
  return request({
    url: '/code/check',
    method: 'post',
    params: data
  })
}

