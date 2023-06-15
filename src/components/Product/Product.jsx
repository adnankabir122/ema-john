import React from "react";

const Product = (props) => {
    
    const {id,img,name,price,seller} = props.value

    return (
        <div className="col-4 mb-3" >
            <div className="product-card border p-2 h-100">
                <img src={img} alt="" className="w-100 "/>
                <p>Name : {name}</p>
                <span>ID: {id}</span>
                <p>Price : {price}</p>
                <p>Seller : {seller}</p>
                <button onClick={()=> props.handleAddToCart(id)} className="btn btn-dark">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;
