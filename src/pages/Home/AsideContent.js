import React from 'react';
import Aside from '../../components/Aside/Aside';
import css from './AsideContent.module.scss';

function AsideContent() {
  return (
    <div className={css.containerWrap}>
      <div className={css.leftContainer}>
        <Aside asideName="content1" />
        <video autoPlay muted loop>
          <source src="/video/water.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={css.rightContainer}>
        <img src="/images/perfume.png" alt="향수 이미지" />
        <Aside asideName="content2" />
      </div>
    </div>
  );
}
export default AsideContent;
