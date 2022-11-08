import React, { useState, useEffect } from 'react';
import css from './Cart.module.scss';
import ProductList from './ProductList';

const Cart = ({ openCart }) => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetch('./data/CartData.json')
      .then(res => res.json())
      .then(data => setCartItem(data.cart));
  }, []);

  const deleteItem = id => {
    setCartItem(cartItem.filter(cart => cart.id !== id));
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const totalPrice = cartItem.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);

  const handleAdd = (id, quantity) => {
    setCartItem(items => {
      return items.map(item => {
        if (item.id === id) item.quantity = quantity;
        return item;
      });
    });
  };

  return (
    <div className={css.cartCompenent}>
      <div className={css.cartProducts}>
        <div className={css.cartProductsHeader}>
          <div>카트</div>
          <div>사이즈</div>
          <div>수량</div>
          <button className={css.exitButton} onClick={openCart}>
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
                id={product.id}
                title={product.title}
                size={product.size}
                quantity={product.quantity}
                price={product.price}
                deleteItem={deleteItem}
                handleAdd={handleAdd}
                totalPrice={totalPrice}
                cartItem={cartItem}
                setCartItem={setCartItem}
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
          <span className={css.totalPrice}>
            {' '}
            ₩{' '}
            {totalPrice
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          </span>
        </div>
        <div className={css.payModule}>
          <button className={css.payButton}>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
