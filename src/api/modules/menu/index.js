import request from '../../request/index'

export function getMenu () {
  return request({
    url: '/admin/menu',
    method: 'get'
  })
}