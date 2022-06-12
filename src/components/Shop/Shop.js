import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] =useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newcart = [...cart,product];
        setCart(newcart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} 
                    handleAddToCart={handleAddToCart}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p><big>Selected items : {cart.length}</big></p>
            </div>
        </div>
    );
};

export default Shop;