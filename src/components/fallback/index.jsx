import React, { memo } from 'react'
import FallbackWrapper from './style'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd';

const index = memo(() => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 48,
      }}
      spin
    />
  );
  return (
    <FallbackWrapper>
      <Spin indicator={antIcon} size="large" />
    </FallbackWrapper>
  )
})

export default index