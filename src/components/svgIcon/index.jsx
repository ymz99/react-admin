import React, { memo } from 'react'
import PropTypes from 'prop-types'
import '@/static/svg/index.js'
import classNames from 'classnames'


const index = memo((props) => {
  

  const { name, className, svgClick } = props;


  return (
      <svg  className={classNames('svg-icon', className)}
        onClick={ svgClick }>
      <use xlinkHref={'#'+ name}></use>
    </svg>
  )
})

index.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  svgClick: PropTypes.func
}

export default index