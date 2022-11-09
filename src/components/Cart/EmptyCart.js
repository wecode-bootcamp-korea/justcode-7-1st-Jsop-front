import React from 'react';
import css from './EmptyCart.module.scss';

const EmptyCart = () => {
  return (
    <div className={css.emptyCartComponent}>
      <span className={css.emptyComment}>카트가 비어있습니다.</span>
    </div>
  );
};

export default EmptyCart;
