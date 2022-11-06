import React from 'react';
import css from './ProductList.module.scss';

const ProductList = ({ name, size, quantity, price }) => {
  const count = [1, 2, 3, 4, 5];
  return (
    <div className={css.productList}>
      <div className={css.cartProductsList}>
        <span className={css.productName}>{name}</span>
        <span className={css.productSize}>{size}</span>
        <select className={css.productCount} defaultValue={quantity}>
          {count.map(number => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <button className={css.deleteButton}>삭제</button>
        <span className={css.productPrice}>₩{price}</span>
      </div>
    </div>
  );
};

export default ProductList;
