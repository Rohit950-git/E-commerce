import React from 'react'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignUp'
import Footer from './components/footer/Footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import Kid_banner from './components/Assets/banner_Kids.png'
import CheckOut from './pages/CheckOut'
import Payment from './components/Payment/Payment'


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory    banner={women_banner}category="women" />} />
          <Route path='/kids' element={<ShopCategory  banner={Kid_banner} category="kids" />} />
          <Route path="/Product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/payment' element={<Payment/>} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
