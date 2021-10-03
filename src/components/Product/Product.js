import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import { Button } from 'react-bootstrap';

const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="row">
                <div className=" col-lg-5 col-12">
                    <img src={img} alt="" />
                </div>
                <div className="col-lg-7 col-12 text-lg-start mb-1">
                    <h4 className="product-name">{name}</h4>
                    <p><small>By:{seller}</small></p>
                    <p>${price}</p>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <Rating
                        initialRating={star}
                        readonly
                        emptySymbol="far fa-star text-warning"
                        fullSymbol="fas fa-star text-warning"
                    /> <br /><br />
                    <Button onClick={() => props.handleAddToCart(props.product)} variant="warning">{cartIcon} Add To Cart</Button>{' '}
                </div>
            </div>
            <hr />
        </div>

    );
};

export default Product;