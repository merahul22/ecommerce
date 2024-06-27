import React, { useContext } from 'react'
import "./CartItem.css"
import cross_icon from "../Assets/cart_cross_icon.png"
import { ShopContext } from '../../context/ShopContext'
const CartItem = () => {
   const {all_product,CartItem,removefromcart,getTotalCartValue} = useContext(ShopContext)
  return (
    <div className='cartitem'>
<div className="cartitem-format-main">
    <p>Product</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>remove</p>
</div>
<hr />
{
   all_product.map((e)=>{
if(CartItem[e.id]>0){
    return <div>
   <div className="cartitem-format">
     <img src={e.image} alt=""  className='cartitem-product-icon'/>
     <p>{e.name}</p>
     <p>{e.new_price}</p>
     <button className='cartitem-quantity'>
         {CartItem[e.id]}
      </button>
     <p>{e.new_price*CartItem[e.id]}</p>
   <img src={cross_icon} alt="" onClick={()=>(removefromcart(e.id))} className='cartitem-remove-icon'/>
 </div>
 <hr />
    </div>
}

   })
}
<div className="cartitem-down">
    <div className="cartitem-total">
        <h1>cartTotal</h1>
        <div className="cartitem-total-item">
            <p>subTotal</p>
            <p>${getTotalCartValue()}</p>
        </div>
        <hr />
        <div className="cartitem-total-item">
            <p>shipping fee</p>
            <p>free</p>
        </div>
        <hr />
        <div className="cartitem-total-item">
        <p>subTotal</p>
        <p>${getTotalCartValue()}</p>
        </div>
        <button>Proceed TO Checkout</button>
    </div>
    <div className="cartitem-promocode">
        <p>if u have any promocode apply below</p>
     <div className="cartitem-promobox">
     <input type="text"  placeholder='apply promocode'/>
     <button>submit</button>
     </div>
    </div>
</div>
    </div>
  )
}

export default CartItem