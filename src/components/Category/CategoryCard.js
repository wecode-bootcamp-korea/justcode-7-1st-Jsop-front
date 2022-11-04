import React, { useState, useEffect } from 'react';
import css from './CategoryCard.module.scss';

function CategoryBox() {
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/categoryCard.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.card);
      });
  }, []);

  return (
    <div className={css.cardWrap}>
      {item.map(({ id, cardImage, cardTitle, cardBody }) => (
        <div className={css.cardContainer} key={id}>
          <div className={css.imageContainer}>
            <img
              className={css.cardImage}
              src={cardImage}
              alt="카테고리이미지"
            />
          </div>
          <p className={css.title}>{cardTitle}</p>
          <p className={css.body}>{cardBody}</p>
        </div>
      ))}
    </div>
  );
}
export default CategoryBox;
