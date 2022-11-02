import React, { useState, useEffect } from 'react';
import css from './NavBar.module.scss';
import CategoryPage from '../categoryPage/CategoryPage';
function NavBar({ setIsClick, isClick }) {
  const [category, setCategory] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/data/category.json')
      .then(res => res.json())
      .then(res => setCategory(res.data));
  }, []);

  const handleClickButton = content => {
    setContent(content);
    setIsClick(true);
  };

  const handleCloseBtn = content => {
    setIsClick(false);
    setContent(content);
  };
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
              {isClick ? (
                <img src="images/search-b.png" alt="glass" />
              ) : (
                <img src="images/search-w.png" alt="glass" />
              )}
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
                  src="images/cancel.png"
                  alt="cancel"
                />
              </button>
            </li>
          ) : null}
        </ul>
        <ul className={css.right}>
          <li>
            <button
              onClick={e => handleClickButton(e.target.value)}
              value="로그인"
            >
              로그인
            </button>
          </li>
          <li>
            <button
              onClick={e => handleClickButton(e.target.value)}
              value="카트"
            >
              카트
            </button>
          </li>
        </ul>
      </div>
      {category.map(e =>
        content && e.content === content ? (
          <CategoryPage key={e.id} content={e.content} img={e.img} />
        ) : null
      )}
    </div>
  );
}
export default NavBar;
