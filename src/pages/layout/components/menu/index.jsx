import React, { useState, useEffect } from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useSelector, shallowEqual } from 'react-redux';
import {  useNavigate, useLocation } from 'react-router-dom';
import { queryTree } from '@/util/util.js'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const Index = () => {
  console.log('render');
  let { menu:oldMenu } = useSelector(state => ({
    menu: state.userInfo.menu
  }),shallowEqual)

  const  menu = JSON.parse(JSON.stringify(oldMenu))
  const mapMenu = (menu)=>{
    return menu.map(item => {
      if(item.children){
        item.children = mapMenu(item.children)
      }
      return getItem(item.label, item.id, <AppstoreOutlined />,item.children)
    })
  }
  
  let arr 
  let rootSubmenuKeys
  if(Array.isArray(menu)){;
    arr = mapMenu(menu)
    rootSubmenuKeys = menu.map(item => item.id)
  }




  const [openKeys, setOpenKeys] = useState([]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const location = useLocation()
  useEffect(()=>{
    const pathname = location.pathname
    console.log('pathname', pathname);
  },[location, setOpenKeys, menu])
  

  const Navigate = useNavigate()
  const itemClick = (item) => {
    console.log('item', item);
    // setOpenKeys([item.keyPath[1]])
    if(item.key) {
      const curr = queryTree(oldMenu, item.key)
      curr && Navigate(curr.path)
    }
  }

  return (
    <Menu
      mode="inline"
      theme='dark'
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick = {(item)=>{itemClick(item)}}
      items={arr}
    />
  );
};
export default Index;