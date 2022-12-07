import React, { memo } from 'react'

const index = memo(() => {
  console.log('list render');
  return (
    <div>
      list page
    </div>
  )
})

export default index