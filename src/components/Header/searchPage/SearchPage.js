import React from 'react';
import css from './SearchPage.module.scss';

function SearchPage() {
  return (
    <div className={css.container}>
      <div className={css.firstBox}>
        <div className={css.imgBox}>
          <img src="./logo-black.png" alt="logo" />
        </div>
        <div className={css.inputBox}>
          <input type="text" />
          <button>
            <img src="./next.png" alt="arrow" />
          </button>
          <p>인기 검색어</p>
          <h1>클렌저</h1>
          <h1>페뷸러스</h1>
          <h1>파슬리</h1>
          <h1>향수</h1>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
