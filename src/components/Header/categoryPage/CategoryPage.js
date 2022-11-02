import React from 'react';
import css from './CategoryPage.module.scss';

function CategoryPage({ img }) {
  return (
    <div className={css.container}>
      <div className={css.upBox}></div>
      <div className={css.downBox}>
        <img src={img} alt="pic" />
      </div>
    </div>
  );
}

export default CategoryPage;
