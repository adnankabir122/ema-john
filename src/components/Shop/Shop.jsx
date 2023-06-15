import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    
    const handleAddToCart = (id)=>{
        console.log(`clicked id: ${id}`)
    }

    useEffect(() => {
        fetch("fakeData/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <h4>Shop Component</h4>
            <p>
                Number of Products : {products.length}
            </p>

            <div className="container">
                <div className="row">
                    {products.map((value, index) => (
                        <Product key={index} value={value} handleAddToCart = {handleAddToCart} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Shop;
