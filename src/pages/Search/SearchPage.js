import React, { useState, useEffect } from 'react';
import css from './SearchPage.module.scss';
import Result from './Result/Result';
function SearchPage() {
  const [data, setData] = useState([]);
  const [itemInput, setItemInput] = useState('');

  useEffect(() => {
    fetch('/data/item_list.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  const filtered = data.filter(itemList => {
    let regex = / /gi;
    let searchStr = itemInput;
    searchStr = searchStr.replace(regex, '');
    if (searchStr !== '') {
      return (
        itemList.description.replace(regex, '').includes(searchStr) ||
        itemList.title.replace(regex, '').includes(searchStr)
      );
    }
  });

  return (
    <div className={css.container}>
      <div className={css.firstBox}>
        <div className={css.imgBox}>
          <img src="./logo-black.png" alt="logo" />
        </div>
        <div className={css.inputBox}>
          <input type="text" onChange={e => setItemInput(e.target.value)} />
          <button>
            <img src="./next.png" alt="arrow" />
          </button>
          {itemInput && true ? null : (
            <div>
              <p>인기 검색어</p>
              <h1>클렌저</h1>
              <h1>페뷸러스</h1>
              <h1>파슬리</h1>
              <h1>향수</h1>
            </div>
          )}
        </div>
      </div>
      <div className={css.secondBox}>
        {itemInput && <Result searchItem={filtered} />}
      </div>
    </div>
  );
}

export default SearchPage;
