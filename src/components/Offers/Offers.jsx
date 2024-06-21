import React from 'react'
import './Offers.css'
import exclusive_img from "../Assets/exclusive_image.png"
const Offers = () => {
  return (
    <div className='offers'>
<div className="offers-left">
  <h2>Exclusive</h2>
  <h2>Offers for you</h2>
  <p>only on best seller product</p>
  <button>check now</button>
</div>
<div className="offers-right">
<img src={exclusive_img} alt="" />
</div>
    </div>
  )
}

export default Offers