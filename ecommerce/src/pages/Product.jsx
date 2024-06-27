import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import BreadCrum from '../components/BreadCrum/BreadCrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'
import RelatedProducts from '../components/RelatedProducts/RelatedProducts'

const Product = () => {
  const {productId}=useParams()
 const {all_product}=useContext(ShopContext)
 const product=all_product.find((e)=>(Number(productId)===e.id))

  return (
    <div>
<BreadCrum product={product}/>
<ProductDisplay product={product}/>
<DescriptionBox/>
<RelatedProducts/>
    </div>
  )
}

export default Product