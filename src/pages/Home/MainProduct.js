import React from 'react';
import css from './MainProduct.module.scss';
import Aside from '../../components/Aside/MainAside';

function MainProduct() {
  return (
    <div className={css.wrap}>
      <img src="/images/main.jpg" alt="" />
      <div className={css.product}>
        <div className={css.logo}>Jsop</div>
        <div className={css.aside}>
          <Aside />
        </div>
      </div>
      <div className={css.MainProduct}>
        <img src="/images/mainProduct.png" alt="" />
      </div>
    </div>
  );
}
export default MainProduct;
