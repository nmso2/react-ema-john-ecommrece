import React from 'react';
import useProducts from '../../hooks/useProducts';

const Order = () => {
    const [products] = useProducts();
    return (
        <div className="pt-5 mt-5">
            <h2 className="mt-5 pt-5">This is order.</h2>
            <h2>{products.length}</h2>
        </div>
    );
};

export default Order;