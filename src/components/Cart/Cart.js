import React from 'react';
import './Cart.css'

const Cart = (props) => {
    let total = 0;
    props.cart.map(item => total = total + item.price)
    const tax = (total + 20) * 0.15;
    const deliveryCharge = 20;
    const totalBeforeTax = total + 20;
    const grandTotal = total + deliveryCharge + tax;
    return (
        <div className="cart">
            <p>Items: $ {total.toFixed(2)}</p>
            <p>Shipping &#38; Handling: $ {deliveryCharge}</p>
            <p>Total before tax: $ {props.cart.length === 0 ? 0 : totalBeforeTax.toFixed(2)}</p>
            <p>Estimated Tax:	$ {props.cart.length === 0 ? 0 : tax.toFixed(2)}</p>
            <h3>Order Total:	$ {props.cart.length === 0 ? 0 : grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;