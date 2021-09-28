import './Product.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>By:{seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                /> <br /><br />
                <button className="common-btn" onClick={() => props.handleAddToCart(props.product)}>{cartIcon} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;