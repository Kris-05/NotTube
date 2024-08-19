import React, { useEffect } from 'react'

import './_login.scss'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth.action'
import { useNavigate } from 'react-router-dom'


const LoginScreen = () => {
  const accessToken = useSelector(state => state.auth.accessToken)

  const dispatch = useDispatch()
  const handleLogin = () => {
    dispatch(login())
  }

  const navigate = useNavigate()

  useEffect(()=>{
    if(accessToken){
      navigate('/');
    }
  },[accessToken])

  return (
    <div className='login'>
      <div className="login-container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Logo" className="Youtube-logo"/>
        <button onClick={handleLogin}>
            Login With Google
        </button>
        <p>This project is made using with Youtube-API</p>
      </div>
    </div>
  )
}

export default LoginScreen
