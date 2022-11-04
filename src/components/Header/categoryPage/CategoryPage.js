import React from 'react';
import css from './CategoryPage.module.scss';
import SearchPage from '../../../pages/Search/SearchPage';
function CategoryPage({ content, img, color, subCategory }) {
  if (content === '검색') {
    return <SearchPage />;
  } else {
    return (
      <div className={css.container} style={{ backgroundColor: color }}>
        <div className={css.upBox}> </div>
        <div className={css.downBox}>
          <div className={css.logo}>
            <img src="logo-black.png" alt="logo" />
          </div>
          <div className={css.content}>
            <ul>
              <p>카테고리</p>
              {subCategory.map(e => (
                <li key={e.id}>
                  <button>{e.content} </button>
                </li>
              ))}
            </ul>
          </div>
          <img src={img} alt="pic" />
        </div>
      </div>
    );
  }
}

export default CategoryPage;
