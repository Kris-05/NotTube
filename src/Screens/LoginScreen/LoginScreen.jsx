import React from 'react'
import './_login.scss'

const LoginScreen = () => {
  return (
    <div className='login'>
      <div class="login-container">
        <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="Logo" className="Youtube-logo"/>
        <button>
            Login With Google
        </button>
        <p>This project is made using with Youtube-API</p>
      </div>
    </div>
  )
}

export default LoginScreen
