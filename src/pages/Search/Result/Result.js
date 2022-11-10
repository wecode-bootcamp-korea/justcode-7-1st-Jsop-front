import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Result.module.scss';

function Result({ searchItem }) {
  const navigate = useNavigate();

  function getItem(e) {
    const filtered = searchItem.filter(itemList => {
      return itemList.title.includes(e.target.innerHTML);
    });
    let id = filtered[0].id;
    navigate(`/detail/${id}`);
    window.location.replace(`/detail/${id}`);
  }
  if (searchItem.length > 0) {
    return (
      <div className={css.container}>
        <div className={css.result}>
          {searchItem.map(eachItem => (
            <h1 onClick={e => getItem(e)} key={eachItem.id}>
              {eachItem.title}
            </h1>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={css.container}>
        <h1>죄송하지만 검색 결과를 찾을 수 없습니다.</h1>
        <div className={css.likeItem}>
          <p>인기 검색어</p>
          <h1>클렌저</h1>
          <h1>페뷸러스</h1>
          <h1>파슬리</h1>
          <h1>향수</h1>
        </div>
      </div>
    );
  }
}

export default Result;
