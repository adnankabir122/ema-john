import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    };

    useEffect(() => {
        fetch("fakeData/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-9">
                        <section className="shop-section">
                            <p>Number of Products : {products.length}</p>
                            <div className="container">
                                <div className="row">
                                    {products.map((value, index) => (
                                        <Product
                                            key={index}
                                            value={value}
                                            handleAddToCart={handleAddToCart}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="col-3">
                        <Cart cart = {cart} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
