import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Home from './Home/Home';
import Product from './Product/Product';
import MyPage from './MyPage/MyPage';
import CheckOut from './Checkout/CheckOut';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/checkOut" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
