import './App.css';
import Navbar from './Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory category="men"/>} />
        <Route path='/womens' element={<ShopCategory category="women"/>} />
        <Route path='/kids' element={<ShopCategory category="kid"/>} />
        <Route path='/Product' element={<Product/>}>
          <Route path=':productId' element={<Product/>} />
          </Route>
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App