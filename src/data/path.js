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
        id: '101',
        pid:'10'
      },
      {
        type: 1,
        label: '合作企业',
        name: '合作企业',
        path: 'firm/index',
        id: '102',
        pid:'10'
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
        id: '201',
        pid:'20'
      },
      {
        type: 1,
        label: '团队管理',
        name: '团队管理',
        path: 'teamagement/index',
        id: '202',
        pid:'20'
      },
      {
        type: 0,
        label: '三级菜单',
        name: '三级菜单',
        pid:'20',
        id: '203',
        children: [
          {
            type: 1,
            label: '三级菜单A1',
            name: '三级菜单A1',
            path: 'teamagement/info/index',
            id: '2031',
            pid:'203'
          },
          {
            type: 1,
            notMenu: true,
            label: '三级菜单A2',
            name: '三级菜单A2',
            path: 'teamagement/detail/:id',
            id: '2032',
            pid:'203'
          },

        ]
      }
    ]
  },
  {
    type: 0,
    label: '个人中心',
    name: '个人中心',
    id: '30',
    children: [
      {
        type: 1,
        label: '个人中心',
        name: '个人中心',
        path: 'admin/index',
        id: '301',
        pid:'30'
      }
    ]
  }
]

export default path


