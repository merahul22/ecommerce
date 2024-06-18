
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
function App() {
  return (
    < >
   <BrowserRouter>
   <Navbar/>
   <Routes>
<Route path='/' element={<Shop/>}></Route>
<Route path='/login' element={<LoginSignup/>}></Route>
<Route path='/product' element={<Product/>}>
 <Route path=':productId'> </Route>
</Route>
<Route path='/men' element={<ShopCategory category="men"/>}></Route>
<Route path='/women' element={<ShopCategory category="women"/>}></Route>
<Route path='/kids' element={<ShopCategory category="kids"/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
