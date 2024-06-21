import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
<div className="loginsignup-container">
<h1>signup</h1>
<div className="loginsignup-fields">
<input type="text" placeholder='enter your name' />
<input type="email" placeholder='enter your mail' />
<input type="password" placeholder='enter your password'/>
</div>
<button>Continue</button>
<p className='loginsignup-login'>already have an account?<span>Login here </span></p>
<div className="loginsignup-agree">
  <input type="checkbox" name="" id="" />
  <p>By continuing ,i agree to term and policy</p>
</div>
</div>
    </div>
  )
}

export default LoginSignup