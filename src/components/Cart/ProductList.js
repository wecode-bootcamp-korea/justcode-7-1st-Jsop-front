import React from 'react';
import css from './ProductList.module.scss';

const ProductList = ({
  id,
  title,
  size,
  quantity,
  price,
  deleteItem,
  handleQuantity,
}) => {
  const count = [1, 2, 3, 4, 5];

  const changeQuantity = ({ target: { value } }) => {
    handleQuantity(id, value);
  };

  return (
    <div className={css.productList}>
      <div className={css.cartProductsList}>
        <span className={css.productName}>{title}</span>
        <span className={css.productSize}>{size}</span>
        <select
          className={css.productCount}
          defaultValue={quantity}
          onChange={changeQuantity}
        >
          {count.map(number => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
        <button
          className={css.deleteButton}
          onClick={() => {
            deleteItem(id);
          }}
        >
          삭제
        </button>
        <span className={css.productPrice}>
          ₩{' '}
          {(price * quantity)
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
        </span>
      </div>
    </div>
  );
};
export default ProductList;
