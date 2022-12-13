import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import TagsWrapper from './style'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { setTags } from '../../../../store/modules/page'

import { CloseOutlined } from '@ant-design/icons';

const index = memo(() => {
  const { tags, currentTag} = useSelector(state => ({
    tags: state.page.tags,
    currentTag: state.page.currentTag,
  }), shallowEqual)
  const navigate = useNavigate()
  const tagClick = path => {
    navigate(path)
  }
  const dispatch = useDispatch()
  const closeTag = async index => { 
    let arr = [...tags]
    let length  = arr.length
    if(length === 1) {
      navigate('/home')
      dispatch(setTags([]))
    }else if(index === arr.length-1) {
      let curr = arr[index-1]
       arr.pop()
       navigate(curr.path)
       dispatch(setTags(arr))
    }else{
      let curr = arr[index+1]
      arr.splice(index, 1)     
      navigate(curr.path)
      dispatch(setTags(arr))
    }
  }

  return (
    <TagsWrapper> 
      <ul>
        {
          tags.map((item, index)=> 
          <li className={item.name === currentTag.name ? 'active' : ''} 
            key={item.path}>
            <span  onClick={e => tagClick(item.path)}>{item.name}</span>
            <CloseOutlined  className='icon'  onClick={e => closeTag(index)} />
          </li>)
        }
      </ul>
    </TagsWrapper>
  )
})

export default index