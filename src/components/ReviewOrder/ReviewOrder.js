import React from 'react';
import { Button } from 'react-bootstrap';

const ReviewOrder = (props) => {
    const { name, price, quantity, key } = props.product;
    const { handleRemove } = props;

    return (
        <div className="text-start">
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <Button onClick={() => {
                handleRemove(key);
            }} variant="warning">Remove</Button>{' '}
            <hr />
        </div>
    );
};

export default ReviewOrder;