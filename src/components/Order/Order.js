import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className="pt-5 mt-5">
            <h2 className="mt-5 pt-5">This is order.</h2>
            <h2>{products.length}</h2>
            <h2>{cart.length}</h2>
            
        </div>
    );
};

export default Order;