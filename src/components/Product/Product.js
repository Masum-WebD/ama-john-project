import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    const{ img,name,price,ratings,seller } = props.product
    const {handelToCart} =props
   
    return (
            <div className="col-md-4 mt-5 gx-5">
                <div className='card h-100 product'>
                <img  src={img} alt="" />
                <p>{name}</p>
                <h5>Price: ${price}</h5>
                <p> Manufacturer: {seller}</p>
                <p>Rating: {ratings} start</p><br /><br />
                <button onClick={()=>handelToCart(props.product)} className='btn-cart ' >
                    <p className=''>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
                </div>
                
                
               
            </div>   
    );
};

export default Product;