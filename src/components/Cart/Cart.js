import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let total = 0;
    let totalQuantity = 0;

    for (const product of props.cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    props.cart.map(item => total = total + item.price)
    const tax = (total + 20) * 0.15;
    const deliveryCharge = 20;
    const totalBeforeTax = total + 20;
    const grandTotal = total + deliveryCharge + tax;
    return (
        <div className="cart">
            <div className="cart-head">
                <h2>Order Summary</h2>
                <p>Items Ordered: {totalQuantity}</p>
            </div>
            <p>Items: $ {total.toFixed(2)}</p>
            <p>Shipping &#38; Handling: $ {props.cart.length === 0 ? 0 : deliveryCharge}</p>
            <p>Total before tax: $ {props.cart.length === 0 ? 0 : totalBeforeTax.toFixed(2)}</p>
            <p>Estimated Tax:	$ {props.cart.length === 0 ? 0 : tax.toFixed(2)}</p>
            <h3>Order Total:	$ {props.cart.length === 0 ? 0 : grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;