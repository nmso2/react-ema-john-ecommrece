import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[]);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product=><Product product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Items Ordered: 0</p>
                <div>
                    <p>Items:	$0</p>
                    <p>Shipping &#38; Handling:	$0</p>
                    <p>Total before tax:	$0</p>
                    <p>Estimated Tax:	$0</p>
                    <h3>Order Total:	$0</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;