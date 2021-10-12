import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { Button } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import ReviewOrder from '../ReviewOrder/ReviewOrder';
import { useHistory } from 'react-router';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const histoty = useHistory();
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const placeOrder = () => {
        histoty.push('/shipping');
        // clearTheCart();
        // setCart([]);
    }

    return (
        <div className="container-fluid mt-lg-2 pt-lg-5 mt-5 pt-3 d-flex flex-column">
            <div className=" col-lg-8 col-6 pt-5 mt-3">
                {
                    cart.map(product => <ReviewOrder product={product}
                        key={product.key}
                        handleRemove={handleRemove}></ReviewOrder>)
                }
            </div>
            <div className="col-lg-4 col-6 position-fixed end-0 pt-5 mt-3">
                <Cart cart={cart}>
                    <Button onClick={placeOrder} variant="warning">Proceed to Shippin</Button>{' '}
                </Cart>
            </div>
        </div>
    );
};

export default Order;