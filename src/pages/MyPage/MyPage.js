import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './MyPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function MyPage() {
  const [page, setPage] = useState('account');
  const [pageOpen, setPageOpen] = useState(true);
  const [orderList, setOrderList] = useState({});
  const handleButtonOnClick = (pageName, e) => {
    e.preventDefault();
    setPage(pageName);
  };

  useEffect(() => {
    fetch('http://localhost:8000/orders', {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => setOrderList(res.result));
  }, []);
  console.log(orderList);

  const [data, setData] = useState({});
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

  let email = data.email;
  let lastName = data.last_name;
  let firstName = data.first_name;

  return (
    <>
      <Header setPageOpen={setPageOpen} />
      {pageOpen && (
        <div className={css.myPageWrap}>
          <div className={css.logoContainer}>
            <Link to="/">
              <img src="logo-black.png" alt="logo" />
            </Link>
            <div className={css.welcome}>
              <span>
                환영합니다 {lastName}
                {firstName}님
              </span>
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
                    <li>
                      {lastName}
                      {firstName}님
                    </li>
                    <li className={css.mail}>{email}</li>
                  </div>
                  <div className={css.password}>
                    <li className={css.info}>패스워드</li>
                    <li className={css.input}>∙∙∙∙∙∙∙∙∙∙∙∙∙∙</li>
                  </div>
                </div>
              )}
              {page === 'orderList' && (
                <div className={css.orderListPage}>
                  {orderList.length < 1 ? (
                    <p>현재 주문한 내용이 없습니다.</p>
                  ) : (
                    orderList.map((prop, idx) => (
                      <div className={css.card}>
                        <span key={idx}>주문 #{idx + 1}</span>
                        <p key={idx}>가격: {prop.total_price}</p>
                        <p key={idx}>주소: {prop.address}</p>
                        <p key={idx}>주문 시각: {prop.created_at}</p>
                      </div>
                    ))
                  )}
                  <Link to="/">
                    <button>홈으로 이동</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {pageOpen && <Footer />}
    </>
  );
}
export default MyPage;
