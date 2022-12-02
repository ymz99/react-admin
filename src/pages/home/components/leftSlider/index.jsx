import React, { memo } from 'react'
import Left from './style'

const leftSlider = memo((props) => {
  const { collapsed } = props
  return (
    <Left collapsed={collapsed}>
      <div className='left-top'>
        <img src={require("@/static/img/common/logo.png")} className="logo" alt="" />
        <p>要易业务管理平台</p>
      </div>
    </Left>
  )
})

export default leftSlider