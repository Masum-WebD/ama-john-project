import React, { useEffect, useState } from 'react';
import { addToDb, getStorageAdd } from '../../utilities/fakedb';
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
    useEffect(() =>{
        const shoredCart= getStorageAdd()
        const saveCart=[]
        for (const id in shoredCart) {
           const addedCart = products.find(product => product.id === id)
           
          if(addedCart){
              const quantity=shoredCart[id]
              addedCart.quantity=quantity
              saveCart.push(addedCart)

          }
        }
        setCart(saveCart)

    },[products])
    const handelToCart =(selectedProduct) =>{
        let newCart =[]
        const exists=cart.find(product => product.id === selectedProduct.id)
        if(!exists){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity=exists.quantity +1
            newCart=[...rest,exists]
        }
        
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='row '>
           <div className=" row col-md-10 col-8">
             {
                 products.map(product => <Product product={product} key={product.id} handelToCart={handelToCart}></Product>)
             }
           </div>
           <div className="col-md-2 col-4 cart-detelais">
              <Cart cart={cart}></Cart>

           </div>
        </div>
        
    )
}
export default Shop