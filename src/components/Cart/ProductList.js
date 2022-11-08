import React from 'react';
import css from './ProductList.module.scss';

const ProductList = ({
  id,
  name,
  size,
  quantity,
  price,
  deleteItem,
  handleAdd,
  cartItem,
  setCartItem,
  itemPrice,
}) => {
  const count = [1, 2, 3, 4, 5];
  const sumPrice = e => {
    return e.price * e.count;
  };

  return (
    <div className={css.productList}>
      <div className={css.cartProductsList}>
        <span className={css.productName}>{name}</span>
        <span className={css.productSize}>{size}</span>
        <select
          className={css.productCount}
          defaultValue={quantity}
          onChange={handleAdd}
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
        <span className={css.productPrice}>{price}</span>
      </div>
    </div>
  );
};
export default ProductList;
