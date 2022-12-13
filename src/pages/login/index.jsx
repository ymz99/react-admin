import React, { memo, useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Wrapper, TransitionWrapper } from './style'
import LoginForm from '@/components/login-form/index.jsx'
import Verify from '@/components/Verify/index.jsx'
import { useDispatch } from 'react-redux'
import { getCodeAction } from '../../store/modules/userInfo'
import eventBus from '../../event';

const index = memo(() => {

  const [verifyFlag, setVerifyFlag] = useState(false)
  useEffect(() => {
    const success =  () => {
      setTimeout(() => {
        setVerifyFlag(false)       
      }, 800);
    }
    eventBus.addListener('verifySuccess', success)
    return () => {
      eventBus.removeListener('verifySuccess', success)
    }
  }, [])


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCodeAction())
  }, [dispatch])

  const loginClick = () => {
    setVerifyFlag(true)
  }

  const verifyClose = () => {
    dispatch(getCodeAction())
    setVerifyFlag(false)
  }

  return (
    <>
      <Wrapper>
        <div className='card'>
          <div className='logo'>
            <img src={require('@/static/img/login/logo.jpg')} alt="" />
          </div>
          <div className='title'>
            <h3>xx业务管理平台</h3>
          </div>
          <div className='form'>
            <LoginForm loginClick={ loginClick } />
          </div>
        </div>
      </Wrapper>
      <TransitionWrapper>
        <CSSTransition in={verifyFlag} classNames='verify-transition' timeout={800} unmountOnExit={true}>
          <Verify verifyClose={verifyClose}  />
        </CSSTransition>
      </TransitionWrapper>
    </>
  )
})

export default index