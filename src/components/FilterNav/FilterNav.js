import React, { useState, useEffect } from 'react';
import css from './FilterNav.module.scss';
import Filter from '../../components/FilterNav/Filter';
import { useNavigate } from 'react-router-dom';

function FilterNav() {
  const [item, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState('');
  const [detail, setDetails] = useState([]);
  const [filterItem, setFilterItem] = useState([]);

  const navigate = useNavigate();

  const contentChange = e => {
    e.preventDefault();
    setContent(e.target.value);
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(res => {
        setDetails(detail => (detail = res));

        const filterItems = res.filter(detail => {
          return detail.category.level_2_category === e.target.value;
        });
        setFilterItem(filterItems);
      });
  };

  const allSkinCare = e => {
    e.preventDefault();
    setContent(e.target.value);
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(res => {
        setDetails(detail => (detail = res));

        const filterItems = res.filter(detail => {
          return detail.category.level_1_category === '스킨 케어';
        });
        setFilterItem(filterItems);
      });
  };

  useEffect(() => {
    fetch('http://localhost:8000/categories')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <div className={css.filterNavWrap}>
      <div className={css.filterNav}>
        <div
          className={css.logoContainer}
          onClick={() => {
            navigate('/');
          }}
        >
          <img src="logo-black.png" alt="로고이미지" />
        </div>
        <div className={css.subCategoryContainer}>
          <div className={css.subCategoryName}>
            <span>{content}</span>
          </div>
          <div className={css.subCategoryNav}>
            <ul className={css.subCategory}>
              <div className={css.allSkin}>
                <li>
                  <button onClick={allSkinCare}>모든 스킨</button>
                </li>
                <li>|</li>
              </div>
              {item
                .filter(props => props.content === '스킨 케어')
                .map(({ id, content, sub_category }) => (
                  <div key={id} className={css.subItem}>
                    {sub_category.map(({ id, content }) => (
                      <li key={id}>
                        <button value={content} onClick={contentChange}>
                          {content}
                        </button>
                      </li>
                    ))}
                  </div>
                ))}
            </ul>
            <div
              onClick={() => {
                setVisible(!visible);
              }}
            >
              {visible ? (
                <div className={css.cancelBtn}>
                  <img src="./images/cancel.png" alt="닫기이미지" />
                </div>
              ) : (
                <button className={css.filterBtn}>
                  <span>필터</span>
                  <img src="./images/filter.png" alt="필터이미지" />{' '}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {visible && (
        <div className={css.filterContainer}>
          <Filter />
        </div>
      )}

      <div className={css.productPage}>
        <div className={css.details}>
          {filterItem.map(({ id, title, img_url, price, properties }) => (
            <div
              className={css.container}
              key={id}
              onClick={() => navigate(`/detail/${id}`)}
            >
              <div className={css.containerWrapper}>
                <div className={css.mainContainer}>
                  <div className={css.imgContent}>
                    <img alt="상품이미지" src={img_url} />
                  </div>
                  <div className={css.productName}>
                    <h4>{title}</h4>
                    <div className={css.price}>
                      <p className={css.productSize}>{price[0][0]}</p>
                      <p className={css.productSize}>/</p>
                      <p className={css.productSize}>{price[0][1]}</p>
                    </div>
                  </div>
                  {properties
                    .filter(props => props.types === '피부 타입')
                    .map(({ types, values }) => (
                      <div className={css.productType} key={types}>
                        <h2>{types}</h2>
                        <p className={css.typeValue}>{values}</p>
                      </div>
                    ))}
                  {properties
                    .filter(props => props.types === '사용감')
                    .map(({ types, values }) => (
                      <div className={css.productUse} key={types}>
                        <h2>{types}</h2>
                        <p className={css.typeValue}>{values}</p>
                      </div>
                    ))}
                </div>
                <button className={css.addCartButton}>
                  <span className={css.addCart}>카트에 추가하기 — ₩47,000</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FilterNav;
