import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
  
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    const handelToCart =(product) =>{
        console.log(product)
        const newCart=[...cart, product]
        setCart(newCart)
    }
    return (
        <div className='row '>
           <div className=" row col-md-10 ">
             {
                 products.map(product => <Product product={product} key={product.id} handelToCart={handelToCart}></Product>)
             }
           </div>
           <div className="col-md-2 cart-detelais">
              <Cart cart={cart}></Cart>

           </div>
        </div>
        
    )
}
export default Shop