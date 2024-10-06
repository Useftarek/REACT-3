import React, { useEffect, useState } from 'react'
import "../../styles/product.css"
import { useParams } from 'react-router-dom'
export default function SingleProudct() {
  
  const {id,title,price} = useParams();
  const [singleproduct, setsingleproduct] = useState([]);

  const fetchSinglePostApi = async () => {
  const res = await fetch (`https://fakestoreapi.com/products/${id}`);
  const finalRes = await res.json();
  setsingleproduct(finalRes);
 
}


useEffect(() => {
  fetchSinglePostApi();
}, []);

  
  return (
    <div className="container">
    <div className="card">
        
        <img src={singleproduct.image} />

     
        <div className="card-details">
            <h1>{singleproduct.title}</h1>
            <div className="price">${singleproduct.price}</div>
            <button className="add-to-cart">ADD TO CART</button>
          
            <div className="product-details">
              <h2>Product Details</h2>
                <p>
                    {singleproduct.description}
                </p>
            </div>
 
        </div>
    </div>
</div>
  )
}
