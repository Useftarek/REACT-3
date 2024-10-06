import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductCard({title,image,price,id}) {
  return (
    <Link to = {`/product/category/${id}/${title} ${price}`} className='product_card'>
        <img src={image}/>
        <h4>{title}</h4>
        <p>Price:{price}$</p>
    </Link>
  )
}
