import useProducts from '../../Hooks/useProducts';
import { addToDb, getStorageAdd } from '../../utilities/fakedb';
import useCart from '../../Hooks/useCart';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products,setProducts] = useProducts()
    const [cart , setCart]=useCart(products)

   
  
 

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
              <Cart cart={cart}>
                  <Link to='/order'>
                    <button>Review Order</button>
                  </Link>
              </Cart>

           </div>
        </div>
        
    )
}
export default Shop