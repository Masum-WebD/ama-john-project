import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import { Route, Routes } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div >
          <MenuBar></MenuBar>
         <Routes>
           <Route path='/' element={<Shop></Shop>}></Route>
           <Route path='/Home' element={<Shop></Shop>}></Route>
           <Route path='/order' element={<Order></Order>}></Route>
           <Route path='/manage-inventory' element={<Inventory/>} ></Route>
         </Routes>
         {/* <Shop></Shop> */}
         
    </div>
  );
}

export default App;
