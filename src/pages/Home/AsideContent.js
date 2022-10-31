import React from 'react';
import Aside from '../../components/Aside/Aside';
import css from './AsideContent.module.scss';

function AsideContent() {
  return (
    <>
      <div className={css.leftContainer}>
        <Aside />
        <video autoPlay muted loop>
          <source src="/video/water.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={css.rightContainer}>
        <img src="/images/perfume.png" alt="향수 이미지" />
        <Aside />
      </div>
    </>
  );
}
export default AsideContent;
