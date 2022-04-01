import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderItem.css'

const OrderItem = (props) => {
    const {handlerRemoveBtn,product}= props
    const {name,price,img,shipping,quantity} = product;
    return (
        <div className=' summary-item-container'>
           
            <div>
                <img src={img} alt="" />

            </div>
          <div className="cart-details-container">
          <div className="cart-details " >
                    <h4 className="product-name" title={name }>Name: {name.length > 20 ? name.slice(0,20)+'...' :name}</h4>
                    <p>Price: $<span>{price}</span> </p>
                    <p>Shipping: $<small>{shipping}</small> </p>
                    <p>Quantity: <small>{quantity}</small></p>
            </div>
          
            <div className="cart-button">
                <button onClick={()=>handlerRemoveBtn(product)} className='remove-btn'>
                    <FontAwesomeIcon className='remove-icon' icon={faTrashAlt}/>
                </button>
            </div>
          </div>
        </div>
    );
};

export default OrderItem;