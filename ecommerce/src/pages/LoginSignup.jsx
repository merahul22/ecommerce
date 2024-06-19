import React from 'react'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
<div className="loginignup-container">
<h1>signup</h1>
<div className="loginsignup-fields">
<input type="text" placeholder='enter your name' />
<input type="email" placeholder='enter your mail' />
<input type="password" placeholder='enter your password'/>
</div>
<button>continue</button>
<p>already have an account?<span>Login here </span></p>
</div>
<div className="loginsignup-agree">
  <input type="checkbox" name="" id="" />
  <p>By continuing ,i agree to term and policy</p>
</div>
    </div>
  )
}

export default LoginSignup