import React, { memo, useRef, useState } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import VerifySlideWrapper from './style.js'
import { RightOutlined } from '@ant-design/icons'
import { aesEncrypt } from '../../../util/aes.js'
import { reqCheck } from '../../../api/modules/login/index.js'

const index = memo(() => {

  const { codeInfo } = useSelector((state) => ({
    codeInfo: state.userInfo.codeInfo,
  }), shallowEqual)

  const startScreenX = useRef()
  const areaRef = useRef()
  const iconRef = useRef()
  const maxDistance = useRef()
  const start = e => {
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

  const end = e => {
    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseup', end)
    sendMsg()

  }
  const sendMsg = async () => {
    const distance = leftDistance.current * 310 / 330
    const data = {
      captchaType: 'blockPuzzle',
      pointJson: codeInfo.repData.secretKey ? aesEncrypt(JSON.stringify({x:distance,y:5.0}),codeInfo.repData.secretKey):JSON.stringify({x:distance,y:5.0}),
      token: codeInfo.repData.token
    }
    const res = await reqCheck(data)
    console.log('res', res);
  }



  return (
    <VerifySlideWrapper leftDistance={left}>
      <div className='verify-img-out'>
        <div className='verify-img-panel'>
          <img src={'data:image/png;base64,'+codeInfo?.repData?.originalImageBase64} alt="" />
        </div>
        <div className='verify-block-img' >
            <img src={'data:image/png;base64,'+codeInfo?.repData?.jigsawImageBase64} alt="" />
        </div>
      </div>
      <div className='verify-bar-area' ref={areaRef}>
        <div className='verify-left-bg'></div>
        <div className='verify-left-bar'>
         <div className='verify-left-icon' onTouchStart={e => start(e)} onMouseDown={e => start(e)} ref={iconRef}>
           <RightOutlined />
         </div>
        </div>
      </div>

    </VerifySlideWrapper>
  )
})

export default index