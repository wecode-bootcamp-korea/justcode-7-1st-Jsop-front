import React, { useState } from 'react';
import css from './Header.module.scss';
import InfoBar from './infoBar/InfoBar';
import NavBar from './navBar/NavBar';

const data = [
  {
    id: 1,
    content: '포스트-푸 드롭스와 오일 버너 블렌드 제품 자진 회수 안내',
    type: 'page',
    url: 'none',
  },
  {
    id: 2,
    content: '전 구매 무료 배송과 선물포장 혜택을 즐겨보세요.',
    type: 'slide',
    url: 'none',
  },
];

function Header({ pageOpen, setPageOpen }) {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className={css.container}>
      {!isClick &&
        data.map(data => (
          <InfoBar
            key={data.id}
            content={data.content}
            type={data.type}
            url={data.url}
          />
        ))}
      <NavBar
        isClick={isClick}
        setPageOpen={setPageOpen}
        setIsClick={setIsClick}
        pageOpen={pageOpen}
      />
    </div>
  );
}

export default Header;
