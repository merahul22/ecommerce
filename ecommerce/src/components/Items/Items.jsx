import React from 'react'
import './Item.css'
const Items = (props) => {
  return (
    <div className='item'>
<img src={props.image} alt="" />
<p>{props.name}</p>
<div className='item-prices'>
<div className="item-prices-new">
<p>${props.new_price}</p>
</div>
<div className="item-prices-old">
<p>${props.old_price}</p>
</div>
</div>
    </div>
  )
}

export default Items