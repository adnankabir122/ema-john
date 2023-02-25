import React from 'react'
import "./ProductCard.scss"
import { BsFillCartPlusFill } from 'react-icons/bs';


const ProductCard = (props) => {
  const {name,category,price,img} = props.data 
  
  return (
    <div className='product-card'>
      <img src={img} alt="" />
      <h2>Name: {name}</h2>
      <h4>Category: {category}</h4>
      <h4>Price: {price}</h4>
      <button onClick={() => props.handleAddToCart(props.data)}>Add to Cart <BsFillCartPlusFill/></button>
    </div>
  )
}

export default ProductCard
