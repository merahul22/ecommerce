import React, { useState } from 'react'
import logo from "../Assets/logo.png"
import cart_icon from '../Assets/cart_icon.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setmenu]=useState('')
  return (
    <div className='navbar'>
<div className="nav-logo">
<Link to="/"> 
<img src={logo} alt="" />
</Link>
<p>Shoppers</p>
</div>
<div className="nav-menu">
<ul>
    <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration:'none'}}to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("men")}}><Link style={{textDecoration:'none'}} to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
    <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
</ul>
</div>
<div className="nav-login-cart">
   <Link to="/login"> <button>Login</button></Link>
<Link to="/cart"><img src={cart_icon} alt="" />
</Link>
<div className="nav-cart-count">0</div>
</div>




    </div>
  )
}

export default Navbar