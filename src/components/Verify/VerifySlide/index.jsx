import React, { memo, useRef, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import VerifySlideWrapper from './style.js'
import { RightOutlined } from '@ant-design/icons'
import { aesEncrypt } from '../../../util/aes.js'
import { reqCheck } from '../../../api/modules/login/index.js'
import { ReloadOutlined } from '@ant-design/icons'
import { getCodeAction } from '../../../store/modules/userInfo.js'
import eventBus from '../../../event/index.js'

const index = memo(() => {
  const { codeInfo } = useSelector((state) => ({
    codeInfo: state.userInfo.codeInfo,
  }), shallowEqual)

  const dispatch = useDispatch()
  const refreshClick = () => {
    dispatch(getCodeAction())
  }

  const startScreenX = useRef()
  const areaRef = useRef()
  const iconRef = useRef()
  const maxDistance = useRef()
  const start = e => {
    setFileTransition(false)
    window.addEventListener('mouseup', end)
    maxDistance.current = areaRef.current.clientWidth - iconRef.current.clientWidth
    e = e || window.event
    startScreenX.current = e.screenX
    window.addEventListener('mousemove', move)
  }

  const [left, setLeft] = useState(0)
  const leftDistance = useRef()
  leftDistance.current = left
  const move = e => {
    const leftDistance = e.screenX - startScreenX.current
    if(0 < leftDistance && leftDistance < maxDistance.current){
      setLeft(leftDistance)
    }
  }

  const [verifyStatus, setVerifyStatus] = useState({
    show: false,
    success: false
  })
  const end = e => {
    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseup', end)
    sendMsg()
  }

  const [fileTransition, setFileTransition] = useState(false)
  const sendMsg = async () => {
    const distance = leftDistance.current * 310 / 330
    const data = {
      captchaType: 'blockPuzzle',
      pointJson: codeInfo.repData.secretKey ? aesEncrypt(JSON.stringify({x:distance,y:5.0}),codeInfo.repData.secretKey):JSON.stringify({x:distance,y:5.0}),
      token: codeInfo.repData.token
    }
    const res = await reqCheck(data)
    if(res.data.data.repCode === '0000') {
      setVerifyStatus({
        show: true,
        success: true
      })
      const captchaVerification = codeInfo.repData.secretKey ? aesEncrypt(codeInfo.repData.token + '---' + JSON.stringify({x:distance,y:5.0}),codeInfo.repData.secretKey) : data.token + '---' +  JSON.stringify({x: distance,y: 5.0})
      eventBus.emit('verifySuccess', captchaVerification)
    }else {
      setVerifyStatus({
        show: true,
        success: false
      })
      setFileTransition(true)
      setTimeout(() => {
        setVerifyStatus({
          show: false,
          success: false
        })
        dispatch(getCodeAction())
        setLeft(0)
      }, 800);
    }
  }
  return (
    <VerifySlideWrapper>
      <div className='verify-img-out'>
        <div className='verify-img-panel'>
          <img src={'data:image/png;base64,'+codeInfo?.repData?.originalImageBase64} alt="" />
        </div>
        <div className={classNames('verify-block-img', {'left-transition': fileTransition })}  style={{
          left: left + 'px'
        }}>
            <img src={'data:image/png;base64,'+codeInfo?.repData?.jigsawImageBase64} alt="" />
        </div>
        <div className='refresh' onClick={e => refreshClick() }>
          <ReloadOutlined />
        </div>
      <CSSTransition in={verifyStatus.show} unmountOnExit={true} classNames='status' timeout={800} >
        <div className={classNames('verify-status', verifyStatus.success ? 'success' : 'fail')}>
          {verifyStatus.success ? '验证成功' : '验证失败'}
        </div>
      </CSSTransition>
      </div>
      <div className='verify-bar-area' ref={areaRef}>
        <div className={classNames('verify-left-bg', {'left-transition': fileTransition })}   style={{
          width: left + 'px'
        }}/>
        <div className='verify-left-bar'>
         <div className={classNames('verify-left-icon', {'left-transition': fileTransition })} 
          style={{
            left: left + 'px'
          }}
         onTouchStart={e => start(e)} onMouseDown={e => start(e)} ref={iconRef}>
           <RightOutlined />
         </div>
        </div>
      </div>
    </VerifySlideWrapper>
  )
})

export default index