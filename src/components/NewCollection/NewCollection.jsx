import React from 'react'
import './NewCollection.css'
import new_collection from "../Assets/new_collections.js"
import Items from '../Items/Items'
const NewCollection = () => {
  return (
    <div className='new-collection'>
<h1>New Collection</h1>
<hr />
<div className="new-collection-item">
{
    new_collection.map((items,i)=>{
     return (
    <Items  key={i}  id={items.id} name={items.name} old_price={items.old_price} new_price={items.new_price} image={items.image}/>
     )
    })
}
</div>

    </div>
  )
}

export default NewCollection