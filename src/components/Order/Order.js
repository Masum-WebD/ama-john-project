import React from 'react';
import useProducts from '../../Hooks/useProducts';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import './Order.css'

const Order = () => {
    const [products,setProducts] =useProducts()
    const [cart , setCart]= useCart(products)
    const handlerRemoveBtn=(product)=>{
       const rest = cart.filter(pd => pd.id !==product.id)
       setCart(rest)
       removeFromDb(product.id)
    }
    return (
        <div className='row '>
        <div className="col-md-10 col-8 m-0 justify-content-center">
            {
                cart.map(product =><OrderItem key={product.id} product={product}  handlerRemoveBtn={handlerRemoveBtn}/>)
            }
        </div>
        <div className="col-md-2 col-4 cart-detelais">
           <Cart cart={cart} >
               <Link to='/manage-inventory'>
                <button>Proceed product</button>
               </Link>
           </Cart>

        </div>
     </div>
    );
};

export default Order;