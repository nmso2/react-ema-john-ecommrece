import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { addToDb, clearTheCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])


    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        addToDb(product.key);
    }

    const confirmOrder = () => {
        clearTheCart();
        setCart([]);
    }

    const handleSearch = event => {
        const searchTect = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchTect.toLowerCase()));
        console.log(matchedProducts.length);
        setDisplayProducts(matchedProducts);
    }

    return (
        <div className="mt-lg-5 pt-lg-5">
            <div className="container-fluid mt-lg-2 mt-5 bg-white position-fixed" style={{ zIndex: '1' }}>
                <InputGroup onChange={handleSearch} type="text" className="mb-3 mt-3 mx-auto w-75">
                    <FormControl
                        placeholder="Search Product..."
                        aria-label="Example text with button addon"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <div className="container-fluid row mt-lg-2 pt-lg-5 mt-5 pt-3">
                <div className=" col-lg-8 col-12 pt-5">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className="col-lg-4 col-12 position-fixed end-0 pt-4 d-lg-block d-none">
                    <div className="">
                        <Cart cart={cart} confirmOrder={confirmOrder}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;