import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Shop.scss";

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart,setCart] = useState([])
  
  const handleAddToCart=(product)=>{
      const newCart = [...cart,product]
      setCart(newCart)
  } 
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="shop-area mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="products-area">
              {/* Product Card Container Start */}
              <div className="row">
                
                  {
                    products.map((ektaProduct) =>(
                        <div className="col-lg-4 mb-3">
                            <ProductCard data={ektaProduct} handleAddToCart={handleAddToCart}/>
                        </div>
                    ))
                  }
                
              </div>
              {/* Product Card Container End */}
            </div>
          </div>

          {/* Cart Start */}
          <div className="col-lg-2">
            <div className="cart-area">
              <h4>Cart</h4>
              <div className="cart-info">
                <h4>Order Summary</h4>
                <p>Selected Items : {cart.length}</p>
              </div>
            </div>
          </div>
          {/* Cart End  */}
        </div>
      </div>
    </section>
  );
};

export default Shop;
