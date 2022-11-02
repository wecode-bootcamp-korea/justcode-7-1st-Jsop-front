import React from 'react';
import css from './CategoryPage.module.scss';

function CategoryPage({ img, content }) {
  return (
    <div className={css.container}>
      <h1>
        <p>{content}</p>
        <img src={img} alt="사진" width="500px" />
      </h1>
    </div>
  );
}

export default CategoryPage;
