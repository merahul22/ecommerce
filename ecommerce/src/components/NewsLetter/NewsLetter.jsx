import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>
            Get Exclusive offers on your mail
        </h1>
        <p>
            subscribe to our newsletter and stay updated
        </p>
        <div>
            <input type="email" placeholder='enter your mail here ' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter