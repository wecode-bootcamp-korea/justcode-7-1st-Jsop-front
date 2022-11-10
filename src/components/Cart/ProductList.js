import React, { useEffect } from 'react';
import css from './ProductList.module.scss';

const ProductList = ({
  id,
  title,
  size,
  quantity,
  price,
  handleQuantity,
  deleteItem,
}) => {
  const count = [1, 2, 3, 4, 5];
  const OnChangeQuantity = ({ target: { value } }) => {
    useEffect(() => {
      fetch('http://localhost:8000/cart', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
        body: JSON.stringify({
          item_id: id,
          quantity: value,
        }),
      })
        .then(response => response.json())
        .then(result =>
          result.message === 'UPDATE_SUCCESSFULLY'
            ? (alert('수량이 변경되었습니다.'), handleQuantity(id, value))
            : alert('다시 시도해주세요.')
        );
    });
  };

  return (
    <div className={css.productList}>
      <div className={css.cartProductsList}>
        <span className={css.productName}>{title}</span>
        <span className={css.productSize}>{size}</span>
        <select
          className={css.productCount}
          value={quantity}
          onChange={OnChangeQuantity}
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
