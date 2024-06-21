import React from 'react'
import "./RelatedProducts.css"

import Items from '../Items/Items'
import data_product from '../Assets/data'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
<h1>Related Products</h1>
<hr />
<div className="relatedproducts-item">
    {
        data_product.map((items,i)=>{
        return (
            <Items  key={i}  id={items.id} name={items.name} old_price={items.old_price} new_price={items.new_price} image={items.image}/>
        )
        })
    }
</div>

    </div>
  )
}

export default RelatedProducts