/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    
    
// eslint-disable-next-line react/prop-types, no-unused-vars
    const{img, name, seller, ratings, price} = props.product;

    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>           
           <img src={img} alt="" />
           
            <div className='product-info'>
             <h9 className='product-name'>{name}</h9>
             <p>Price: ${price}</p>
             <p>Manufacturer: {seller}</p>
             <p>Ratings: {ratings} Stars</p>
             
            </div>
            <button onClick={ () =>handleAddToCart(props.product)} 
            className='btn-cart'>
                Add To Cart
                <FontAwesomeIcon icon=  {faShoppingCart} />
                </button>

        </div>
    );
};

export default Product;