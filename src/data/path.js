/**
 * type: 0 一级菜单 1 二级菜单（实际的路由地址）
 */

const path = [
  {
    type: 0,
    label: '权限管理',
    name: '权限管理',
    id: '10',
    children: [
      {
        type: 1,
        label: '用户管理',
        name: '用户管理',
        path: 'user/index',
        id: '101'
      },
      {
        type: 1,
        label: '合作企业',
        name: '合作企业',
        path: 'firm/index',
        id: '102'
      }
    ]
  },
  {
    type: 0,
    label: '档案管理',
    name: '档案管理',
    id: '20',
    children: [
      {
        type: 1,
        label: 'CSO管理',
        name: 'CSO管理',
        path: 'csoagement/index',
        id: '201'
      },
      {
        type: 1,
        label: '团队管理',
        name: '团队管理',
        path: 'teamagement/index',
        id: '202'
      }
    ]
  }
]

export default path