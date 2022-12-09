import React from "react"
const formatRoute = menu => {
  return menu.map(item => {
    const obj = {}
    obj.path = item.path
    if(item.type === 1) {
      if(item.path.includes(':')){
        let index = item.path.lastIndexOf(':')
        const path = item.path.substring(0,index ) + 'index'
        obj.component = React.lazy(()=> import(`@/view/${path}`))
      }else {
        obj.component = React.lazy(()=> import(`@/view/${item.path}`))
      }
      obj.meta = {
        title: item.name,
        isLogin: true,
      }
    }
    if(item.children){
      obj.children = formatRoute(item.children)
    }
    return obj
  })
}

export default formatRoute