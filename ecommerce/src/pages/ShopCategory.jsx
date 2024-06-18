import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import drop_down from "../components/Assets/dropdown_icon.png"
import Items from '../components/Items/Items'
import './CSS/ShopCategory.css'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shopcategory'>
<img  className="shop-category-banner"src={props.banner} alt="" />
<div className="shop-category-indexsort">
  <p><span>
    showing 1-12
    </span> out of 36 products</p>
    <div className="shopcategory-sort">
      sort by <img src={drop_down} alt="" />
    </div>
</div>
<div className="shop-category-item">
  {all_product.map((items ,i)=>{
if(props.category===items.category){
  return <Items key={i} id={items.id} name={items.name} old_price={items.old_price} new_price={items.new_price} image={items.image}/>
}
else return null
  })}
</div>
<div className="shop-category-loadmore">
 Explore more
</div>
    </div>
  )
}

export default ShopCategory