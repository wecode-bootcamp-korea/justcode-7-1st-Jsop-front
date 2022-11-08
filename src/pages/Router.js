import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Product from './Product/Product';
import MyPage from './MyPage/MyPage';
import CheckOut from './Checkout/CheckOut';
import ProductDetail from './ProductDetail/ProductDetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
