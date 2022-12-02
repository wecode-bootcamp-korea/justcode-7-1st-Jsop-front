import React from 'react';
import css from './Shipping.module.scss';

const Shipping = ({
  setAddress,
  setSubAddress,
  setZip,
  address,
  subAddress,
  zip,
  open,
  firstName,
  lastName,
}) => {
  const postInfo = () => {
    const token = localStorage.getItem('token');
    fetch(`${process.env.REACT_APP_API_URL}/orders/contract`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: token,
      },
      body: JSON.stringify({
        zipcode: zip,
        street_address: address,
        supplimental_address: subAddress,
      }),
    })
      .then(response => response.json())
      .catch(e => console.log('err:' + e));
    open(false);
  };

  return (
    <div className={css.container}>
      <span className={css.NameinputSpan}>성</span>
      <input
        readOnly
        className={css.lastInput}
        style={{ color: '#8e8c8c' }}
        type="text"
        value={lastName}
      />

      <span className={css.NameinputSpan}>이름</span>
      <input
        readOnly
        className={css.firstInput}
        style={{ color: '#8e8c8c' }}
        type="text"
        value={firstName}
      />

      <span className={css.inputSpan}>국가코드</span>
      <input
        readOnly
        className={css.countryCode}
        style={{ color: '#8e8c8c' }}
        type="text"
        value="KOR"
      />

      <span className={css.inputSpan}>전화번호</span>
      <input
        readOnly
        className={css.tel}
        style={{ color: '#8e8c8c' }}
        type="text"
        value="010-1234-1234"
      />

      <span className={css.inputSpan}>국가</span>
      <input
        readOnly
        className={css.country}
        style={{ color: '#8e8c8c' }}
        type="text"
        value="대한민국"
      />

      <span className={css.inputSpan}>우편번호</span>
      <input
        onChange={e => setZip(e.target.value)}
        className={css.zipCode}
        type="text"
      />

      <span className={css.inputSpan}>주소</span>
      <input
        onChange={e => setAddress(e.target.value)}
        className={css.address}
        type="text"
      />

      <span className={css.inputSpan}>상세주소</span>
      <input
        onChange={e => setSubAddress(e.target.value)}
        className={css.subAddress}
        type="text"
      />

      <button onClick={postInfo}>배송 정보로 이동</button>
    </div>
  );
};

export default Shipping;
