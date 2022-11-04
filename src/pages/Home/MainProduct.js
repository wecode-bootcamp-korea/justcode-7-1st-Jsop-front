import React from 'react';
import css from './MainProduct.module.scss';
import MainAside from '../../components/Aside/MainAside';

function MainProduct() {
  return (
    <div className={css.wrap}>
      <img className={css.MainPageImage} src="/images/mountain.jpeg" alt="" />
      <div className={css.product}>
        <img className={css.logo} src="/images/logo-white.png" alt="" />
        <div className={css.aside}>
          <MainAside />
        </div>
      </div>
    </div>
  );
}
export default MainProduct;
