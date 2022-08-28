import React from 'react';


function cart(props) {
    const cart = props.cart;
    // const total = cart.reduce( (total, prd)=> total + prd.price, 0)
    console.log(cart);
    let total = 0;
    for(let i =0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
        // debugger;
      
    }

    let shipping = 0;

    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping= 12.99;
    }

     const tax = (total /10).toFixed(2);
     const gandTotal = (total + shipping + Number(tax)).toFixed(2);

     const formatNumber = num =>{
         const precision = num.toFixed(2);
         return Number(precision)
     }



    
    return (
        <div>
            <h4>This is cart</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
             <p>Total Price: {gandTotal}</p>
             {/* <Link to="/review">
                <button className='main-button'>Review Order</button>
             </Link> */}
             {
                props.children
             }
        </div>
    );
}

export default cart;