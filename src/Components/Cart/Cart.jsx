/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart =({cart,handleClearCart,children})=> {



    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity===0){
            product.quantity=1;
        }



        total = total + product.price * product.quantity;
        totalShipping=totalShipping+product.shipping;
        quantity = quantity+ product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total+totalShipping+tax;
       
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price:$ {total} </p>
            <p>Shipping Price:$ {totalShipping} </p>
            <p>Tax:$ {tax.toFixed(2)}</p>
            <h6>Grand Total:$ {grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <samp>Clear Cart</samp>
                <FontAwesomeIcon icon=  { faTrashAlt} /> 
            </button>
            {children}
        </div>
    );
}

export default Cart;