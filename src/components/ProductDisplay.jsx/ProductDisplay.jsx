import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import stardull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
const {addtocart}  = useContext(ShopContext)
const {product}=props
  return (
    <div className='productdisplay'>
<div className="productdisplay-left">
<div className="productdisplay-img-list">
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
</div>
<div className="productdisplay-img">
    <img className='productdisplay-main-img' src={product.image} alt="" />
</div>
</div>
<div className="productdisplay-right">
    <h1>{product.name}</h1>
    <div className="productdisplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={stardull_icon} alt="" />
        <p>(122)</p>
    </div>
    <div className="productdisplay-right-prices">
     <div className="productdisplay-right-prices-old">
        ${product.old_price}
     </div>
     <div className="productdisplay-right-prices-new">
        ${product.new_price}
     </div>
    </div>
    <div className="productdisplay-right-description">
       <p> A light weight and coloured cotten ,close fitting ,worn as underpant ,winterwear or outergarment </p>
    </div>
    <div className="productdisplay-right-size">
        <h1>Select size</h1>
   <div className="productdisplay-right-select-size">
   <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
   </div>
    </div>
    <button onClick={()=>{
        addtocart(product.id)
    }}>ADD TO CART</button>
    <div className="productdisplay-right-category">
        <p><span>Categpry:</span> Women,Tshirt, croptop</p>
    </div>
    <div className="productdisplay-right-category">
        <p><span>Tags:</span> Modern , latest</p>
    </div>


</div>
    </div>
  )
}

export default ProductDisplay