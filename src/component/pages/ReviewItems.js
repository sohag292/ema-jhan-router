import React from 'react'

export default function ReviewItems(props) {
    const {name, quantity,img,key, price}= props.product;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'

    };
  return (
    <div style={reviewItemStyle}>
        <h4 className='product-name'>{name}</h4>
        <p>Quantity: {quantity}</p>
        <p><small>${price}</small></p>
        <br />
        <button className='main-button' onClick={()=>props.removeProduct(key)}>Remove </button>
    </div>
  )
}
