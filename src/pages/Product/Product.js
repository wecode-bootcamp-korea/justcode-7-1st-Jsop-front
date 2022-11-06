import React from 'react';
import css from './Product.module.scss';
import FilterNav from '../../components/FilterNav/FilterNav';
import ProductAside from '../../components/Aside/ProductAside';

function Product() {
  return (
    <div className={css.ProductPage}>
      <FilterNav />
      <ProductAside />
    </div>
  );
}
export default Product;
