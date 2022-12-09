import React, { memo } from 'react'

const index = memo(() => {
  console.log('user render');
  return (
    <div>
      user page
    </div>
  )
})

export default index