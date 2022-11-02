import React from 'react';
import css from './CategoryPage.module.scss';

function CategoryPage({ img, content }) {
  return (
    <div className={css.container}>
      <p>{content}</p>
      <img src={img} alt="pic" />
    </div>
  );
}

export default CategoryPage;
