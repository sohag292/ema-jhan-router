import React from 'react'
import { useParams } from 'react-router-dom'
import fakeData from '../../fakeData/products.json'
import Product from '../Product/Product'


export default function Items() {
    const {productkey} = useParams()
    const product = fakeData.find(pd => pd.key === productkey);
    
  return (
    <div>
        <h1>Your Product details</h1>
        
        <Product showAddTocart={false} Product={product}></Product>
        
    </div>
  )
}
