import React from 'react';
import css from './EmptyCart.module.scss';

const EmptyCart = ({ closeCartModal }) => {
  return (
    <div className={css.emptyCartComponent} onClick={closeCartModal}>
      <div className={css.cartComponent}>
        <span className={css.emptyComment}>카트가 비어있습니다.</span>
      </div>
    </div>
  );
};

export default EmptyCart;
