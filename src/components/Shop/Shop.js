import React from 'react';
import './Shop.css'
const Shop = () => {
    return (
        <div className="shop-container">
            <div className="product-container">
                <h2>product</h2>
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