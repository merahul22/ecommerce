
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from "../src/components/Assets/banner_mens.png"
import women_banner from "./components/Assets/banner_women.png"
import kid_banner from "./components/Assets/banner_kids.png"
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
<Route path='/men' element={<ShopCategory  banner={men_banner} category="men"/>}></Route>
<Route path='/women' element={<ShopCategory  banner={women_banner} category="women"/>}></Route>
<Route path='/kids' element={<ShopCategory  banner={kid_banner} category="kid"/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
