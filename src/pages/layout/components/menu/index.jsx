import React, { useState, useEffect, memo, useRef } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';
import {  useNavigate, useLocation,  } from 'react-router-dom';
import { queryTreeById, queryTreeBypath} from '@/util/util.js'


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const mapMenu = menu => {
  const menuData = JSON.parse(JSON.stringify(menu))
  const formatData = menuData => {
    const arr =  menuData.map(item => {
      if(item.children){
        item.children = formatData(item.children)
      }
      return item.notMenu ? null : getItem(item.label, item.id, <AppstoreOutlined />,item.children)
    })
    return arr
  }
  return formatData(menuData)
}


const index = memo(() => {
  const { menu } = useSelector(state => ({
    menu: state.userInfo.menu 
  }), shallowEqual)

  const [menuItem, setMenuItem] = useState([])
  const location = useLocation()
  const pathRef = useRef()
  pathRef.current = location.pathname

  useEffect(()=>{
  if(Array.isArray(menu)) {
    const arr = mapMenu(menu)
    const rootSubmenuKeys = menu.map(item => item.id)
    setRootSubmenuKeys(rootSubmenuKeys)
    setMenuItem(arr)
  }
  const curr = queryTreeBypath(menu, pathRef.current)
  if(curr) {
    setSelectedKeys([curr.id])
    setOpenKeys([curr.pid])
  }
  },[menu])

  const [selectedKeys, setSelectedKeys] = useState([])
  const [openKeys, setOpenKeys] = useState([]);
  const [rootSubmenuKeys, setRootSubmenuKeys] = useState([])
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const Navigate = useNavigate()
  const itemClick = (item) => {
    if(item.key) {
      const curr = queryTreeById(menu, item.key)
      setSelectedKeys([item.key])
      curr && Navigate(curr.path)
    }
  }
  return (
    <Menu
      mode="inline"
      theme='dark'
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={onOpenChange}
      onClick = {(item)=>{itemClick(item)}}
      items={menuItem}
    />
  )
})

export default index