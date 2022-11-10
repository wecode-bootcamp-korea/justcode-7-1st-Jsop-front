import React from 'react';
import css from './MainProduct.module.scss';
import Aside from '../../components/Aside/Aside';

function MainProduct() {
  return (
    <div className={css.wrap}>
      <img className={css.MainPageImage} src="/images/mountain.jpeg" alt="" />
      <div className={css.product}>
        <img className={css.logo} src="/images/logo-white.png" alt="" />
        <div className={css.aside}>
          <Aside asideName="mainAside" />
        </div>
      </div>
    </div>
  );
}
export default MainProduct;
