import React from 'react';
import css from './CategoryPage.module.scss';

function CategoryPage({ content }) {
  return (
    <div className={css.container}>
      <h1> data page={content}</h1>
    </div>
  );
}

export default CategoryPage;
