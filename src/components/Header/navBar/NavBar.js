import React, { useState, useEffect } from 'react';
import css from './NavBar.module.scss';
import CategoryPage from '../categoryPage/CategoryPage';
import SearchPage from '../../../pages/Search/SearchPage';
import Login from '../../../pages/Login/Login';
import Cart from '../../Cart/Cart';
import StoreSearch from '../storeSearch/StoreSearch';

function NavBar({ setIsClick, isClick, setPageOpen }) {
  const [category, setCategory] = useState([]);
  const [content, setContent] = useState('');
  const [loginModal, setLoginModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [userFirstName, setUserFirstName] = useState();

  useEffect(() => {
    fetch('/data/category.json')
      .then(res => res.json())
      .then(res => setCategory(res.data));
  }, []);

  const handleClickButton = content => {
    setPageOpen(false);
    setContent(content);
    setIsClick(true);
  };

  const handleCloseBtn = content => {
    setPageOpen(true);
    setIsClick(false);
    setContent(content);
  };

  const openLogin = () => {
    setLoginModal(!loginModal);
  };

  const closeBtn = () => {
    setLoginModal(false);
  };

  const openCart = () => {
    setCartModal(true);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/getme', {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setUserFirstName(result.userInfo.first_name));
  }, []);

  return (
    <div>
      <div
        className={isClick ? `${css.container__reversed}` : `${css.container}`}
      >
        <ul className={css.left}>
          {category.map(e => (
            <li key={e.id}>
              <button
                onClick={e => handleClickButton(e.target.value)}
                value={e.content}
              >
                {e.content}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={e => handleClickButton(e.target.value)}
              value="스토어"
            >
              스토어
            </button>
          </li>
          <li>
            <button
              onClick={e => handleClickButton(e.target.parentNode.value)}
              value="검색"
            >
              <img
                src={process.env.PUBLIC_URL + '/images/search-b.png'}
                alt="glass"
              />
            </button>
          </li>
          {isClick ? (
            <li>
              <button
                onClick={e => handleCloseBtn(e.target.value)}
                value="닫기"
              >
                닫기
                <img
                  className={css.cancel}
                  src={process.env.PUBLIC_URL + '/images/cancel.png'}
                  alt="cancel"
                />
              </button>
            </li>
          ) : null}
        </ul>
        <ul className={css.right}>
          {userFirstName ? (
            <span className={css.userFirstName}>{userFirstName}님</span>
          ) : (
            <li>
              <button
                onClick={() => {
                  openLogin();
                }}
                value="로그인"
              >
                로그인
              </button>
              {loginModal ? <Login closeBtn={closeBtn} /> : null}
            </li>
          )}
          <li>
            <button
              onClick={() => {
                openCart();
              }}
              value="카트"
            >
              {cartModal ? <Cart openCart={openCart} /> : null}
              카트
            </button>
          </li>
        </ul>
      </div>
      {category.map(e =>
        content && e.content === content ? (
          <CategoryPage
            key={e.id}
            content={e.content}
            img={e.img}
            color={e.color}
            subCategory={e.subCategory}
          />
        ) : null
      )}
      {content === '검색' ? <SearchPage /> : null}
      {content === '스토어' ? <StoreSearch /> : null}
    </div>
  );
}
export default NavBar;
