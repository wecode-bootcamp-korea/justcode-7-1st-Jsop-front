import React, { useState, useEffect } from 'react';
import css from './Cart.module.scss';
import ProductList from './ProductList';

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch('./data/CartData.json')
      .then(res => res.json())
      .then(data => setCartItem(data.cart));
  }, []);

  return (
    <div className={css.cartCompenent}>
      <div className={css.cartProducts}>
        <div className={css.cartProductsHeader}>
          <div>카트</div>
          <div>사이즈</div>
          <div>수량</div>
          <button className={css.exitButton}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
              alt="exitBtn"
            />
          </button>
        </div>
        <div className={css.cartProductsList}>
          {cartItem.map(product => {
            return (
              <ProductList
                key={product.id}
                name={product.name}
                size={product.size}
                quantity={product.quantity}
                price={product.price}
              />
            );
          })}
        </div>
      </div>
      <div className={css.cartPriceComponent}>
        <div className={css.cartcomment}>
          전 제품 무료 배송 혜택을 즐겨보아요
        </div>
        <div className={css.cartPrice}>
          <span>소계(세금 포함)</span>
          <span className={css.totalPrice}>₩123,000</span>
        </div>
        <div className={css.payModule}>
          <div></div>
          <button className={css.payButton}>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
