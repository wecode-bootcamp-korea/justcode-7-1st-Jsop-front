import React from 'react';
import css from './Pay.module.scss';

const Pay = ({ pay, setPay, setOpen }) => {
  const handleClick = btnName => {
    setPay(btnName);
  };
  return (
    <div className={css.container}>
      <input
        type="radio"
        value="카드 결제"
        checked={pay === '카드 결제'}
        onChange={() => handleClick('카드 결제')}
      />
      <label>카드 결제</label>
      <input
        type="radio"
        value="무통장 입금"
        checked={pay === '무통장 입금'}
        onChange={() => handleClick('무통장 입금')}
      />
      <label>무통장 입금</label>
      <button onClick={() => setOpen(false)}>저장 하기</button>
    </div>
  );
};

export default Pay;
