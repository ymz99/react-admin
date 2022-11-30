import request from '../../request/index'
import qs from 'qs'

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

// 登录
export const loginByUsername = (username, password, code, randomStr,w1) => {
  let grant_type = 'password'
  let dataObj = qs.stringify({'username': username, 'password': password})
  return request({
    url: '/auth/oauth/token',
    headers: {
      isToken: false,
      'TENANT-ID': '1',
      'Authorization': 'Basic cGlnOnBpZw=='
    },
    method: 'post',
    params: {randomStr, code, grant_type,username,w1},
    data: dataObj
  })
}