import React, { memo } from 'react'
import VerifyWrapper, { VerifyBox } from './style'
import { CloseOutlined } from '@ant-design/icons';
import VerifySlide from './VerifySlide/index'
import { useDispatch } from 'react-redux';
import { getCodeAction } from '../../store/modules/userInfo';
const index = memo((props) => {
  const { verifyFlag } = props
  const diapatch = useDispatch()
  if(!verifyFlag) return ''
  return (
    <VerifyWrapper className=''>
      <VerifyBox>
        <div className='verifybox-top'>
          <p>请完成安全验证</p>
            <CloseOutlined className="verifybox-close" onClick={e => diapatch(getCodeAction())}/>
        </div>
        <div className='verifybox-content'>
          <VerifySlide />
        </div>
      </VerifyBox>
    </VerifyWrapper>
  )
})

export default index