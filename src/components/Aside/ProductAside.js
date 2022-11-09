import React from 'react';
import Aside from '../../components/Aside/Aside';
import css from './ProductAside.module.scss';

function ProductAside() {
  return (
    <div className={css.containerWrap}>
      <div className={css.leftContainer}>
        <Aside asideName="content1" />
        <img
          src="https://www.aesop.com/u1nb1km7t5q7/XEB67WCMLba5bTtJcsrck/2c80d762e8623a485ac2ad734e67f50a/Aesop-Skin-Types-Hybris-Homepage-Secondary-Mid-Desktop-1690x950px.jpg"
          alt="향수 이미지"
        />
      </div>
    </div>
  );
}
export default ProductAside;
