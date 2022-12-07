import React, { memo, useState } from 'react'
import { Layout } from 'antd';
import Wrapper from './style';
import LeftSlider from './components/leftSlider/index.jsx';
import TopHeader from './components/topHeader';
import { Outlet } from 'react-router-dom';

const index = memo(() => {

  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false)  
  const setCollapsedClick = () => {
    setCollapsed(!collapsed)
  } 
  return (
    <Wrapper>
      <Layout className='lay-out'>
        <Sider className='left-slider' collapsed={collapsed} width={210}>
          <LeftSlider collapsed={collapsed} />
        </Sider>
        <Layout>
          <Header className='top-header'>
            <TopHeader collapsed={collapsed} setCollapsed={setCollapsedClick} />
          </Header>
          <Content className='content'>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Wrapper>
  )
})

export default index