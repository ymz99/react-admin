import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginByUsername } from '../../store/modules/userInfo.js'
import Form from './style'
import SvgIcon from '@/components/svgIcon/index.jsx'
import eventBus from '../../event'

const index = memo((props) => {

  const [formData, setFormData] = useState({
    name: '15815800000',
    password: '800000'
  })
  const changeFormData = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  } 
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const addFun = async (captchaVerification) => {
      const form = {
        code: captchaVerification,
        w1: formData.password,
        randomStr: 'blockPuzzle',
        password:formData.password,
        username: formData.name
      }
      const res = await dispatch(loginByUsername(form))
      if(res.payload) {
        navigate('/home')
      }
    }
    eventBus.addListener('verifySuccess', addFun)
    return () => {
      eventBus.removeListener('verifySuccess', addFun)
    }
  }, [dispatch, navigate, formData])

  const [passWordIcon, setPassWordIcon] = useState('eye')
  const changIcon = () => { passWordIcon === 'eye' ?  setPassWordIcon('eye-close') : setPassWordIcon('eye') }
  const clearInput = (item)  => {
    setFormData({
      ...formData,
      [item]: ''
    })
  }

  const [rules, setRules] = useState({
    name: {
      required: true,
      error: false,
      message: '用户名是必填'
    },
    password: {
      required: true,
      error: false,
      message: '密码是必填'
    }
  })
  const blurChange = name => {
    const rule = {...rules}
    if(rules[name].required) {
      formData[name] ? rule[name].error = false : rule[name].error = true
    }
    setRules(rule)
  }

  const submit = () => {
    Object.keys(formData).forEach(item => blurChange(item));
    const flag = Object.values(rules).every(item => !item.error)
    if(!flag) return '' 
    props.loginClick()
  }

  return (
    <div>
      <Form onSubmit={e => e.preventDefault() }>
        <div className={classNames('form-item' ,{'error': rules.name.error})}>
          <input type='text' value={formData.name} name='name'  autoComplete='false' placeholder='请输入用户名' onChange={e => changeFormData(e)} onBlur={e => blurChange(e.target.name)} />
          { formData.name && <SvgIcon name="clear" className='form-icon' svgClick={e => clearInput('name') } /> }
          { rules.name.error && <p>{rules.name.message}</p>}
        </div>
        <div className={classNames('form-item' ,{'error': rules.password.error})}>
          <input type={passWordIcon === "eye" ? 'password' : 'text'} value={formData.password } autoComplete='false' name='password' placeholder='请输入密码' onChange={e => changeFormData(e)} onBlur={e => blurChange(e.target.name)} />
          { formData.password && <SvgIcon name={passWordIcon} className='form-icon' svgClick={changIcon} /> }
          { rules.password.error && <p>{rules.password.message}</p>}
        </div>
        <div className='form-item'>
          <button className='btn' onClick={submit}>登 录</button>
        </div>
      </Form>
    </div>
  )
})




export default index