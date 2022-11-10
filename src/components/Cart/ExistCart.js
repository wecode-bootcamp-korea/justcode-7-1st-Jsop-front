import React from 'react';
import css from './ExistCart.module.scss';
import ProductList from './ProductList';

const ExistCart = ({
  totalPrice,
  handleQuantity,
  cartItem,
  setCartItem,
  goToCheckOut,
  closeCartModal,
}) => {
  const deleteItem = id => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/cart', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        item_id: id,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'DELETE_SUCCESSFULLY') {
          setCartItem(cartItem.filter(cart => cart.item_id !== id));
          alert('삭제 완료!');
        } else {
          alert('문제있음');
        }
      });
  };

  return (
    <div className={css.cartComponent}>
      <div className={css.cartProducts}>
        <div className={css.cartProductsHeader}>
          <div>카트</div>
          <div>사이즈</div>
          <div>수량</div>
          <button className={css.exitButton} onClick={closeCartModal}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
              alt="exitBtn"
            />
          </button>
        </div>
        <div className={css.cartProductsList}>
          {cartItem.map((product, idx) => {
            return (
              <ProductList
                key={idx}
                id={product.item_id}
                title={product.title}
                size={product.size}
                quantity={product.quantity}
                price={product.price}
                deleteItem={deleteItem}
                handleQuantity={handleQuantity}
                totalPrice={totalPrice}
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
          <button className={css.payButton} onClick={goToCheckOut}>
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExistCart;
