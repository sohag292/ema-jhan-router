import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData/products.json'
import {getDatabaseCart, processOrder, removeFromDatabaseCart} from '../../utilities/databaseManager'
import ReviewItems from './ReviewItems';
import Cart from '../cart/Cart';
import happyImage from '../../images/giphy.gif'

export default function Review() {
  const [cart, setCart] = useState([]);
  const [orderPlace, setOrderPlace]= useState(false)

  const handlePlaceOrder = () =>{
    setCart([]);
    setOrderPlace(true);
    processOrder();
  }
  const removeProduct =(productkey)=>{
    // console.log("remove Clicked", productkey);
    const newCart = cart.filter(pd=>pd.key !== productkey);
    setCart(newCart);
    removeFromDatabaseCart(productkey)
  }
  useEffect(() => {
    // cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map(key => {
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
    });
    setCart(cartProducts);
}, [])

let thankyou;
if(orderPlace){
  thankyou = <img src={happyImage} alt="" />
}

  return (
    <div className='twin-container'>
        <div className='product-container'>
        
         {
          cart.map(pd => <ReviewItems key={pd.key} removeProduct={removeProduct} product={pd}></ReviewItems>)
         }

        {
          thankyou
        }
        </div>
        <div className='cart-container'>
              <Cart cart={cart}>
                    <button className='main-button' onClick={handlePlaceOrder}>Place order</button>
              </Cart>
        </div>
    </div>
  )
}
