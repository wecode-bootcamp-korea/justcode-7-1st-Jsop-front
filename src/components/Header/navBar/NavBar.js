import React, { useState, useEffect } from 'react';
import css from './NavBar.module.scss';
import CategoryPage from '../categoryPage/CategoryPage';
function NavBar() {
  const [category, setCategory] = useState([]);
  const [content, setContent] = useState('');

  const selectComponent = {
    '스킨 케어': <CategoryPage content="스킨 케어" />,
    '바디 & 핸드': <CategoryPage content="바디 & 핸드" />,
    헤어: <CategoryPage content="헤어" />,
    향수: <CategoryPage content="향수" />,
    홈: <CategoryPage content="홈" />,
    '키트 & 여행 제품': <CategoryPage content="키트 & 여행 제품" />,
    '기프트 가이드': <CategoryPage content="기프트 가이드" />,
    읽기: <CategoryPage content="읽기" />,
    스토어: <CategoryPage content="스토어" />,
    검색: <CategoryPage content="검색" />,
    로그인: <CategoryPage content="로그인" />,
    카트: <CategoryPage content="카트" />,
  };

  useEffect(() => {
    fetch('/data/category.json')
      .then(res => res.json())
      .then(res => setCategory(res.data));
  }, []);

  const handleClickButton = content => {
    setContent(content);
  };

  return (
    <div>
      <div className={`${css.container} ${content ? css.floatNav : css.none}`}>
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
              onClick={e => handleClickButton(e.target.parentNode.value)}
              value="검색"
            >
              <img src="images/search.png" alt="glass" />
            </button>
          </li>
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
      {content && <div className="content">{selectComponent[content]}</div>}
    </div>
  );
}

export default NavBar;
