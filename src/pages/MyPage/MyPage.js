import React, { useState } from 'react';
import css from './MyPage.module.scss';

function MyPage() {
  return (
    <div className={css.myPageWrap}>
      <div className={css.logoContainer}>
        <img src="logo-black.png" alt="logo" />
        <div className={css.welcome}>
          <span>환영합니다 님</span>
        </div>
      </div>

      <div className={css.myPageContent}>
        <div className={css.leftNav}>
          <ul>
            <li>
              <button className={css.account}>계정 정보</button>
            </li>
            <li>
              <button className={css.orderList}>주문 내역</button>
            </li>
          </ul>
        </div>
        <div className={css.rightContent}>
          <div className={css.accountPage}>
            <div className={css.private}>
              <li>땡땡님</li>
              <li>naver@naver.com</li>
              <input type="text" />
            </div>
          </div>
          <div className={css.orderListPage}></div>
        </div>
      </div>
    </div>
  );
}
export default MyPage;
