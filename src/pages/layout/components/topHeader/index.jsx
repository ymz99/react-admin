import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { MenuUnfoldOutlined , MenuFoldOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Drawer, Popover } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header,{ InfoCard } from './style';
import { setCurrentPage } from '../../../../store/modules/page';
import { logOut } from '../../../../store/modules/userInfo';


const topHeader = memo((props) => {
  const { collapsed, setCollapsed } = props
  const [open, setOpen] = useState(false);
  const { name, userInfo } = useSelector(state => ({
    name: state.page.currentPage,
    userInfo: state.userInfo.userInfo
  }))
  



  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const infoCardClick = type => {
    if(type === 0) {
      window.open('https://github.com/ymz99/react-admin.git', '_blank');
    }else if(type === 1) {
      Navigate('/admin/index')
      dispatch(setCurrentPage('个人中心'))
    }else if(type === 2){
      dispatch(logOut())
    } 
  }

  const content = (
    <InfoCard>
      <div>
        <p onClick={e => infoCardClick(0)}>项目仓库</p>
        <p onClick={e => infoCardClick(1)}>个人中心</p>
      </div>
      <div className='login-out'>
        <p onClick={e => infoCardClick(2)}>退出登录</p>
      </div>
    </InfoCard>
  );
  return (
    <Header>
      <div className='collapsed'>
        {
          React.createElement(
            collapsed ? MenuUnfoldOutlined  : MenuFoldOutlined, 
            {
              className: 'collapsed-btn',
              onClick: () =>  setCollapsed()
            }
          )
        }
        <span>{name}</span>
      </div>
      <div className='operate'>
        <div className='user-info'>
          <Popover content={content} trigger="hover" placement="bottom">
            <UserOutlined className='icon' />
            <span>{userInfo.username}</span>
          </Popover>
        </div>
        <SettingOutlined className='setting' onClick={()=> setOpen(true)} />
      </div>
      <Drawer title="系统设置" placement="right" onClose={()=> setOpen(false)} open={open}>
        <p>Some contents...</p>
      </Drawer>
    </Header>
  )
})  
topHeader.propTypes = {
  collapsed: PropTypes.bool
}



export default topHeader