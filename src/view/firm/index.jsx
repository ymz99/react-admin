import React, { memo } from 'react'

const index = memo(() => {
  console.log('firm render');
  return (
    <div>
      <h4>firm page</h4>
    </div>
  )
})

export default index