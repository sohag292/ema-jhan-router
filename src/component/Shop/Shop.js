import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../../fakeData/products.json';
import Product from '../Product/Product';
import Cart from '../cart/Cart';
import './Shop.css'

import { useEffect } from 'react';

import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
function Shop() {
    const [products, setProducts]=useState(Data);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const savedKeys = Object.keys(savedCart);
        
        const prevCart = savedKeys.map(existingKey => {
            const product = Data.find(pd => pd.key === existingKey);
            product.quantity = savedCart[existingKey];
            return product;
        })
        setCart(prevCart);
    }, []);

    const handleAddProduct = (product)=>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
            // console.log(sameProduct);
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);

    }

    return (
        <div className='twin-container'>
            <div className="product-container">
                
                    {
                        products.map((product, index) => <Product key={product.key}  showAddTocart={true}  handleAddProduct={handleAddProduct} Product={product}> </Product>)
                    }
               
            </div>
            <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className='main-button'>Review Order</button>
                        </Link>
                    </Cart>
                    
            </div>
        </div>
    );
}

export default Shop;