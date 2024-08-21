import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product,handleRemoveFromCart}) => {
    const {id,img,price,quantity,name} = product;
    return (
        <div className='review-item'>
           <img src={img} alt="" />
           <div className='review-details'>
            <p className='product-title'>{name}</p>
            <p>price:<samp className='price-text'>${price}</samp></p>
            <p>Quantity:<samp className='price-text'>${quantity}</samp></p>
           </div>
           <button className='btn-delete'>
           <FontAwesomeIcon onClick={()=> handleRemoveFromCart(id)} className='delete-icon' icon=  { faTrashAlt} />
           </button>
        </div>
    );
};

export default ReviewItem;