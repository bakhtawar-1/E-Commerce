import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop'; // Adjust the path based on your file structure
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/banner_women.jpg'
import men_banner from './Components/Assets/banner_mens.png'
import kid_banner from './Components/Assets/banner_kids.jpg'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory  banner={women_banner} category="women" bannerStyle={{ width:'150', height: '450px' }}/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" bannerStyle={{  height: '420px' }}/>}/>


        <Route path="product" element={<Product />}>
        <Route path=':productId' element={<Product/>} />
        </Route >
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>

    </div>
  );
}

export default App;
