import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
    }
    return (
        <div className="container-fluid row mt-lg-2 pt-lg-5 mt-5 pt-3">
            <div className=" col-lg-8 col-12 pt-5 mt-3">
                {
                    cart.map(product => <ReviewOrder product={product}
                        key={product.key}
                        handleRemove={handleRemove}
                        deleteFromDb={deleteFromDb}></ReviewOrder>)
                }
            </div>
            <div className="col-lg-4 col-12 position-fixed end-0 pt-5 mt-3 d-lg-block d-none">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;