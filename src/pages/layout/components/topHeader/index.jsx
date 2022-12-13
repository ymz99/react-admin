import React, { memo, useState, useEffect, } from 'react'
import PropTypes from 'prop-types'
import { MenuUnfoldOutlined , MenuFoldOutlined, UserOutlined, SettingOutlined, MessageOutlined,FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { Drawer, Popover, Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header,{ InfoCard } from './style';
import { logOut } from '../../../../store/modules/userInfo';
import { Badge } from 'antd';


const topHeader = memo((props) => {
  const { collapsed, setCollapsed } = props
  const [open, setOpen] = useState(false);
  const { name, userInfo } = useSelector(state => ({
    name: state.page.currentPage,
    userInfo: state.userInfo.userInfo
  }))

  const [fullScreen, setFullScreen] = useState(false)
  useEffect(() =>{
    const fun = () => {
      setFullScreen(!fullScreen)
    }
    document.addEventListener(
      "fullscreenchange", fun, false
    );
    return () => {
      document.removeEventListener("webkitfullscreenchange", fun,)
    }
  }, [fullScreen, setFullScreen])

  const requestFullScreen = () => {
    const doc =  document.documentElement;
    if(doc.requestFullscreen) {
      doc.requestFullscreen()
    }else if(doc.mozRequestFullScreen) {
      doc.mozRequestFullScreen();
    }else if(doc.webkitRequestFullScreen) {
      doc.webkitRequestFullScreen()
    }
  };
  const exitFullscreen = () => {
    const doc =  document.documentElement;
    if(doc.exitFullscreen) {
      doc.exitFullscreen();
    }else if(doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen()
    }else if(doc.webkitCancelFullScreen) {
      doc.webkitCancelFullScreen()
    }
  }
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const infoCardClick = type => {
    if(type === 0) {
      window.open('https://github.com/ymz99/react-admin.git', '_blank');
    }else if(type === 1) {
      Navigate('/admin/index')
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

  const onChange = (key) => {
    console.log(key);
  };
  const messageCard = (
    <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    items={[
      {
        label: `通知（10）`,
        key: '1',
        children: `Content of Tab Pane 1`,
      },
      {
        label: `消息（20）`,
        key: '2',
        children: `Content of Tab Pane 2`,
      },
      {
        label: `代办（30）`,
        key: '3',
        children: `Content of Tab Pane 3`,
      },
    ]}
  />
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
        <div className='full-screen'>
          {
            fullScreen ? <FullscreenExitOutlined onClick={exitFullscreen} className='full-screen-icon' /> : <FullscreenOutlined onClick={requestFullScreen} className='full-screen-icon' />
          }
        </div>
        <div className='message'>
          <Badge dot>
            <Popover content={messageCard}>
              <MessageOutlined className='message-icon' />
            </Popover>
          </Badge>  
        </div>
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