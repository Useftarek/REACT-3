import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/product_card/ProductCard'

export default function Product() {

  const [product, setproduct]= useState ([]);
  const fetchPostsAPI = async () => {
      const res = await fetch ('https://fakestoreapi.com/products');
      const finalRes = await res.json();
      setproduct(finalRes);
  }
  useEffect(()=>{
    fetchPostsAPI();
  },[])
  return (
    <div className='product_container'>
      {product?.map((product)=>
        <ProductCard key={product.id} title = {product.title}  image={product.image} price={product.price} id = {product.id}/>
      )}
      
    </div>
    
  )
  
}
