import React, { memo, useEffect, useState } from 'react'
import { Wrapper } from './style'
import LoginForm from '@/components/login-form/index.jsx'
import Verify from '@/components/Verify/index.jsx'
import { useDispatch } from 'react-redux'
import { getCodeAction } from '../../store/modules/userInfo'

const index = memo(() => {

  const [verifyFlag, setVerifyFlag] = useState(true)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCodeAction())
  }, [dispatch])

  return (
    <Wrapper>
      <div className='card'>
        <div className='logo'>
          <img src={require('@/static/img/login/logo.jpg')} alt="" />
        </div>
        <div className='title'>
          <h3>要易业务管理平台</h3>
        </div>
        <div className='form'>
          <LoginForm loginClick={ () => setVerifyFlag(true) } />
        </div>
      </div>

      <Verify verifyFlag={verifyFlag} />
    </Wrapper>
  )
})

export default index