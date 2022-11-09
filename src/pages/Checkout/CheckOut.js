import React, { useState, useEffect } from 'react';
import css from './CheckOut.module.scss';
import Shipping from './miniPage/Shipping';
import Pay from './miniPage/Pay';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const [data, setData] = useState({});
  const [cartData, setCartData] = useState({});

  const [address, setAddress] = useState('');
  const [subAddress, setSubAddress] = useState('');
  const [zip, setZip] = useState('우편번호를 입력하여 주세요.');

  const [pay, setPay] = useState('결제 정보를 선택하여 주세요.');
  const [open, setOpen] = useState(false);
  const [payOpen, setPayOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/getme', {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setData(result.userInfo));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/orders/contract', {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.zipcode) {
          setZip(result.zipcode);
          setAddress(result.street_address);
          setSubAddress(result.supplimental_address);
        } else {
          setZip('우편번호를 입력하여 주세요');
        }
      });
  }, [data]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/cart', {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setCartData(result);
      });
  }, []);

  const orderhandle = () => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/orders', {
      method: 'POST',
      headers: {
        authorization: token,
      },
    });
    navigate('/mypage');
  };

  let email = data.email;
  let lastName = data.last_name;
  let firstName = data.first_name;
  let total = 0;
  return (
    <div className={css.container}>
      <div className={css.firstBox}>
        <img src="logo-black.png" alt="logo" />
      </div>
      <div className={css.secondBox}>
        <h2>주문자 정보</h2>
        <div className={css.info}>
          <h3>
            {lastName} {firstName} 님
          </h3>
          <h3>{email}</h3>
        </div>

        <h2>배송 정보</h2>
        <button onClick={() => setOpen(!open)}>편집</button>
        {open && (
          <Shipping
            firstName={firstName}
            lastName={lastName}
            email={email}
            address={address}
            subAddress={subAddress}
            zip={zip}
            setAddress={setAddress}
            setSubAddress={setSubAddress}
            setZip={setZip}
            open={setOpen}
          />
        )}
        {!open && (
          <div className={css.delivery}>
            <h3>
              {lastName} {firstName} 님
            </h3>
            <h3>
              {address} {subAddress}
            </h3>
            <h3>{zip}</h3>
            <h4>무료배송 ₩0</h4>
          </div>
        )}

        <h2>어떻게 지불하시겠습니까?</h2>
        <button onClick={() => setPayOpen(!payOpen)}>편집</button>
        {payOpen && <Pay pay={pay} setPay={setPay} setOpen={setPayOpen} />}
        {!payOpen && !open && (
          <div className={css.pay}>
            <h3>{pay}</h3>
          </div>
        )}

        <h2>구매 예정 상품 확인</h2>
        <div className={css.orderForm}>
          <div className={css.summary}>
            {cartData.data &&
              cartData.data.map((m_data, idx) => {
                total += Number(m_data.price * m_data.quantity);

                return (
                  <div className={css.product} key={idx}>
                    <p>제품명:{m_data.title}</p>
                    <div className={css.priceSize}>
                      <p className={css.left}>
                        가격: ₩{m_data.price} X {m_data.quantity}
                      </p>
                      <p className={css.right}>사이즈:{m_data.size}</p>
                    </div>
                  </div>
                );
              })}
            <div className={css.deliveryInfo}>
              <p className={css.d_left}> 배송 방법</p>
              <p className={css.d_right}> -무료배송</p>
            </div>
          </div>
        </div>
        <p className={css.totalPrice}> 합계 : {total}</p>
        <button onClick={orderhandle} className={css.finishBtn}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
