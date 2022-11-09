import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Cart.module.scss';
import EmptyCart from './EmptyCart';
import ExistCart from './ExistCart';

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./data/CartData.json')
      .then(res => res.json())
      .then(data => setCartItem(data.cart));
  }, []);

  // useEffect(() => {
  //   fetch('http://localhost:8000/cart', {
  //     method: 'GET',
  //     headers: {
  //       authorization: token,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setCartItem(data.cart));
  // }, []);

  // useEffect(() => {
  //   fetch('http://localhost:8000/cart', {
  //     method: 'GET',
  //     headers: {
  //       authorization: localStorage.getItem('token'),
  //     },
  //     body: JSON.stringify({
  //       cart_item_id: cart_item_id,
  //       item_id: item_id,
  //       item_size_id: item_size_id,
  //       title: title,
  //       image: image,
  //       size: size,
  //       quantity: quantity,
  //       price: price,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result =>
  //       result.message === 'READ_CARTLIST'
  //         ? alert('장바구니에 제품이 담겼습니다.')
  //         : alert('장바구니가 비어있습니다.')
  //     );
  // });

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

  const handleQuantity = (id, quantity) => {
    setCartItem(items => {
      return items.map(item => {
        if (item.id === id) item.quantity = quantity;
        return item;
      });
    });
  };

  const refresh = () => {
    document.location.href = '/';
  };

  const goToCheckOut = () => {
    navigate('/checkout');
  };

  return (
    <div className={css.cartComponent}>
      {cartItem.length > 0 ? (
        <ExistCart
          deleteItem={deleteItem}
          totalPrice={totalPrice}
          handleQuantity={handleQuantity}
          refresh={refresh}
          cartItem={cartItem}
          setCartItem={setCartItem}
          goToCheckOut={goToCheckOut}
        />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
