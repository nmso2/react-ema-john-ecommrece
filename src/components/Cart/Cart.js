import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import './Cart.css'

const Cart = (props) => {
    let total = 0;
    let totalQuantity = 0;

    const [orderedCart, setOrderedCart] = useState([]);

    useEffect(() => {
        if (props.cart.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = props.cart.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct)
                }
            }
            setOrderedCart(storedCart);
        }
    }, [props.cart])

    for (const product of orderedCart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }



    orderedCart.map(item => total = total + item.price * item.quantity);
    const tax = total * 0.15;
    const deliveryCharge = 20;
    const totalBeforeTax = total + 20;
    const grandTotal = total + deliveryCharge + tax;

    return (
        <div className="cart">
            <div>
                <h2>Order Summary</h2>
                <p>Items Ordered: {props.cart.length === 0 ? 0 : totalQuantity}</p>
            </div>
            <p>Items: $ {props.cart.length === 0 ? 0 : total.toFixed(2)}</p>
            <p>Shipping &#38; Handling: $ {props.cart.length === 0 ? 0 : deliveryCharge}</p>
            <p>Total before tax: $ {props.cart.length === 0 ? 0 : totalBeforeTax.toFixed(2)}</p>
            <p>Estimated Tax:	$ {props.cart.length === 0 ? 0 : tax.toFixed(2)}</p>
            <h3>Order Total:	$ {props.cart.length === 0 ? 0 : grandTotal.toFixed(2)}</h3>
            <div>
                <button className="cart-btn" onClick={props.confirmOrder} >Confirm</button>
            </div>
        </div>
    );
};

export default Cart;