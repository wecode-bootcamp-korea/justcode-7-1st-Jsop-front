import React, { useState } from 'react';
import css from './Product.module.scss';
import FilterNav from '../../components/FilterNav/FilterNav';
import ProductAside from '../../components/Aside/ProductAside';
import ProductList from './ProductList';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
function Product() {
  const [openPage, setOpenPage] = useState(true);
  return (
    <div className={css.ProductPage}>
      <Header setPageOpen={setOpenPage} />
      {openPage && <FilterNav />}
      {openPage && <ProductList />}
      {openPage && <ProductAside />}
      {openPage && <Footer />}
    </div>
  );
}
export default Product;
