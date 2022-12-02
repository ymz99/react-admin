import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Header from './style';
import { MenuUnfoldOutlined , MenuFoldOutlined } from '@ant-design/icons';

const topHeader = memo((props) => {
  const { collapsed, setCollapsed } = props

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
        <span>首页</span>
      </div>
    </Header>
  )
})


topHeader.propTypes = {
  collapsed: PropTypes.bool
}



export default topHeader