import React, { useState } from 'react';
import css from './CheckOut.module.scss';

const CheckOut = () => {
  return (
    <div className={css.container}>
      <div className={css.firstBox}>
        <img src="logo-black.png" alt="logo" />
      </div>
      <div className={css.secondBox}>
        <h2>주문자 정보</h2>
        <button>편집</button>
        <div className={css.info}>
          <h3> 김 코드 님</h3>
          <h3>jgb07012@gmail.com</h3>
        </div>
        <h2>배송 정보</h2>
        <button>편집</button>
        <div className={css.delivery}>
          <h3> 김 코드 님</h3>
          <h3>위코드 코드구 코드동 저스트로 72</h3>
          <h3>89126</h3>
          <h4>무료배송 ₩0</h4>
        </div>
        <h2>어떻게 지불하시겠습니까?</h2>
        <button>편집</button>
        <div className={css.pay}>
          <h3>카드결제</h3>
        </div>
        <h2>다음 페이지</h2>
        <button>편집</button>
        <div className={css.summary}>
          <h3>예정</h3>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
