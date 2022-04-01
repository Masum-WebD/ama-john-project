import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}= props
    let total = 0;
    let charge = 0;
    let GrandTotal = 0;
    let tax;
    let quantity=0;
    for(const product of cart){
        
        total =total + product.price * product.quantity
        quantity=quantity+product.quantity
        charge += product.shipping
       tax=parseFloat((total*0.1).toFixed(2))
        GrandTotal = total + charge +tax
    }
    return (
        <div className="cart-container">
            <h2>Cart Detelais </h2>
              <p>Selected items  : {quantity}</p>
              <p>Total: ${total}</p>
              <p>Total shopping charge: ${charge}</p>
              <p>Tax: ${tax}</p>
              <h5>Grand Total: ${GrandTotal}</h5>
              {
                  props.children
              }
        </div>
    );
};

export default Cart;