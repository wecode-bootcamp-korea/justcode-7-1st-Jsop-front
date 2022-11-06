import React, { useState, useEffect } from 'react';
import css from './FilterNav.module.scss';
import Filter from '../../components/FilterNav/Filter';

function FilterNav() {
  const [item, setItems] = useState([]);
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('');

  const titleChange = e => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    fetch('/data/subCategory.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.subCategory);
      });
  }, []);

  return (
    <div className={css.filterNavWrap}>
      <div className={css.filterNav}>
        <div className={css.logoContainer}>
          <img src="logo-black.png" alt="로고이미지" />
        </div>
        <div className={css.subCategoryContainer}>
          <div className={css.subCategoryName}>
            <span>{title}</span>
          </div>
          <div className={css.subCategoryNav}>
            <ul className={css.subCategory}>
              <li>
                <button className={css.allItem}>모든 스킨</button>
              </li>
              <li>|</li>
              {item.map(({ id, title }) => (
                <li key={id}>
                  <button value={title} onClick={titleChange}>
                    {title}
                  </button>
                </li>
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
    </div>
  );
}
export default FilterNav;
