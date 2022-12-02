import React, { memo } from 'react'
import VerifyWrapper, { VerifyBox } from './style'
import { CloseOutlined } from '@ant-design/icons';
import VerifySlide from './VerifySlide/index'

 const index = memo((props) => {
  const { verifyClose } = props
  return (
    <VerifyWrapper className=''>
      <VerifyBox>
        <div className='verifybox-top'>
          <p>请完成安全验证</p>
            <CloseOutlined className="verifybox-close" onClick={e => verifyClose()}/>
        </div>
        <div className='verifybox-content'>
          <VerifySlide />
        </div>
      </VerifyBox>
    </VerifyWrapper>
  )
})

export default index