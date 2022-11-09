import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './MyPage.module.scss';

function MyPage() {
  const [page, setPage] = useState('account');

  const handleButtonOnClick = (pageName, e) => {
    e.preventDefault();
    setPage(page => {
      return pageName;
    });
  };

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
              <button
                className={css.account}
                onClick={e => {
                  handleButtonOnClick('account', e);
                }}
              >
                계정 정보
              </button>
            </li>
            <li>
              <button
                className={css.orderList}
                onClick={e => {
                  handleButtonOnClick('orderList', e);
                }}
              >
                주문 내역
              </button>
            </li>
          </ul>
        </div>
        <div className={css.rightContent}>
          {page === 'account' && (
            <div className={css.accountPage}>
              <div className={css.private}>
                <li className={css.info}>개인 정보</li>
                <li>땡땡님</li>
                <li className={css.mail}>naver@naver.com</li>
              </div>
              <div className={css.password}>
                <li className={css.info}>패스워드</li>
                <li className={css.input}>∙∙∙∙∙∙∙∙∙∙∙∙∙∙</li>
              </div>
            </div>
          )}
          {page === 'orderList' && (
            <div className={css.orderListPage}>
              <p>현재 주문한 내용이 없습니다.</p>
              <Link to="/">
                <button>홈으로 이동</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default MyPage;
