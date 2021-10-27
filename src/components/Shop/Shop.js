import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);
    const size = 10;

    useEffect(() => {
        fetch(`https://ema-john-ecommerce-server.herokuapp.com/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);


    useEffect(() => {
        const savedCart = getStoredCart();
        const keys = Object.keys(savedCart);
        console.log(keys)
        fetch('https://ema-john-ecommerce-server.herokuapp.com/products/byKeys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
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
            })
    }, [])


    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        addToDb(product.key);
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
            <div className="container-fluid mt-lg-2 pt-lg-5 mt-5 pt-3 d-flex flex-column">
                <div className=" col-lg-8 col-6 pt-5">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                    <Pagination className="justify-content-center">
                        {
                            [...Array(pageCount).keys()].map(number => <Pagination.Item key={number} onClick={() => setPage(number)}>{number + 1}</Pagination.Item>)
                        }
                    </Pagination>
                </div>
                <div className="col-lg-4 col-6 position-fixed end-0 pt-lg-4 pt-5 mt-lg-0 mt-5">
                    <div className=" mt-3">
                        <Cart cart={cart}>
                            <Link to="/order">
                                <Button variant="warning">Review Your Order</Button>{' '}
                            </Link>
                        </Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;