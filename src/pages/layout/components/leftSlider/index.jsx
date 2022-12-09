import React, { memo } from 'react'
import Left from './style'
import { getMenuAction } from '../../../../store/modules/userInfo'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Menu from '../menu/index'

const leftSlider = memo((props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMenuAction())
  }, [dispatch])

  const { collapsed } = props
  return (
    <Left collapsed={collapsed}>
      <div className='left-top'>
        <img src={require("@/static/img/common/logo.png")} className="logo" alt="" />
        <p>要易业务管理平台</p>
      </div>
      <div className='menu'>
        <Menu />
      </div>
    </Left>
  )
})

export default leftSlider