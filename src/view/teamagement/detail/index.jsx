import React, { memo } from 'react'
import { useParams } from 'react-router-dom';

const index = memo(() => {
  const paras = useParams()
  console.log('paras',paras );
  return (
    <div>index</div>
  )
})

export default index