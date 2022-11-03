import React, { useState } from 'react';
import css from './SearchPage.module.scss';
import Result from './Result/Result';
function SearchPage() {
  const data = [
    {
      id: 1,
      title: '레저렉션 아로마틱 핸드 밤',
      img_url: 'test.png',
      description:
        '지친 손과 큐티클에 풍부한 수분을 공급해주는 향긋한 보태니컬 핸드 밤',
      price: [
        ['75 mL', 10000],
        ['120 mL', 13000],
        ['500 mL', 40000],
      ],
      category: {
        level_1_category: '바디 & 핸드',
        level_2_category: '핸드',
      },
      properties: [
        { type: '사용감', values: ['부드러운', '유분기 없는'] },
        { type: '향', values: ['시트러스', '우드', '허브'] },
      ],
    },
    {
      id: 2,
      title: '레저렉션 아로마틱 립 밤',
      img_url: 'test.png',
      description:
        '지친 손과 큐티클에 풍부한 수분을 공급해주는 향긋한 보태니컬 립 밤',
      price: [
        ['75 mL', 10000],
        ['120 mL', 13000],
        ['500 mL', 40000],
      ],
      category: {
        level_1_category: '바디 & 핸드',
        level_2_category: '핸드',
      },
      properties: [
        { type: '사용감', values: ['부드러운', '유분기 없는'] },
        { type: '향', values: ['시트러스', '우드', '허브'] },
      ],
    },
  ];
  const [itemInput, setItemInput] = useState('');
  const filtered = data.filter(itemList => {
    let regex = / /gi;
    let searchStr = itemInput;
    searchStr = searchStr.replace(regex, '');
    if (searchStr !== '') {
      return itemList.description.replace(regex, '').includes(searchStr);
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
          {/* <p>인기 검색어</p>
          <h1>클렌저</h1>
          <h1>페뷸러스</h1>
          <h1>파슬리</h1>
          <h1>향수</h1> */}
        </div>
        {itemInput && <Result searchItem={filtered} />}
      </div>
    </div>
  );
}

export default SearchPage;
