import React, { useState, useEffect } from 'react';
import css from './CategoryProductList.module.scss';

function CategoryProductList() {
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/CategoryProduct.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.content);
      });
  }, []);
  return (
    <div>
      {item.map(
        ({
          id,
          title,
          description,
          type,
          use,
          ingredient,
          size,
          image_path,
        }) => (
          <div className={css.ProductContentWrapper} key={id}>
            <div className={css.ProductLeftImage}>
              <picture className={css.ImageWrapper}>
                <img alt="상품이미지" src={image_path} />
              </picture>
            </div>
            <div className={css.ProductRightDescription}>
              <div className={css.ProductRightDescriptionWrapper}>
                <nav className={css.ProductDetailCategory}>
                  <ul>
                    <li className={css.ProductDetailFirstCategory}>
                      <span>스킨 </span>
                    </li>
                    <li className={css.ProductDetailSecondCategory}>
                      <span>토너</span>
                    </li>
                  </ul>
                </nav>
                <header className={css.ProductName}>
                  <h1 className={css.ProductTitle}>{title}</h1>
                  <p className={css.ProductDescription}>{description}</p>
                </header>
                <div className={css.ProductDetailWrapper}>
                  <div className={css.type}>
                    <h2>피부 타입</h2>
                    <p>{type}</p>
                  </div>
                  <div className={css.use}>
                    <h2>사용감</h2>
                    <p>{use}</p>
                  </div>
                  <div className={css.ingredient}>
                    <h2>주요 성분</h2>
                    <p>{ingredient}</p>
                    {/* <div className={css.ingredientPlusButton}>
                      <i className={css.faCirclePlus} />
                    </div> */}
                  </div>
                </div>
                <div className={css.ProductSizeSelect}>
                  <h2>사이즈</h2>
                  <ul>
                    <li>
                      <label className={css.RadioButton}>
                        <input
                          className={css.RadioInput}
                          name="size"
                          type="radio"
                        />
                        <span className={css.RadioContent}>{size[0]}ml</span>
                      </label>
                    </li>
                    <li>
                      <label className={css.RadioButton}>
                        <input
                          className={css.RadioInput}
                          name="size"
                          type="radio"
                        />
                        <span className={css.RadioContent}>{size[1]}ml</span>
                      </label>
                    </li>
                  </ul>
                  <button className={css.AddToCartButton} type="button">
                    <span className={css.AddToCartPrice}>
                      카트에 추가하기 — ₩47,000
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
export default CategoryProductList;
